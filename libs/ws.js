
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
//
// app.get('/', function(req, res){
//     res.send('<h1>Welcome to WebSocket Server</h1>');
// });
//
// io.on('connection', function(socket){
//     console.log('a user connected');
//
//     socket.on("disconnect", function() {
//         console.log("a user go out");
//     });
//
//     socket.on("message", function(obj) {
//         io.emit("message", obj);
//     });
// });
//
// http.listen(3000, function(){
//     console.log('listening on *:3000');
// });

var app = require(libs + 'app');

var websocketServer = require('ws').Server;
var ws = new websocketServer({
  port: 443
  // verifyClient = socketverify
});

// function socketverify(info){
//   var origin = info.origin.match(/^(:?.+\:\/\/)([^\/]+)/);
//   if (origin.length>=3 && origin[2] == 'wxapp.kaytion.com') {
//     return true;
//   }
//   return true;
// }
ws.on('connection', function(socket){
  socket.onmessage = message;
  socket.onclose = close;
  socket.onerror = error;
  socket.onopen = open;
});

function message (msg){

}

function error(err){

}

function close(){

}

function open(){

}
