import React from "react"

function Square(props) {

    return (
        <button 
            style={props.isHighlighted ? { border: "2px solid yellow"} : null}
            className="square"
            onClick={props.onClick} 
        >
            { props.value }
        </button>
    );
}

  export default Square;