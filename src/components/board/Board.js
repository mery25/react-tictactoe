import React from "react"
import Square from "./square/Square"
import './Board.scss';

function Board(props) {

    const NUM_ROWS = 3;
    const NUM_COLS = 3;

    function renderSquare(i) {
        const { value, isHighlighted} = props.squares[i];
        return (
            <Square
                key={i}
                value={value}
                isHighlighted={isHighlighted}
                isEditableSquare={props.isEditableBoard}
                onClick={() => props.onClick(i)}
            />
        );
    }
    
    function renderRow(fromPosition, toPosition) {
        let boardSquares = [];
        for (let j = fromPosition; j < toPosition; ++j) {
            boardSquares.push(renderSquare(j));
        }
        return boardSquares;
    }

    function renderRows() {
        let boardRows = [];
        for (let i = 0; i < NUM_ROWS * NUM_COLS; i += NUM_ROWS) {
            const boardRow = renderRow(i, i + NUM_COLS);
            boardRows.push(
                (<div className="board-row">
                    {boardRow}
                </div>)
            );
        }
        return boardRows;
    }

    return (
        <div>
            {renderRows()}
        </div>
    );

}

export default Board;