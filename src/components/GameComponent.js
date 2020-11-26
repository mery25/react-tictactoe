import '../css/Game.css';
import React from "react";
import Board from "./Board";
import SwitchOrderButton from "./SwitchOrderButton"

function GameComponent(props) {

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={props.squares}
                    onClick={props.onClick}
                />
            </div>
            <div className="game-info">
                <div>{props.status}</div>
                <div>
                    <h3>History</h3>
                    <SwitchOrderButton 
                        isAscending={props.isAscendingHistory} 
                        toggleOrder={props.toggleOrder} 
                    />
                </div>
                <ol className="history">{props.sortedMoves}</ol>
            </div>
        </div>
    );
}

export default GameComponent;