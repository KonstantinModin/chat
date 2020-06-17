import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";
import Header from "./Header";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={Join} />
            <Route path="/chat" exact component={Chat} />
        </BrowserRouter>
    );
};

export default App;
