const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 1582;

app.use(express.static(__dirname + '/public'));


function onConnection(socket) {
	// var bots =[];
	// var bot1 = {};
	// bot1.x = 42;
	// bot1.y = 150;
	// bot1.r = 20;
	// bot1.theta = 0;
	// bot1.color = "pink"; 
	// bot1.emit = true;
    function drawData(data) {
    	console.log("data",data);
        socket.broadcast.emit('drawing', data);
        // socket.broadcast.emit('drawing', bot1);
    }
    socket.on('drawing', drawData);
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));