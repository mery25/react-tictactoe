import React from "react"
import './HistoryBar.scss';
import SwitchOrderButton from "./switch_order_button/SwitchOrderButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

function HistoryBar(props) {

    function buildDescription(move) {
        const { num, col, row} = move;
        return num ?
            <label>Move #{num}<label className="secondary">row {row}, column {col}</label></label> :
            <label>GAME START</label>;
    }

    function renderMoves(moves) {
        return moves.map(move => {
            const description = buildDescription(move);
            const { num } = move; 
            return (
                <li 
                className={ stepNumber === num ? "history-move selected-move" : "history-move" } 
                key={num}>
                    <button onClick={() => props.jumpTo(num)}>{description}</button>
                </li>
            );
        });
    }

    const { sortedMoves, isAscendingHistory, isHistoryBarOpen, stepNumber } = props.historyInfo;
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