const express = require('express')
const cors = require( 'cors' );
const mainRouter = require('./src/routes')
const http = require('http');

const PORT = 3000;

const app = express();
const server = http.createServer(app);
const {Server} = require('socket.io');
const {startSession,} = require('./src/services/WhatsappClient');
const io = new Server(server,{
    cors: {
        origin: "http://localhost:5173"
      }
});

io.on('connection', (socket) => {
    console.log('a user connected', socket?.id)
    
    socket.on('disconnect', () => { 
        console.log('user disconnected');
    });

    socket.on('connected', (data) => {
        console.log('connected to the server ', data);
        socket.emit("hello", "Hello from the server");
    });

    socket.on('startSession', async () => {
        await startSession({socket});
    })
});

app.use(cors());
app.use(express.json());

app.use('/api/v1/',mainRouter);

server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});



