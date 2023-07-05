# File for Server Call from the vbs script.

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
    Start-Sleep -Seconds 2
    
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