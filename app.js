const http = require('http')
const url = require('url')
const util = require('util')
const request = require('request')
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
    request('https://www.91nlp.cn/category-2_1.html', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.end(body)
      }
    })
}).listen(3000)