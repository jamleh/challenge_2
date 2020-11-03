var http = require('http');
var url = require('url');
var fs = require('fs');

fs.writeFile('csvData.txt', 'Hello content!', function (err) {
  if (err) throw err;
  //console.log('Saved!');
});
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to turn the querystring into an object:*/
  var q = url.parse(req.url, true).query;
  /*Return the year and month from the query object:*/
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);