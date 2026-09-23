' Paper Engine Studio - on-demand launcher (the "Paper Engine Studio" shortcut).
' Makes sure the Studio answers at its Tailscale address, starting it if it does
' not, then opens it in your browser. Always the same address.
'
'   open-studio.vbs            open it (start it first if it is down)
'   open-studio.vbs /restart   restart the server, then open it
'
' Installed next to the watchdog in %USERPROFILE%\PaperEngineStudio by
' install-studio-service.ps1. The port must match the watchdog's.

Option Explicit

Const URL = "https://len13-windows.pipefish-sidemirror.ts.net:8443/"

Dim sh, fso, here, watchdog, restart, i
Set sh  = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
here     = fso.GetParentFolderName(WScript.ScriptFullName)
watchdog = here & "\studio-service.vbs"
restart  = (WScript.Arguments.Count > 0)
If restart Then restart = (LCase(WScript.Arguments(0)) = "/restart")

Function Answers()
  Dim http
  Answers = False
  On Error Resume Next
  Set http = CreateObject("MSXML2.ServerXMLHTTP.6.0")
  http.setTimeouts 3000, 3000, 3000, 3000
  http.open "GET", URL, False
  http.send
  If Err.Number = 0 Then Answers = (http.status = 200)
  On Error GoTo 0
End Function

' Every process whose command line contains `needle`, via WMI.
Function Procs(name, needle)
  Dim wmi
  Set wmi = GetObject("winmgmts:\\.\root\cimv2")
  Set Procs = wmi.ExecQuery("SELECT * FROM Win32_Process WHERE Name='" & name & "' AND CommandLine LIKE '%" & needle & "%'")
End Function

Function WatchdogRunning()
  WatchdogRunning = (Procs("wscript.exe", "studio-service.vbs").Count > 0)
End Function

Sub KillServer()
  Dim p
  For Each p In Procs("node.exe", "studio\\server.mjs")
    p.Terminate
  Next
End Sub

If restart Then
  ' The watchdog starts a fresh server within 10 seconds.
  KillServer
  WScript.Sleep 2000
End If

If Not Answers() Then
  If Not WatchdogRunning() Then
    sh.Run "wscript.exe """ & watchdog & """", 0, False
  End If
  For i = 1 To 45
    If Answers() Then Exit For
    WScript.Sleep 2000
  Next
End If

If Answers() Then
  sh.Run URL
Else
  MsgBox "Paper Engine Studio did not start within 90 seconds." & vbCrLf & vbCrLf & _
         "Is Tailscale connected, and is Google Drive (G:) mounted?" & vbCrLf & _
         "Log: " & here & "\studio.log", vbExclamation, "Paper Engine Studio"
End If
