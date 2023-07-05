# vbs script calls this File from the server to get the data.

# Set execution policy to RemoteSigned for this process
Set-ExecutionPolicy RemoteSigned -Scope Process

# Load necessary .NET assemblies
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

# Path for saving screenshots
$Path = "D:\autoscr"

# Create directory if not exists
if (!(Test-Path -Path $Path)) {
    New-Item -ItemType Directory -Force -Path $Path
}

# Get start time
$startTime = Get-Date

# Run for 1 hour
while ((Get-Date) - $startTime -lt (New-TimeSpan -Hours 1)) {
    # Wait for 2 seconds
    Start-Sleep -Seconds 7
    
    # Get screen details
    $screen = [System.Windows.Forms.SystemInformation]::VirtualScreen
    $totalWidth = $screen.Width
    $totalHeight = $screen.Height
    
    # Define crop details
    $leftCrop = 20
    $topCrop = 150
    $rightCrop = 20
    $bottomCrop = 100
    $cropWidth = $totalWidth - $leftCrop - $rightCrop
    $cropHeight = $totalHeight - $topCrop - $bottomCrop
    
    # Capture screenshot and crop
    $bitmap = New-Object System.Drawing.Bitmap $cropWidth, $cropHeight
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.CopyFromScreen($leftCrop, $topCrop, 0, 0, $bitmap.Size)
    $hdc = $graphics.GetHdc()
    $graphics.ReleaseHdc($hdc)
    $graphics.Dispose()
    
    # Save screenshot
    $timeStamp = (Get-Date).ToString("yyyyMMddHHmmss")
    $bitmap.Save("$Path\$timeStamp.jpg")
    $bitmap.Dispose()
}

# Reset the execution policy for this process
Set-ExecutionPolicy Default -Scope Process


# Minified Version:   Set-ExecutionPolicy R -Sc P;Add-Type -A System.Windows.Forms;Add-Type -A System.Drawing;$P="D:\autoscr";if(!(Test-Path $P)){ni $P -ItemType Directory -Force};$sT=Get-Date;while((Get-Date)-$sT -lt (New-TimeSpan -Hours 1)){Start-Sleep -Seconds 2;$s=[System.Windows.Forms.SystemInformation]::VirtualScreen;$lC=20;$tC=150;$rC=20;$bC=100;$cW=$s.Width-$lC-$rC;$cH=$s.Height-$tC-$bC;$b=New-Object System.Drawing.Bitmap $cW,$cH;$g=[System.Drawing.Graphics]::FromImage($b);$g.CopyFromScreen($lC,$tC,0,0,$b.Size);$h=$g.GetHdc();$g.ReleaseHdc($h);$g.Dispose();$tS=(Get-Date).ToString("yyyyMMddHHmmss");$b.Save("$P\$tS.jpg");$b.Dispose();}
