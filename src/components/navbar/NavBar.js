import React, {useState} from "react";
import { NavLink } from 'react-router-dom'
import "./NavBar.scss"
import ToggleButton from './toggle_button/ToggleButton'

function NavBar() {

    const [ isNavBarCollapsed, setIsNavBarCollapsed ] = useState(true);

    const toggleNavbar = () => setIsNavBarCollapsed( isNavBarCollapsed => !isNavBarCollapsed )

    return (
        <div className="navbar">
            <ToggleButton active={!isNavBarCollapsed} toggle={toggleNavbar}/>
            <nav className={ isNavBarCollapsed ? "collapsed" : null }>
                <NavLink className="navbar-link" exact to="/tictactoe">Home</NavLink>
                <NavLink className="navbar-link" to="/tictactoe/game">Game</NavLink>
                <NavLink className="navbar-link" to="/tictactoe/ranking">Ranking</NavLink>
            </nav>
        </div>
    )
}

export default NavBar