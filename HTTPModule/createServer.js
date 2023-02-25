var http = require('http');
var myModule = require('./myfirstmodule.js')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The current date is: " + myModule.myCurrentDate());
    res.end();
}).listen(8000);

              

