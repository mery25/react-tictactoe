import React, {useState} from "react";
import { calculateWinner } from "../../logic/calculateWinner"
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
    const [ isHistoryBarOpen, setIsHistoryBarOpen ] = useState(true);
    const [ isEditableBoard, setIsEditableBoard ] = useState(true);

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
        setIsEditableBoard(step === history.length - 1);
        
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
            winner={winner ? winner.value : undefined}
            toggleOrder={toggleOrder}
            onClick={handleClick}
            isEditableBoard={isEditableBoard}
            toggleSidebar={handleToggleSideBar}
            historyInfo={{sortedMoves, isAscendingHistory, isHistoryBarOpen, stepNumber}}
            jumpTo={jumpTo}
        />
    );
}

export default GameContainer;