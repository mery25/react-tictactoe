import React from "react"
import "./Header.scss"
import { useLocation } from 'react-router-dom'
const HOME_PATH = '/';

function Header() {
    const location = useLocation();
    const isHomeView = location.pathname === HOME_PATH;

    return (
        <header className={isHomeView ? "expanded": null}>
            <h1><span>Welcome<span>to</span></span>
             TIC TAC TOE</h1>
        </header>
    );
}

export default Header;