function route(handle,pathname,response,request) {
	console.log("Routing request for " +pathname);
	if (typeof(handle[pathname]) === 'function')
		handle[pathname](response,request);
	else {
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("404: Not Found");
		response.end();
		console.log("No request handler for " + pathname);
	}
}

exports.route = route;