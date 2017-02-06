var express = require('express');
var PORT = 3000;
var app = express();

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit');
		next();
	}, 
	logger: function(req, res, next){
		console.log('Request: ' + new Date().toString() + ' ' +req.method + ' ' + req.originalUrl);
		next();
	}
};
app.use(middleware.logger);

// app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication,  function(req, res){
	res.send('About us');
})

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);
app.listen(PORT, function(){
	console.log('express server started on port ' + PORT + '!');
});