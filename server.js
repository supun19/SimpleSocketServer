/**
 * Created by supun on 03/01/18.
 */
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.get('/', function(req, res){
    res.send('<h1>Simple Socket Server</h1>');
});
io.on('connection', function(client){

    client.on('event', function(data){
        console.log(data);
    });

    client.on('disconnect', function(){
        console.log("disconnect")
    });
});


server.listen(3000,function(){
    console.log('listening on *:3000');
});
