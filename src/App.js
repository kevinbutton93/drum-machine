import React from "react"
import "bootstrap/dist/css/bootstrap.css"


const audioFiles = {
  "Q" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "W" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "E" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  "A" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  "S" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "D" : "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "Z" : "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "X" : "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "C" : "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
      name: "D... D... D... DJ!!",
      
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  
  handleClick(event) {
    this.setState({ name: event.target.id})
    document.getElementById(event.target.name).play()
  }
 
  handleKeyPress(event){
    if(document.getElementById(event.key.toUpperCase()) === null) return
    document.getElementById(event.key.toUpperCase()).play()
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)  
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  render(){ 
    
    

    const containerClass = " container bg-secondary border border-warning rounded border-5 "

    const buttonClass = "drum-pad btn btn-warning col-sm-3 m-3"

    return (
    <div id='drum-machine' className={containerClass} style={{marginTop: "30vh"}} >
     <div id="display" className="container text-center">
      <h1>{this.state.name}</h1>
     </div>
     <div id="row1" className="row justify-content-around">
      <button type="button" id="Heater 1" name="Q" className={buttonClass} onClick={this.handleClick}>Q
        <audio src={audioFiles.Q} className="clip" id="Q"/>
      </button>
      <button type="button" id="Heater  2" name="W" className={buttonClass} onClick={this.handleClick}>W
        <audio src={audioFiles.W} className="clip" id="W"/>
      </button>
      <button type="button" id="Heater 3" name="E" className={buttonClass} onClick={this.handleClick}>E
        <audio src={audioFiles.E} className="clip" id="E"/>
      </button>
     </div>
     <div id="row2" className="row justify-content-around">
      <button type="button" id="Heater 4" name="A" className={buttonClass} onClick={this.handleClick}>A
        <audio src={audioFiles.A} className="clip" id="A"/>
      </button>
      <button type="button" id="Heater 6" name="S" className={buttonClass} onClick={this.handleClick}>S
        <audio src={audioFiles.S} className="clip" id="S"/>
      </button>
      <button type="button" id="Disc-Ohh" name="D" className={buttonClass} onClick={this.handleClick}>D
        <audio src={audioFiles.D} className="clip" id="D"/>
      </button>
     </div>
     <div id="row3" className="row justify-content-around">
      <button type="button" id="Kick & Hat" name="Z" className={buttonClass} onClick={this.handleClick}>Z
        <audio src={audioFiles.Z} className="clip" id="Z"/>
      </button>
      <button type="button" id="Kick 1" name="X" className={buttonClass} onClick={this.handleClick}>X
        <audio src={audioFiles.X} className="clip" id="X"/>
      </button>
      <button type="button" id="Cymbal Hat" name="C" className={buttonClass} onClick={this.handleClick}>C
        <audio src={audioFiles.C} className="clip" id="C"/>
      </button>
     </div>
     
    </div>
  );}
}

export default App;
 