' Purpose: Takes screenshots every 10 seconds continuously for 1 hour after this file is executed.
' Provided AS-IS and for EDUCATIONAL PURPOSE only.
' Make sure you have a drive named D on your system eg: C, D, E etc. 
' dmj.one holds no liablity or responsiblity whatsoever with respect to the use of code.
' DO NOT COPY   DO NOT MISUSE   DO NOT MODIFY
' (c) 2023, dmj.one

Option Explicit
Dim objFSO, objFile, strPath, strPSFile, objShell, strPSCommand
Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objShell = CreateObject("Wscript.Shell")
strPath = objShell.ExpandEnvironmentStrings("%temp%")
strPSFile = strPath & "\1.ps1"
If Not objFSO.FileExists(strPSFile) Then
    Set objFile = objFSO.CreateTextFile(strPSFile, True)
    objFile.WriteLine("# Load necessary .NET assemblies" & vbCrLf & "Add-Type -AssemblyName System.Windows.Forms" & vbCrLf & "Add-Type -AssemblyName System.Drawing" & vbCrLf & _
                      "# Add execution capability to the powershell" & vbCrLf & "Set-ExecutionPolicy RemoteSigned -Scope Process" & vbCrLf & _
                      "$Path = ""D:\autoscr""" & vbCrLf & "if (!(Test-Path -Path $Path)) {" & vbCrLf & "    New-Item -ItemType Directory -Force -Path $Path" & vbCrLf & "}" & vbCrLf & _
                      "$startTime = Get-Date" & vbCrLf & "while ((Get-Date) - $startTime -lt (New-TimeSpan -Hours 1)) {" & vbCrLf & "    Start-Sleep -Seconds 10" & vbCrLf & _
                      "    $screen = [System.Windows.Forms.SystemInformation]::VirtualScreen" & vbCrLf & "    $width = $screen.Width" & vbCrLf & "    $height = $screen.Height" & vbCrLf & _
                      "    $left = $screen.Left" & vbCrLf & "    $top = $screen.Top" & vbCrLf & "    $bitmap = New-Object System.Drawing.Bitmap $width, $height" & vbCrLf & _
                      "    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)" & vbCrLf & "    $graphics.CopyFromScreen($left, $top, 0, 0, $bitmap.Size)" & vbCrLf & _
                      "    $hdc = $graphics.GetHdc()" & vbCrLf & "    $graphics.ReleaseHdc($hdc)" & vbCrLf & "    $graphics.Dispose()" & vbCrLf & _
                      "    $timeStamp = (Get-Date).ToString(""yyyyMMddHHmmss"")" & vbCrLf & "    $bitmap.Save(""$Path\$timeStamp.jpg"")" & vbCrLf & "    $bitmap.Dispose()" & vbCrLf & "}" & vbCrLf & _
                      "# Reset the execution policy" & vbCrLf & "Set-ExecutionPolicy Default -Scope Process")
    objFile.Close
End If
strPSCommand = "powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File " & strPSFile
objShell.Run(strPSCommand), 0, True