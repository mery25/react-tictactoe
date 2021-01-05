import './Game.scss';
import React from "react";
import Board from "../board/Board";
import HistoryBar from '../history_bar/HistoryBar';

function GameComponent(props) {

    let gameStatus;
    if (props.nextPlayer) {
        gameStatus = <h2>Next player is  <span>{props.nextPlayer}</span></h2>
    } else if (props.winner) {
        gameStatus = <h2 className="status">The winner is <span>{props.winner}</span></h2>
    } else {
        gameStatus = <h2 className="status">The result is a tie :(</h2>
    }

    return (
         <div className="game">
            <div className="game-status">
            { gameStatus }
            </div>
            <div className="game-panel">
                <div className="game-board">
                    <Board
                        squares={props.squares}
                        isEditableBoard={props.isEditableBoard}
                        onClick={props.onClick}
                    />
                </div>
                <HistoryBar 
                    toggleSidebar={props.toggleSidebar}
                    toggleOrder={props.toggleOrder}
                    historyInfo={props.historyInfo}
                    jumpTo={props.jumpTo}
                />
            </div>
        </div> 
    );
}

export default GameComponent;