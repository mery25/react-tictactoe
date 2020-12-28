import React from "react"
import './Square.scss';

function Square(props) {

    return (
        <button 
            className={props.isHighlighted ? "square highlighted": "square"}
            onClick={props.onClick} 
            disabled={!props.isEditableSquare}>
            { props.value }
        </button>
    );
}

  export default Square;