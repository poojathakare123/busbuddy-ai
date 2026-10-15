# Native PowerShell HTTP Server for BusBuddy AI (Zero External Dependencies)
param([int]$Port = 5000)

$dir = $PSScriptRoot
$url = "http://localhost:$Port/"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
    Write-Host "========================================================" -ForegroundColor Cyan
    Write-Host "  BusBuddy AI Local Web Server is Running!" -ForegroundColor Green
    Write-Host "  URL: $url" -ForegroundColor Yellow
    Write-Host "  Folder: $dir" -ForegroundColor Gray
    Write-Host "  Press Ctrl + C in this terminal to stop the server." -ForegroundColor Magenta
    Write-Host "========================================================" -ForegroundColor Cyan
    
    # Open the browser automatically
    Start-Process $url

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($path)) { $path = "index.html" }
        $filePath = Join-Path $dir $path

        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            # Content Types
            if ($filePath.EndsWith(".html")) { $response.ContentType = "text/html; charset=utf-8" }
            elseif ($filePath.EndsWith(".css")) { $response.ContentType = "text/css; charset=utf-8" }
            elseif ($filePath.EndsWith(".js")) { $response.ContentType = "application/javascript; charset=utf-8" }
            elseif ($filePath.EndsWith(".csv")) { $response.ContentType = "text/csv; charset=utf-8" }
            else { $response.ContentType = "application/octet-stream" }

            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    }
} finally {
    $listener.Stop()
}
