import React, {Component} from 'react'
import DrumPad from './DrumPad'
import drumData from '../drumData'
import Display from './Display'

class DrumMachine extends Component {
  constructor() {
    super()
    this.state = {
      curDrum: "",
      power: true,
      kit: 2,
      volume: 8,
    }
    this.handlePadClick = this.handlePadClick.bind(this)
    this.handleKitClick = this.handleKitClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleVolChange = this.handleVolChange.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  handleKeyPress(e) {
    let drumKeys = drumData.filter(drum => drum.kit === this.state.kit).map(drum => drum.label)
    let key = e.key.toUpperCase()
    let audio = document.getElementById(key)
    if(drumKeys.includes(key)) {
      e.preventDefault()
      this.setState({curDrum: audio.parentNode.id})
      audio.parentNode.className="drum-pad-active";
      setTimeout(()=>audio.parentNode.className="drum-pad",100)
      audio.parentNode.click()
    }
  }

  handlePadClick(e) {
    this.setState({curDrum: e.currentTarget.id})
    let audio = document.getElementById(e.currentTarget.value)
    audio.load()
    audio.volume=this.state.volume/10
    audio.play()
  }

  handleKitClick() {
    this.setState((state) => ({
      kit: state.kit === 1 ? 2 : 1
    }))
  }

  handleVolChange(e) {
    this.setState({volume: e.target.value})
  }

  render() {
    const drumComponents =
    drumData.filter(drum => drum.kit === this.state.kit)
    .map(drum => <DrumPad key={drum.pid} drum={drum} curDrum={this.state.curDrum} handlePadClick={this.handlePadClick}/>)

    return (
      <div id="drum-machine">
        <div id="drum-pad-box">
          {drumComponents}
        </div>
        <Display curDrum={this.state.curDrum} handleKitClick={this.handleKitClick} kit={this.state.kit} volume={this.state.volume} handleVolChange={this.handleVolChange}/>
      </div>
    )
  }
}

export default DrumMachine
