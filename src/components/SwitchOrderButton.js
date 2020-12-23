import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import '../css/SwitchButton.css';

function SwitchOrderButton(props) {

    return (
        <button onClick={() => props.toggleOrder()}>
            <FontAwesomeIcon 
                className={props.isAscending ? "selected": "unselected"} 
                icon={faArrowDown} 
            />
            <FontAwesomeIcon 
                className={props.isAscending ? "unselected": "selected"} 
                icon={faArrowUp} 
            />
        </button>
    );
}

export default SwitchOrderButton;