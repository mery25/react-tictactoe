import '../css/Game.css';
import React from "react";
import Board from "./Board";
import { calculateWinner } from "../calculateWinner"
import SwitchOrderButton from "./SwitchOrderButton"

class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            history: [{
                squares: Array.from({length: 9}, e => Object.assign({ value: null, isHighlighted: false})),
                squarePosition: -1
            }],
            xIsNext: true,
            stepNumber: 0,
            isAscendingHistory: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i].value) {
            return;
        }

        squares[i].value = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                squarePosition: i
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    
    toggleOrder() {
        this.setState(prevState => ({ 
            isAscendingHistory: !prevState.isAscendingHistory
        }));
    }
    
    renderMoves(history) {
        return history.map((step, move) => {
            const { squarePosition } = step;
            const row = Math.floor(squarePosition / 3);
            const col = squarePosition % 3;
            const desc = move ?
                `Go to move #${move}: row ${row}, column ${col}` :
                'Go to game start';
            return (
                <li className="history-move" key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
    }

    createStatus(winner) {
        let status;
        if (winner) {
            status = 'Winner: ' + winner.value;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return status;
    }

    highlightWinnerSquares(squares, winnerPositions) {
        let position = 0;
        return squares.map((square, i) => {
            if(position < 3 && i == winnerPositions[position]) {
                ++position;
                return {
                    ... square,
                    isHighlighted: true
                }
            }
            return square;
        })

    }

    render() {

        const history = this.state.history;
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)
        let status = this.createStatus(winner);

        const moves = this.renderMoves(history);

        const sortedMoves = this.state.isAscendingHistory 
            ? moves 
            : moves.reverse();

        const squares = winner 
            ? this.highlightWinnerSquares(current.squares, winner.positions) 
            : current.squares;

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <div>
                        <h3>History</h3>
                        <SwitchOrderButton 
                            isAscending={this.state.isAscendingHistory} 
                            toggleOrder={() => this.toggleOrder()} 
                        />
                    </div>
                    <ol className="history">{sortedMoves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;