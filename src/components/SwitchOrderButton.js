import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const SELECTED_COLOR_STYLE = { color: "black" }
const UNSELECTED_COLOR_STYLE = { color: "grey" }

class SwitchOrderButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isAscending: true
        }
    }

    toggleButton() {
        this.setState(prevState => ({ 
            isAscending: !prevState.isAscending
        }));
    }
    
    render() {

        let downArrowStyle = SELECTED_COLOR_STYLE;
        let upArrowStyle = UNSELECTED_COLOR_STYLE;

        if (!this.state.isAscending) {
            downArrowStyle = UNSELECTED_COLOR_STYLE;
            upArrowStyle = SELECTED_COLOR_STYLE;
        }
        return (
            <button onClick={() => this.toggleButton()}>
                <FontAwesomeIcon style={downArrowStyle} icon={faArrowDown} />
                <FontAwesomeIcon style={upArrowStyle} icon={faArrowUp} />
            </button>
        );
    }
}

export default SwitchOrderButton;