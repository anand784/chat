var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');

port = process.env.PORT || 80;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});
  
  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });
  // request("http://www.sensiple.com",function(error,response,body)
	// {
	// 	console.log(body);
	// });
http.listen(port, function(){
  console.log(port);
});