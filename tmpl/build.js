var fs = require('fs');

var copy = function(file, path){
    if(fs.existsSync(file)){
	fs.createReadStream(file).pipe(fs.createWriteStream(path));
    }
};

var curPath = process.cwd();


copy(__dirname + '/specRunner.html', curPath + '/specRunner.html');
copy(__dirname + '/spec.js', curPath + '/spec.js');

