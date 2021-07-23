const app = require('express')();
const server = require('http').createServer(app);

const io = require('socket.io')(server);
io.on('connection', (socket) => { 
    console.info(`Client connected [id=${socket.id}]`);

    socket.on("disconnect", () => {
        console.info(`Client gone [id=${socket.id}]`);
    });
});

setInterval(() => {
    io.emit("seq-num", new Date().toLocaleString());
}, 3000);


server.listen(3000, function(){
    console.log('listening on *:3000');
});