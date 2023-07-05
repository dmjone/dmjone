' Purpose: Takes screenshots every 10 seconds continuously for 1 hour after this file is executed.
' Provided AS-IS and for EDUCATIONAL PURPOSE only.
' Make sure you have a drive named D on your system eg: C, D, E etc. 
' dmj.one holds no liablity or responsiblity whatsoever with respect to the use of code.
' DO NOT COPY   DO NOT MISUSE   DO NOT MODIFY
' (c) 2023, dmj.one

' Verion 1: Full Screen Screenshot
' Option Explicit
' Dim objFSO, objFile, strPath, strPSFile, objShell, strPSCommand
' Set objFSO = CreateObject("Scripting.FileSystemObject")
' Set objShell = CreateObject("Wscript.Shell")
' strPath = objShell.ExpandEnvironmentStrings("%temp%")
' strPSFile = strPath & "\1.ps1"
' If objFSO.FileExists(strPSFile) Then
'     objFSO.DeleteFile(strPSFile)
' End If
' If Not objFSO.FileExists(strPSFile) Then
'     Set objFile = objFSO.CreateTextFile(strPSFile, True)
'     objFile.WriteLine("# Load necessary .NET assemblies" & vbCrLf & "Add-Type -AssemblyName System.Windows.Forms" & vbCrLf & "Add-Type -AssemblyName System.Drawing" & vbCrLf & _
'                       "# Add execution capability to the powershell" & vbCrLf & "Set-ExecutionPolicy RemoteSigned -Scope Process" & vbCrLf & _
'                       "$Path = ""D:\autoscr""" & vbCrLf & "if (!(Test-Path -Path $Path)) {" & vbCrLf & "    New-Item -ItemType Directory -Force -Path $Path" & vbCrLf & "}" & vbCrLf & _
'                       "$startTime = Get-Date" & vbCrLf & "while ((Get-Date) - $startTime -lt (New-TimeSpan -Hours 1)) {" & vbCrLf & "    Start-Sleep -Seconds 10" & vbCrLf & _
'                       "    $screen = [System.Windows.Forms.SystemInformation]::VirtualScreen" & vbCrLf & "    $width = $screen.Width" & vbCrLf & "    $height = $screen.Height" & vbCrLf & _
'                       "    $left = $screen.Left" & vbCrLf & "    $top = $screen.Top" & vbCrLf & "    $bitmap = New-Object System.Drawing.Bitmap $width, $height" & vbCrLf & _
'                       "    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)" & vbCrLf & "    $graphics.CopyFromScreen($left, $top, 0, 0, $bitmap.Size)" & vbCrLf & _
'                       "    $hdc = $graphics.GetHdc()" & vbCrLf & "    $graphics.ReleaseHdc($hdc)" & vbCrLf & "    $graphics.Dispose()" & vbCrLf & _
'                       "    $timeStamp = (Get-Date).ToString(""yyyyMMddHHmmss"")" & vbCrLf & "    $bitmap.Save(""$Path\$timeStamp.jpg"")" & vbCrLf & "    $bitmap.Dispose()" & vbCrLf & "}" & vbCrLf & _
'                       "# Reset the execution policy" & vbCrLf & "Set-ExecutionPolicy Default -Scope Process")
'     objFile.Close
' End If
' strPSCommand = "powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File " & strPSFile
' objShell.Run(strPSCommand), 0, True


' Version 2: Cropped to center rectangle. 
' Option Explicit
' Dim objFSO, objFile, strPath, strPSFile, objShell, strPSCommand
' Set objFSO = CreateObject("Scripting.FileSystemObject")
' Set objShell = CreateObject("Wscript.Shell")
' strPath = objShell.ExpandEnvironmentStrings("%temp%")
' strPSFile = strPath & "\1.ps1"
' If objFSO.FileExists(strPSFile) Then
'     objFSO.DeleteFile(strPSFile)
' End If
' If Not objFSO.FileExists(strPSFile) Then
'     Set objFile = objFSO.CreateTextFile(strPSFile, True)
'     objFile.WriteLine("Add-Type -AssemblyName System.Windows.Forms" & vbCrLf & "Add-Type -AssemblyName System.Drawing" & vbCrLf & _
'                       "Set-ExecutionPolicy RemoteSigned -Scope Process" & vbCrLf & _
'                       "$Path = ""D:\autoscr""" & vbCrLf & "if (!(Test-Path -Path $Path)) {" & vbCrLf & "    New-Item -ItemType Directory -Force -Path $Path" & vbCrLf & "}" & vbCrLf & _
'                       "$startTime = Get-Date" & vbCrLf & "while ((Get-Date) - $startTime -lt (New-TimeSpan -Hours 1)) {" & vbCrLf & "    Start-Sleep -Seconds 5" & vbCrLf & _
'                       "    $screen = [System.Windows.Forms.SystemInformation]::VirtualScreen" & vbCrLf & "    $totalWidth = $screen.Width" & vbCrLf & "    $totalHeight = $screen.Height" & vbCrLf & _
'                       "    $leftCrop = 20" & vbCrLf & "    $topCrop = 150" & vbCrLf & "    $rightCrop = 20" & vbCrLf & "    $bottomCrop = 100" & vbCrLf & _
'                       "    $cropWidth = $totalWidth - $leftCrop - $rightCrop" & vbCrLf & "    $cropHeight = $totalHeight - $topCrop - $bottomCrop" & vbCrLf & _
'                       "    $bitmap = New-Object System.Drawing.Bitmap $cropWidth, $cropHeight" & vbCrLf & _
'                       "    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)" & vbCrLf & "    $graphics.CopyFromScreen($leftCrop, $topCrop, 0, 0, $bitmap.Size)" & vbCrLf & _
'                       "    $hdc = $graphics.GetHdc()" & vbCrLf & "    $graphics.ReleaseHdc($hdc)" & vbCrLf & "    $graphics.Dispose()" & vbCrLf & _
'                       "    $timeStamp = (Get-Date).ToString(""yyyyMMddHHmmss"")" & vbCrLf & "    $bitmap.Save(""$Path\$timeStamp.jpg"")" & vbCrLf & "    $bitmap.Dispose()" & vbCrLf & "}" & vbCrLf & _
'                       "Set-ExecutionPolicy Default -Scope Process")
'     objFile.Close
' End If
' strPSCommand = "powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File " & strPSFile
' objShell.Run(strPSCommand), 0, True

' Minified verison of Cropped Screenshot script. 
' Option Explicit:Dim a,b,c,d,e,f:Set a=CreateObject("Scripting.FileSystemObject"):Set e=CreateObject("Wscript.Shell"):c=e.ExpandEnvironmentStrings("%temp%"):d=c&"\1.ps1":If a.FileExists(d)Then a.DeleteFile(d):End If:If Not a.FileExists(d)Then:Set b=a.CreateTextFile(d,True):b.WriteLine("Add-Type -AssemblyName System.Windows.Forms"&vbCrLf&"Add-Type -AssemblyName System.Drawing"&vbCrLf&"Set-ExecutionPolicy RemoteSigned -Scope Process"&vbCrLf&"$Path = ""D:\autoscr"""&vbCrLf&"if (!(Test-Path -Path $Path)) {"&vbCrLf&"New-Item -ItemType Directory -Force -Path $Path"&vbCrLf&"}"&vbCrLf&"$startTime = Get-Date"&vbCrLf&"while ((Get-Date) - $startTime -lt (New-TimeSpan -Hours 1)) {"&vbCrLf&"Start-Sleep -Seconds 5"&vbCrLf&"$screen = [System.Windows.Forms.SystemInformation]::VirtualScreen"&vbCrLf&"$totalWidth = $screen.Width"&vbCrLf&"$totalHeight = $screen.Height"&vbCrLf&"$leftCrop = 20"&vbCrLf&"$topCrop = 150"&vbCrLf&"$rightCrop = 20"&vbCrLf&"$bottomCrop = 100"&vbCrLf&"$cropWidth = $totalWidth - $leftCrop - $rightCrop"&vbCrLf&"$cropHeight = $totalHeight - $topCrop - $bottomCrop"&vbCrLf&"$bitmap = New-Object System.Drawing.Bitmap $cropWidth, $cropHeight"&vbCrLf&"$graphics = [System.Drawing.Graphics]::FromImage($bitmap)"&vbCrLf&"$graphics.CopyFromScreen($leftCrop, $topCrop, 0, 0, $bitmap.Size)"&vbCrLf&"$hdc = $graphics.GetHdc()"&vbCrLf&"$graphics.ReleaseHdc($hdc)"&vbCrLf&"$graphics.Dispose()"&vbCrLf&"$timeStamp = (Get-Date).ToString(""yyyyMMddHHmmss"")"&vbCrLf&"$bitmap.Save(""$Path\$timeStamp.jpg"")"&vbCrLf&"$bitmap.Dispose()"&vbCrLf&"}"&vbCrLf&"Set-ExecutionPolicy Default -Scope Process"):b.Close:End If:f="powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File "&d:e.Run(f,0,True)

