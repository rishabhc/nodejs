var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');

var handle = {};
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;
handle['/show'] = requestHandler.show;

server.start(router.route,handle);

