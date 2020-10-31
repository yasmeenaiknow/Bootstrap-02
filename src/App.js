import React from "react";
import "./App.css";
import Navigation from "./Components/nav";
import Header from "./Components/header";
import Maintwo from "./Components/mainTwo";
import Lastcontainer from "./Components/lastContainer";

function App() {
    return (
        <div className='App'>
            <Navigation />
            <Header />
            <Maintwo />
            <Lastcontainer />
        </div>
    );
}

export default App;
