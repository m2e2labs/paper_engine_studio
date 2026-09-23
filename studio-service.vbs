' Paper Engine Studio - hidden watchdog launcher for the scheduled task.
' Keeps the Studio server running on this machine's Tailscale address, with no
' console window: whenever node exits (Tailscale not up yet, Google Drive not
' mounted yet, a crash, sleep/wake), it waits 10 seconds and starts it again.
'
' The task runs a LOCAL copy of this file, because G:\ (Google Drive) may not be
' mounted when you log on:  %USERPROFILE%\PaperEngineStudio\studio-service.vbs
' After editing this file, copy it there again (install-studio-service.ps1 does it).
'
' Log:            %USERPROFILE%\PaperEngineStudio\studio.log
' Stop it with:   schtasks /End /TN PaperEngineStudio   (and end the node.exe it started)
' Remove it with: schtasks /Delete /TN PaperEngineStudio /F

Option Explicit

Dim sh, fso, root, node, server, port, logDir, logFile, code
Set sh = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

root    = "G:\My Drive\Paper_Engine_Studio\paper-engine"
node    = "C:\Program Files\nodejs\node.exe"
server  = root & "\engine\studio\server.mjs"
port    = "8443"   ' the Studio's port on the Tailscale address
logDir  = sh.ExpandEnvironmentStrings("%USERPROFILE%") & "\PaperEngineStudio"
logFile = logDir & "\studio.log"

If Not fso.FolderExists(logDir) Then fso.CreateFolder logDir

Sub WriteLog(msg)
  Dim f
  On Error Resume Next
  ' Keep the log small: start over once it passes 1 MB.
  If fso.FileExists(logFile) Then
    If fso.GetFile(logFile).Size > 1048576 Then fso.DeleteFile logFile
  End If
  Set f = fso.OpenTextFile(logFile, 8, True)
  f.WriteLine Now & "  " & msg
  f.Close
  On Error GoTo 0
End Sub

' Only one watchdog at a time (the logon task and the shortcut both start one).
Dim wmi, others
Set wmi = GetObject("winmgmts:\\.\root\cimv2")
Set others = wmi.ExecQuery("SELECT ProcessId FROM Win32_Process WHERE (Name='wscript.exe' OR Name='cscript.exe') AND CommandLine LIKE '%studio-service.vbs%'")
If others.Count > 1 Then WScript.Quit 0

WriteLog "watchdog started"

Do
  If fso.FileExists(server) Then
    sh.CurrentDirectory = root
    WriteLog "starting server"
    code = sh.Run("cmd /c """"" & node & """ """ & server & """ --host tailscale --port " & port & " >> """ & logFile & """ 2>&1""", 0, True)
    WriteLog "server exited with code " & code & "; restarting in 10 s"
  Else
    WriteLog "waiting for Google Drive (" & server & " not found)"
  End If
  WScript.Sleep 10000
Loop
