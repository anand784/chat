var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');

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
http.listen(3000, function(){
  console.log('listening on *:3000');
});