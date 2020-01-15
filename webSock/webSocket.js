const net = require('net');
// Websocket initiation
const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log('data', data.toString())
    });
    socket.write(`Server: Hello! This is server speaking.`);
    socket.end(`Server: Closing connection now.`)
}).on('error', (error) => {
    console.log(`There's been an error`, error)
})

// server.listen(5000, () => {
//     console.log(`opened server on`, server.address().port)
// })