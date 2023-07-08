'=============================================================================================
' VBScript File
' --------------
' AUTHOR    : Divya Mohan
' DATE      : 2023
' ABOUT     : Downloads and runs the PowerShell script which takes screenshots every 7
'             seconds for one hour. If the script is running, stops it. If unable to download
'             the updated version of main file, uses the existing version.
' SITE      : https://dmj.one/tools/rec/
' HOMEPAGE  : https://dmj.one/
' COPYRIGHT : (c) 2023 Divya Mohan for dmj.one. Licensed under the MIT License. See TERMS and 
'             CONDITIONS from the https://dmj.one/terms for license and usage information.
'=============================================================================================
Option Explicit
Dim FSO, WMI, Shell, XMLHTTP, Path, PSFile, StateFile, URL, Pid
Set FSO = CreateObject("Scripting.FileSystemObject")
Set Shell = CreateObject("Wscript.Shell")
Set XMLHTTP = CreateObject("MSXML2.ServerXMLHTTP")
Set WMI = GetObject("winmgmts:{impersonationLevel=impersonate}!\\.\root\cimv2")
Path = Shell.ExpandEnvironmentStrings("%temp%")
PSFile = Path & "\1.ps1"
StateFile = Path & "\1.state"
URL = "https://dmj.one/tools/rec/script/get.dat"
If FSO.FileExists(StateFile) Then
    Pid = FSO.OpenTextFile(StateFile, 1).ReadAll
    WMI.Get("Win32_Process.Handle='" & Pid & "'").Terminate()
    WScript.Echo "Process ID " & Pid & ": The screenshot capturing program, which was configured to operate every 7th second, has been successfully terminated. Thank you for employing this script for your needs. To ensure the security and reliability of this tool, kindly ascertain that it has been downloaded solely from our official site at https://dmj.one/tools/rec/. We appreciate your trust and cooperation."
    FSO.DeleteFile StateFile
Else
    XMLHTTP.Open "GET", URL, False
    XMLHTTP.Send
    If XMLHTTP.Status = 200 Then
        If FSO.FileExists(PSFile) Then FSO.DeleteFile PSFile
        FSO.CreateTextFile(PSFile, True).Write XMLHTTP.responseText
    ElseIf Not FSO.FileExists(PSFile) Then
        WScript.Echo "The VBScript has encountered an error due to the inability to download the vital files necessary for its operation. Please verify that you possess a stable internet connection and that the website https://dmj.one is reachable. The HTTP Status reported is: " & XMLHTTP.Status & "We appreciate your understanding and prompt action in this regard."
        WScript.Quit
    Else
        WScript.Echo "Running the script from a previously downloaded version due to internet connectivity issues."
    End If
    Pid = WMI.Get("Win32_Process").Create("powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File " & Replace(PSFile, "\", "\\\\"), null, null).ProcessId
    FSO.CreateTextFile(StateFile, True).Write Pid
End If
Set XMLHTTP = Nothing
Set Shell = Nothing
Set WMI = Nothing
Set FSO = Nothing
