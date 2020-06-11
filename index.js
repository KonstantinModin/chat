const app = require("express")();
const socketio = require("socket.io");
const server = require("http").createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
