# Script to permanently add Node.js to PATH (if needed)
# Run this as Administrator if Node.js is not in PATH permanently

$nodePath = "C:\Program Files\nodejs"
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")

if ($currentPath -notlike "*$nodePath*") {
    Write-Host "Adding Node.js to User PATH..." -ForegroundColor Yellow
    [Environment]::SetEnvironmentVariable("Path", "$currentPath;$nodePath", "User")
    Write-Host "Node.js added to PATH. Please restart PowerShell for changes to take effect." -ForegroundColor Green
} else {
    Write-Host "Node.js is already in PATH." -ForegroundColor Green
}

# Also add to current session
$env:PATH += ";$nodePath"
Write-Host "Node.js added to current session PATH." -ForegroundColor Green


