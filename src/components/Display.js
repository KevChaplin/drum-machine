import React from 'react'

function Display(props) {
  return (
    <div id="display">
      <button id="kit-button" onClick={props.handleKitClick}>
        <p>{`Kit ${props.kit}`}</p>
      </button>
      <div id="drum-display">
        <p id="text-block">{props.curDrum}</p>
      </div>
      <input type="range" id="volume" name="volume" min="0" max="10" step="1" value={props.volume} onChange={props.handleVolChange}></ input>
    </div>
  )
}

export default Display
