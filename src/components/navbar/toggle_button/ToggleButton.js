import React from "react"
import "./ToggleButton.scss"

function ToggleButton({ active, toggle }) {
    return (
        <label id="toggle" className={active ? "checked" : null} >
            <span></span>
            <input 
                type="checkbox"
                checked={active}
                id="toggle--input"
                onChange={() => toggle()}
            />
        </label>
/*         <a href="#menu" id="toggle" className={active ? "checked" : ""} onClick={() => toggleButton()} ><span></span></a>
 */    )
}

export default ToggleButton