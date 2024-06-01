var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);

    if (_url == '/') {
        _url = '/index.html';
    }
    if (_url == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }

    var filePath = __dirname + _url;
    fs.readFile(filePath, function(err, data) {
        if (err) {
            response.writeHead(404);
            response.end('Not Found');
        } else {
            response.writeHead(200);
            response.end(data);
        }
    });
});

app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});
