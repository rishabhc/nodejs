var fs = require('fs');
var path = require('path');

module.exports = function(dir,ext,callback) {
	
	var filterFiles = function(file) {
		return '.'+ext === path.extname(file);
	}

	fs.readdir(dir,function(err,list){
		if(err)
			return callback(err);

		list = list.filter(filterFiles);
		callback(null,list);
	});

}