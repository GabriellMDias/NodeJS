var url = require('url');
var adress = 'http://localhost:8080/default.htm?year=2023&month=02&day=25';
var q = url.parse(adress, true)

console.log(q)

var qdata = q.query;
console.log(qdata.day + "/" + qdata.month + "/" + qdata.year );