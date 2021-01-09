import React from "react"
import AppRouter from "./AppRouter"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import NavBar from "./navbar/NavBar"
import "./App.scss"

function App() {

    return (
        <div>
            <NavBar/>
            <Header />
            <AppRouter />
            <Footer />
        </div>
    );
}

export default App;