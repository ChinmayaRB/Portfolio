const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;

http.createServer((req, res) => {
    let reqUrl = req.url;
    
    // Serve headshot image correctly
    if (reqUrl === '/headshot.jpg') {
        const imgPath = path.join(__dirname, 'headshot.jpg');
        fs.readFile(imgPath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Image not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(content);
            }
        });
    } else {
        // Default to index.html
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
            }
        });
    }
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
