$header = "<!-------------------------- © 2007 - present, dmj.one and contributors. ----------------------------------`r`n   Part of the dmjone project. Licensed under the GNU AGPL. Provided as-is, without warranty of any kind. `r`n-------------------- Redistribution and modifications must retain this notice. --------------------------->`r`n`r`n"

# Function to insert header if not already present
function Insert-Header {
    param (
        [string]$filePath,
        [string]$header
    )

    $content = Get-Content -Path $filePath -Raw
    if ($content -notmatch '© 2007 - present, dmj.one and contributors.') {
        $newContent = $header + "`r`n" + $content
        Set-Content -Path $filePath -Value $newContent -Force
    }
}

# Get the files to process
$files = Get-ChildItem -Path "C:\wamp64\www" -Filter *.html -Recurse

# Process each file
foreach ($file in $files) {
    Insert-Header -filePath $file.FullName -header $header
}
