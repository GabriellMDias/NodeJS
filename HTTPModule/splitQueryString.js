var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.day + "/" + q.month + "/" + q.year;
    res.end(txt);
}).listen(8000);

//URL example: http://localhost:8000/?day=25&month=02&year=2023