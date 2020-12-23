import React from "react"
import '../css/HistoryBar.css';
import SwitchOrderButton from "./SwitchOrderButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

function HistoryBar(props) {

    function renderMoves(moves) {
        return moves.map(move => {
            const { num, col, row} = move;
            const description = num ?
                `Go to move #${num}: row ${row}, column ${col}` :
                'Go to game start';
            return (
                <li className="history-move" key={num}>
                    <button onClick={() => props.jumpTo(num)}>{description}</button>
                </li>
            );
        });
    }

    const { sortedMoves, isAscendingHistory, isHistoryBarOpen } = props.historyInfo;
    const sidebarClass = isHistoryBarOpen ? 'history-bar open' : 'history-bar';
    const historyBarToggleIcon = isHistoryBarOpen ? faAngleDoubleUp : faAngleDoubleDown;
    const renderedMoves = renderMoves(sortedMoves);
    return (
        <div className={sidebarClass}>
            <label className="history-bar-toggle">
                <FontAwesomeIcon 
                    className={"toggle-icon"} 
                    icon={ historyBarToggleIcon } 
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
                    icon={ historyBarToggleIcon }
                />
                <input
                    id="collapsible"
                    name="isChecked"
                    type="checkbox"
                    checked={ isHistoryBarOpen }
                    onChange={ props.toggleSidebar } />
            </label>
            <div className="history-bar-content">
                <div className="history-container">  
                    <SwitchOrderButton 
                                isAscending={isAscendingHistory} 
                                toggleOrder={props.toggleOrder} 
                            />  
                    <ol className="history">{renderedMoves}</ol>
                </div>
            </div>
        </div>
      );
};

export default HistoryBar