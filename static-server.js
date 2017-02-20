var static = require('node-static');
var zlib = require("zlib");
var fs = require('fs');
var url = require("url");
var path = require("path");

var file = new static.Server();

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        console.log("serving:", request.url);
        if (/\.js/.test(request.url) === true) {
            // console.log('gzipping js');
            response.setHeader("Content-Encoding", "gzip");
            response.end(
                zlib.gzipSync(
                    fs.readFileSync(
                        path.join(
                            __dirname,
                            url.parse(request.url).pathname
                        )
                    )
                )
            );
        } else {
            file.serve(request, response);
        }
    }).resume();
}).listen(80, function(){console.log("running")});
