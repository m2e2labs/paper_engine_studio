# Installs (or re-installs) the Paper Engine Studio watchdog as the scheduled
# task "PaperEngineStudio": copies studio-service.vbs to a local folder (G:\ may
# not be mounted at logon) and runs it at logon, hidden, with no time limit.
# Also installs open-studio.vbs and the "Paper Engine Studio" shortcuts.
# Run it again after editing studio-service.vbs or open-studio.vbs.

$ErrorActionPreference = 'Stop'
try {
  $src   = Join-Path $PSScriptRoot 'studio-service.vbs'
  # Not under AppData: apps packaged as MSIX (like the Claude desktop app) have
  # their AppData writes redirected, so Task Scheduler would not see the file.
  $dir   = Join-Path $env:USERPROFILE 'PaperEngineStudio'
  $local = Join-Path $dir 'studio-service.vbs'
  $me    = [Security.Principal.WindowsIdentity]::GetCurrent().Name   # the real account, e.g. PC\m2e2

  New-Item -ItemType Directory -Force $dir | Out-Null
  Copy-Item $src $local -Force
  Copy-Item (Join-Path $PSScriptRoot 'open-studio.vbs') (Join-Path $dir 'open-studio.vbs') -Force
  Write-Output "Copied the watchdog and the launcher to $dir"

  # Shortcuts: "Paper Engine Studio" opens it (starting it if it is down),
  # "Restart Paper Engine Studio" restarts the server first. Desktop and Start menu.
  $ws = New-Object -ComObject WScript.Shell
  $places = @([Environment]::GetFolderPath('Desktop'), [Environment]::GetFolderPath('Programs'))
  foreach ($place in $places) {
    foreach ($s in @(@{ Name = 'Paper Engine Studio'; Args = '' }, @{ Name = 'Restart Paper Engine Studio'; Args = ' /restart' })) {
      $lnk = $ws.CreateShortcut((Join-Path $place ($s.Name + '.lnk')))
      $lnk.TargetPath       = "$env:WINDIR\System32\wscript.exe"
      $lnk.Arguments        = "`"$(Join-Path $dir 'open-studio.vbs')`"$($s.Args)"
      $lnk.WorkingDirectory = $dir
      $lnk.IconLocation     = "$env:WINDIR\System32\shell32.dll,13"
      $lnk.Description      = $s.Name
      $lnk.Save()
    }
  }
  Write-Output "Created shortcuts on the Desktop and in the Start menu"

  $action   = New-ScheduledTaskAction -Execute 'wscript.exe' -Argument "`"$local`""
  $existing = Get-ScheduledTask -TaskName 'PaperEngineStudio' -ErrorAction SilentlyContinue
  if ($existing) {
    # Keep the task's own account, trigger and settings; only point it at the new launcher.
    Set-ScheduledTask -TaskName 'PaperEngineStudio' -Action $action | Out-Null
    Write-Output "Updated task PaperEngineStudio"
  } else {
    $trigger   = New-ScheduledTaskTrigger -AtLogOn -User $me
    $settings  = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries `
                   -ExecutionTimeLimit ([TimeSpan]::Zero) -RestartCount 999 `
                   -RestartInterval (New-TimeSpan -Minutes 1) -MultipleInstances IgnoreNew -StartWhenAvailable
    $principal = New-ScheduledTaskPrincipal -UserId $me -LogonType Interactive -RunLevel Limited
    Register-ScheduledTask -TaskName 'PaperEngineStudio' -Action $action -Trigger $trigger -Settings $settings `
      -Principal $principal `
      -Description "Paper Engine Studio, bound to this machine's Tailscale address. A watchdog restarts it whenever it stops. Log: $dir\studio.log" | Out-Null
    Write-Output "Created task PaperEngineStudio for $me"
  }

  # Replace any running copy with the new one.
  Stop-ScheduledTask -TaskName 'PaperEngineStudio' -ErrorAction SilentlyContinue
  Get-CimInstance Win32_Process -Filter "Name='wscript.exe'" |
    Where-Object { $_.CommandLine -like '*studio-service.vbs*' } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
  Get-CimInstance Win32_Process -Filter "Name='node.exe'" |
    Where-Object { $_.CommandLine -like '*studio\server.mjs*' } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
  Start-ScheduledTask -TaskName 'PaperEngineStudio'
  Write-Output "Started. Waiting 15 s for the server..."
  Start-Sleep 15
  Get-Content (Join-Path $dir 'studio.log') -Tail 8 -ErrorAction SilentlyContinue
  if (Get-NetTCPConnection -LocalPort 8443 -State Listen -ErrorAction SilentlyContinue) {
    Write-Output "`nOK: the Studio is listening on port 8443."
  } else {
    Write-Output "`nThe Studio is NOT listening yet. Send the lines above to Claude."
  }
} catch {
  Write-Output "`nFAILED: $($_.Exception.Message)"
  Write-Output "At: $($_.InvocationInfo.PositionMessage)"
}
Read-Host "`nPress Enter to close"
