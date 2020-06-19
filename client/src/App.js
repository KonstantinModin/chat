import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";
import Header from "./Header";
import "./App.css";

const App = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    const joinProps = { name, room, setName, setRoom };
    const chatProps = { name, room };

    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact render={() => <Join {...joinProps} />} />
            <Route path="/chat" exact render={() => <Chat {...chatProps} />} />
        </BrowserRouter>
    );
};

export default App;
