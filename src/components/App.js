import React from "react"
import GameContainer from "./game/GameContainer"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import NavBar from "./navbar/NavBar"
import "./App.scss"

function App() {

    return (
        <div>
            <NavBar/>
            <Header />
            <GameContainer />
            <Footer />
        </div>
    );
}

export default App;