import React from "react"
import '../css/HistoryBar.css';
import SwitchOrderButton from "./SwitchOrderButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

function HistoryBar(props) {
    var sidebarClass = props.isOpen ? 'history-bar open' : 'history-bar';
    return (
        <div className={sidebarClass}>
            <label className="history-bar-toggle">
                <FontAwesomeIcon 
                    className={"toggle-icon"} 
                    icon={ props.isOpen ? faAngleDoubleUp : faAngleDoubleDown} 
                />
                <span>H</span>
                <span>I</span>
                <span>S</span>
                <span>T</span>
                <span>O</span>
                <span>R</span>
                <span>Y</span>
                <FontAwesomeIcon 
                    className={"toggle-icon"}
                    icon={ props.isOpen ? faAngleDoubleUp : faAngleDoubleDown}
                />
                <input
                    id="collapsible"
                    name="isChecked"
                    type="checkbox"
                    checked={props.isOpen}
                    onChange={props.toggleSidebar} />
            </label>
            <div className="history-bar-content">
                <div className="history-container">  
                    <SwitchOrderButton 
                                isAscending={props.isAscendingHistory} 
                                toggleOrder={props.toggleOrder} 
                            />  
                    <ol className="history">{props.sortedMoves}</ol>
                </div>
            </div>
           {/*  <button onClick={props.toggleSidebar} className="sidebar-toggle">HISTORY</button> */}
        </div>
      );
};

export default HistoryBar