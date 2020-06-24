import React from "react";
import io from "socket.io-client";

const Chat = ({ name, room }) => {
    const endpoint = "localhost:5000";
    const socket = io(endpoint);
    socket.emit("join", { name, room });
    console.log(socket);

    return (
        <div className="Chat">
            <h2>Chat</h2>
            <div>
                <h3>
                    Name: <span className="red">{name}</span>{" "}
                </h3>
                <h3>
                    Room: <span className="red">{room}</span>{" "}
                </h3>
            </div>
        </div>
    );
};

export default Chat;
