const http = require('http');

const server = http.createServer((req, res) => {
    res.end("this is my first server response!, Mohamed hits full-stack :) ");
});

server.listen(process.env.PORT || 3000);