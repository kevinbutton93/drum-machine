import React from "react"
import "bootstrap/dist/css/bootstrap.css"



const buttonInfo = {
  button1: {
    id: "clap",
    text: "Q",
    audio: "/sounds/Claps/707-clap.wav"
  },
  button2: {
    id: "cymbal",
    text: "w",
    audio: "/sounds/Cymbals/curiouscym1.wav"
  },
}


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  
 
  render(){ 
    
    const containerClass = 
    " container bg-secondary border border-warning rounded border-5"

    const buttonClass = "drum-pad btn btn-warning col-sm-3 m-3"

    return (
    <div id='drum-machine' className={containerClass}>
     <div id="display" class="container text-center">
      <h1>button text</h1>
     </div>
     <div id="row1" class="row justify-content-around">
      <button type="button" className={buttonClass}>Button1</button>
      <button type="button" className={buttonClass}>Button2</button>
      <button type="button" className={buttonClass}>Button3</button>
     </div>
     <div id="row2" class="row justify-content-around">
      <button type="button" className={buttonClass}>Button4</button>
      <button type="button" className={buttonClass}>Button5</button>
      <button type="button" className={buttonClass}>Button6</button>
     </div>
     <div id="row3" class="row justify-content-around">
      <button type="button" className={buttonClass}>Button7</button>
      <button type="button" className={buttonClass}>Button8</button>
      <button type="button" className={buttonClass}>Button9</button>
     </div>
     
    </div>
  );}
}

export default App;
 