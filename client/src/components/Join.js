import React from "react";
import { Link } from "react-router-dom";
import logo from "../chat.jpg";

import "./Join.css";

const Join = ({ name, room, setName, setRoom }) => {
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <img src={logo} width="120" alt="logo" />
                <h1 className="heading">Join</h1>
                <div className="">
                    <input
                        value={name}
                        type="text"
                        className="joinInput"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="">
                    <input
                        value={room}
                        type="text"
                        className="joinInput mt-20"
                        onChange={(e) => setRoom(e.target.value)}
                        placeholder="Enter room"
                        required
                    />
                </div>
                <div>
                    {name && room && (
                        <Link className="button mt-20" to="/chat">
                            Sign in
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Join;
