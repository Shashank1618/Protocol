import net from 'net';

const server =net.createServer(socket => {
    console.log("A TCP Conncetion open....");
    socket.on('data', data => {
        
        //console.log("Data received from client");
        console.log(data.toString());
});
});

server.listen(4000);
