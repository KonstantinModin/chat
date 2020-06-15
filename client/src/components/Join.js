import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div className="">
                    <input
                        type="text"
                        className="joinInput"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        className="joinInput mt-20"
                        onChange={(e) => setRoom(e.target.value)}
                    />
                </div>
                <Link className="button mt-20" to="/join">
                    Sign in
                </Link>
            </div>
        </div>
    );
};

export default Join;
