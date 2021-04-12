import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Button from "./Button"


const buttonInfo = {
  button1: {
    id: "clap",
    text: "Q",
    audio: "src\DRUMS (SINGLE HITS)\Claps\707-clap.wav"
  }
  ,
}


function App() {
  
  const containerClass = 
    " container bg-secondary border border-warning rounded border-5"


  return (
    <div id='drum-machine' className={containerClass}>
     <div id="display">
     </div>
     <Button></Button>
     <Button></Button>
     <Button></Button>
     <Button></Button>
     <Button></Button>
     <Button></Button>
     <Button></Button>
     <Button></Button>
     <Button></Button>
    </div>
  );
}

export default App;
 