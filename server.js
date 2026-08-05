const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

const requestHandler = (req, res) => {
    let reqUrl;
    try {
        reqUrl = decodeURIComponent(req.url.split('?')[0]);
    } catch (e) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('400 Bad Request');
        return;
    }

    let relativePath = reqUrl === '/' ? 'index.html' : reqUrl.replace(/^\/+/, '');
    let filePath = path.join(__dirname, relativePath);

    // Prevent directory traversal attacks (case-insensitive for Windows compatibility)
    const normalizedBase = path.resolve(__dirname).toLowerCase();
    const normalizedFile = path.resolve(filePath).toLowerCase();

    if (!normalizedFile.startsWith(normalizedBase)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'text/html; charset=utf-8';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Fallback to index.html for SPA client-side routing
            fs.readFile(path.join(__dirname, 'index.html'), (indexErr, indexContent) => {
                if (indexErr) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('404 Not Found');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end(indexContent, 'utf-8');
                }
            });
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
};

if (require.main === module) {
    const server = http.createServer(requestHandler);
    server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    });
}

module.exports = requestHandler;

