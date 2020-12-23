import '../css/Game.css';
import React, {useState} from "react";
import { calculateWinner } from "../calculateWinner"
import GameComponent from "./GameComponent"

function GameContainer() {

    const BOARD_SIZE = 9;
    
    const [ history, setHistory ] = useState(
        [{
            squares: Array.from(
                { length: BOARD_SIZE }, 
                () => Object.assign({ value: null, isHighlighted: false})
            ),
            squarePosition: -1
        }]
    );
    const [ xIsNext, setXIsNext ] = useState(true);
    const [ stepNumber, setStepNumber ] = useState(0);
    const [ isAscendingHistory, setIsAscendingHistory ] = useState(true);
    const [ isHistoryBarOpen, setIsHistoryBarOpen] = useState(true);

    function handleClick(i) {
        const oldHistory = history.slice(0, stepNumber + 1);
        const current = oldHistory[oldHistory.length - 1];
        const squares = [...current.squares];

        if (calculateWinner(squares) || squares[i].value) {
            return;
        }

        squares[i] = {
            ...squares[i],
            value: xIsNext ? 'X' : 'O'
        }
        setHistory(prevHistory => prevHistory.concat([{
            squares: squares,
            squarePosition: i
        }]));
        setStepNumber(oldHistory.length);
        setXIsNext(prevXIsNext => !prevXIsNext);
    }

    function jumpTo(step) {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    
    function toggleOrder() {
        setIsAscendingHistory(prevIsAscendingHistory => !prevIsAscendingHistory)
    }
    
    function extractMovesFrom(history) {
        return history.map((step, numMove) => {
            let row = -1;
            let col = -1;
            if (numMove) {
                const { squarePosition } = step;
                row = Math.floor(squarePosition / 3);
                col = squarePosition % 3;
            }
            return { num: numMove, row: row, col: col};
        });
    }

    function createStatus(winner) {
        let status;
        if (winner) {
            status = 'Winner: ' + winner.value;
        } else if (stepNumber === BOARD_SIZE) {
            status = "This is a tie!"
        } else {
            status = 'Next player: ' + <span>(xIsNext ? 'X' : 'O')</span>;
        }
        return status;
    }

    function getNextPlayer(winner) {
        if (winner || stepNumber === BOARD_SIZE) {
            return null;
        }
        return xIsNext ? 'X' : 'O';
    }

    function highlightWinnerSquares(squares, winnerPositions) {
        let position = 0;
        return squares.map((square, i) => {
            if(position < winnerPositions.length 
                && i == winnerPositions[position]) {
                ++position;
                return {
                    ... square,
                    isHighlighted: true
                }
            }
            return square;
        })

    }

    function handleToggleSideBar(evt) {
        setIsHistoryBarOpen(prevIsHistoryBarOpen => !prevIsHistoryBarOpen)
    }

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    const status = createStatus(winner);
    const moves = extractMovesFrom(history);

    const sortedMoves = isAscendingHistory 
        ? moves 
        : moves.reverse();

    const squares = winner 
        ? highlightWinnerSquares(current.squares, winner.positions) 
        : current.squares;

    return (
        <GameComponent 
            squares={squares}
            nextPlayer={getNextPlayer(winner)}
            status={status}
            toggleOrder={toggleOrder}
            onClick={handleClick}
            toggleSidebar={handleToggleSideBar}
            historyInfo={{sortedMoves, isAscendingHistory, isHistoryBarOpen}}
            jumpTo={jumpTo}
        />
    );
}

export default GameContainer;