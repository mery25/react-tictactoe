import React from "react"
import "./Home.scss"
import { Link, useLocation } from "react-router-dom";

function Home() {

    return (
        <section id="home">
            <Link to={useLocation().pathname + "/game"}>Play</Link>
            <article>
                <h3>Rules</h3>
                <ul>
                    <li>The game is played on a grid that's 3 squares by 3 squares.</li>
                    <li>You are X, your friend (or the computer in this case) is O.</li>
                    <li>The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.</li>
                    <li>When all 9 squares are full, the game is over.</li>
                </ul>              
            </article>
        </section>
    );
}

export default Home;