const http = require('http');
const app = require('./app'); 

app.set('port', process.env.PORT || 3000 );

const server = http.createServer(app);

// comment this hard coded line 
/*
const server = http.createServer((req, res) => {
    res.end("this is my first server response!, Mohamed hits full-stack :) ");
});
*/

server.listen(process.env.PORT || 3000);