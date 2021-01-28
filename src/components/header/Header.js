import React from "react"
import "./Header.scss"
import { useLocation } from 'react-router-dom'
const HOME_PATH_REGEX = /\/tictactoe\/?$/

function Header() {
    const location = useLocation();
    const isHomeView = HOME_PATH_REGEX.test(location.pathname)

    return (
        <header className={isHomeView ? "expanded": null}>
            <h1><span>Welcome<span>to</span></span>
             TIC TAC TOE</h1>
        </header>
    );
}

export default Header;