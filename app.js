var express = require('express');
var app = express();
/*to serve staticfiles that are in the public 
directory use the express.static built in 
middleware function
*/
/*
app.use(express.static('public'));
app.use(express.static('filesfolder'));
app.use('/static', express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
*/

app.get('/' ,function (req, res){
	res.send('Hello World!');
});

app.post('/' ,function(req, res){
	res.send('Got a post request');
});

app.put('/user' ,function(req, res){
	res.send('Got a PUT request at /user');
});

app.delete('/user' ,function(req, res){
	res.send('Got a DELETE request at /user');
});

 app.listen(3000, function (){
 	console.log('Example app listening on port 3000');
 });
