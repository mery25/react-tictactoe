import React from "react"
import GameContainer from "./game/GameContainer"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import "./App.css"

function App() {

    return (
        <div>
            <Header />
            <GameContainer />
            <Footer />
        </div>
    );
}

export default App;