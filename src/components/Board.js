import React from "react"
import Square from "./Square"

const NUM_ROWS = 3;
const NUM_COLS = 3;

class Board extends React.Component {

    renderSquare(i) {
        return <Square
            key={i}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }
    
    renderRow(fromPosition, toPosition) {
        let boardSquares = [];
        for (let j = fromPosition; j < toPosition; ++j) {
            boardSquares.push(this.renderSquare(j));
        }
        return boardSquares;
    }

    renderRows() {
        let boardRows = [];
        for (let i = 0; i < NUM_ROWS * NUM_COLS; i += NUM_ROWS) {
            let boardRow = this.renderRow(i, i + NUM_COLS);
            boardRows.push(
                (<div className="board-row">
                    {boardRow}
                </div>)
            );
        }
        return boardRows;
    }

    render() {
       let boardRows = this.renderRows();

        return (
            <div>
                {boardRows}
            </div>
        );
    }
}

export default Board;