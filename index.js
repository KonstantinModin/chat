const app = require("express")();
const socketio = require("socket.io");
const server = require("http").createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

const router = require("./router");

io.on("connection", (socket) => {
    console.log("New connection has been successfully established");

    socket.on("join", ({ name, room }) => {
        console.table({ name, room });
    });

    socket.on("disconnect", () => {
        console.log("User left!");
    });
});

app.use(router);

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
