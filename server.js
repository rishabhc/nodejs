var http = require('http');
var url = require('url');

function start(route,handle) {
	var server = http.createServer(onRequest);
	server.listen(8888);
	
	function onRequest(request,response) {
		var pathname = url.parse(request.url).pathname;
		console.log("request for " + pathname + " received");
		route(handle,pathname,response,request);
	}

	console.log("Server has started");	
}

exports.start = start;