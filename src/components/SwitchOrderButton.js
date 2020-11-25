import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const SELECTED_COLOR_STYLE = { color: "black" }
const UNSELECTED_COLOR_STYLE = { color: "grey" }

function SwitchOrderButton(props) {

    let downArrowStyle = SELECTED_COLOR_STYLE;
    let upArrowStyle = UNSELECTED_COLOR_STYLE;

    if (!props.isAscending) {
        downArrowStyle = UNSELECTED_COLOR_STYLE;
        upArrowStyle = SELECTED_COLOR_STYLE;
    }
    return (
        <button onClick={() => props.toggleOrder()}>
            <FontAwesomeIcon style={downArrowStyle} icon={faArrowDown} />
            <FontAwesomeIcon style={upArrowStyle} icon={faArrowUp} />
        </button>
    );
}

export default SwitchOrderButton;