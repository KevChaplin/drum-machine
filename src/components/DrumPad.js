import React from 'react'

function DrumPad(props) {
  return (
    <button id={props.drum.name} className="drum-pad" onClick={props.handlePadClick} value={props.drum.label}>{props.drum.label}
      <audio id={props.drum.label} className="clip" src={props.drum.link} type="audio/mpeg">
      Audio not supported
      </audio>
    </button>
  )
}

export default DrumPad
