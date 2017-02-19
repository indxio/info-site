var port = 8002;
var express = require('express');
var app = express();
app.use('/',express.static('static'));
app.listen(port, function(){
	console.log('DEVSERV running on port '+port);
});
