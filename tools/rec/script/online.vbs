'=============================================================================================
' VBScript File for Automating the Process of Capturing Screenshot of Full Screen / Cropped Screen
' --------------
' AUTHOR    : Divya Mohan
' DATE      : 2023
' ABOUT     : This script is provided as-is and is for educational purposes only. It downloads
'             and runs the PowerShell script which takes screenshots every 7 seconds for specified
'             time. If the script is running, stops it. If unable to download the updated version
'             of core files, it uses the existing version.
' SITE      : https://dmj.one/tools/rec/
' HOMEPAGE  : https://dmj.one/
' COPYRIGHT : (c) 2023 Divya Mohan for dmj.one. Licensed under the GNU General Public License. 
'             For license and usage information, please visit https://www.gnu.org/licenses/gpl-3.0.en.html'
'             See TERMS and CONDITIONS from the https://dmj.one/terms for license and usage information.
'=============================================================================================


Option Explicit
On Error Resume Next

Dim FSO, WMI, Shell, XMLHTTP, Path, PSFile, StateFile, URL, Pid, LogFile, LogFilePath, LoggingEnabled, StartTime, EndTime
Set FSO = CreateObject("Scripting.FileSystemObject")
Set Shell = CreateObject("WScript.Shell")
Set XMLHTTP = CreateObject("MSXML2.ServerXMLHTTP")
Set WMI = GetObject("winmgmts:{impersonationLevel=impersonate}!\\.\root\cimv2")

' Set to True to enable logging, False to disable
LoggingEnabled = False

Path = Shell.ExpandEnvironmentStrings("%temp%")
PSFile = Path & "\1.ps1"
StateFile = Path & "\1.state"
LogFilePath = Path & "\1.log"
URL = "https://dmj.one/tools/rec/script/get2.dat"
StartTime = Now
EndTime = DateAdd("h", 2, StartTime)

' Create log file if logging is enabled
If LoggingEnabled Then
    If Not FSO.FileExists(LogFilePath) Then
        Set LogFile = FSO.CreateTextFile(LogFilePath, True)
    Else
        Set LogFile = FSO.OpenTextFile(LogFilePath, 8, True)
    End If
    LogFile.WriteLine "Script started."
Else 
    If FSO.FileExists(LogFilePath) Then
        FSO.DeleteFile LogFilePath
    End If
End If


' If state file exists, attempt to terminate existing process
If FSO.FileExists(StateFile) Then
    If LoggingEnabled Then LogFile.WriteLine "State file exists. Attempting to terminate process."
    Pid = FSO.OpenTextFile(StateFile, 1).ReadAll
    If WMI.ExecQuery("Select * from Win32_Process where ProcessId = '" & Pid & "'").Count > 0 Then
        WMI.Get("Win32_Process.Handle='" & Pid & "'").Terminate()
        If Err.Number = 0 Then
            FSO.DeleteFile StateFile
            WScript.Echo "Screenshot capture has been successfully stopped!" & vbCrLf & vbCrLf & "Ready for more?" & vbCrLf & vbCrLf & "Discover unlimited learning possibilities at https://dmj.one. "& vbCrLf & "The path of knowledge is endless"
            If LoggingEnabled Then LogFile.WriteLine "Process terminated and state file deleted."
            WScript.Quit
        Else
            If LoggingEnabled Then LogFile.WriteLine "Error terminating process: " & Err.Description
            Err.Clear
        End If
    Else
        If LoggingEnabled Then LogFile.WriteLine "No process with PID: " & Pid & " found. State file might be stale."
        FSO.DeleteFile StateFile
    End If
End If

' Download the PowerShell script
If LoggingEnabled Then LogFile.WriteLine "Attempting to download PowerShell script."
XMLHTTP.Open "GET", URL, False
XMLHTTP.Send

If XMLHTTP.Status = 200 Then
    If LoggingEnabled Then LogFile.WriteLine "Downloaded PowerShell script."
    If FSO.FileExists(PSFile) Then FSO.DeleteFile PSFile
    FSO.CreateTextFile(PSFile, True).Write XMLHTTP.responseText
ElseIf Not FSO.FileExists(PSFile) Then
    If LoggingEnabled Then LogFile.WriteLine "Error downloading PowerShell script: " & XMLHTTP.statusText
    WScript.Echo "An error has occurred: unable to download necessary files. Please check your internet connection and the website's availability: https://dmj.one. HTTP Status: " & XMLHTTP.Status & ". Your prompt action is appreciated."
    WScript.Quit
Else
    If LoggingEnabled Then LogFile.WriteLine "Unable to update necessary files. Running from previously downloaded version due to internet connectivity issues. Please connect to the internet to experience exciting new features."
End If

' Run the downloaded PowerShell script and save its PID to the state file
Shell.Run "powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File " & PSFile, 0, False
Pid = GetPID()
FSO.CreateTextFile(StateFile, True).Write Pid
If LoggingEnabled Then LogFile.WriteLine "Created state file with process ID" & Pid & "."
WScript.Echo "Capture Activated! Screenshots will be taken every 7 seconds from now until: " & EndTime & " and will be stored in C:\autoscr. The process will run quietly with no further notifications." & vbCrLf & vbCrLf & "In case you need to stop capturing earlier, just re-run this file or logoff or shutdown or restart your computer." & vbCrLf & vbCrLf & "Want to learn more and explore useful tools? Visit us at: https://dmj.one. Ignite your knowledge journey."
WScript.Quit


' Finish up and clean up objects
If LoggingEnabled Then LogFile.WriteLine "Script finished."
Set XMLHTTP = Nothing
Set Shell = Nothing
Set WMI = Nothing
Set FSO = Nothing
If LoggingEnabled Then Set LogFile = Nothing

Function GetPID()
    Dim strComputer, objWMIService, colProcesses, objProcess, Pid
    strComputer = "."
    Pid = Null
    Set objWMIService = GetObject("winmgmts:{impersonationLevel=impersonate}!\\" & strComputer & "\root\cimv2")
    Set colProcesses = objWMIService.ExecQuery("Select * from Win32_Process Where Name = 'powershell.exe'")
    For Each objProcess in colProcesses
        If InStr(objProcess.CommandLine, "1.ps1") Then
            Pid = objProcess.ProcessId
        End If
    Next
    GetPID = Pid
End Function