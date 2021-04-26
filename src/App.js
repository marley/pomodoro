import React from "react";
import Dial from "./components/Dial";
import Timer from "./components/Timer";
import Control from "./components/Control";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.audioBeep = React.createRef();
    this.playBeep = this.playBeep.bind(this);
    this.pauseBeep = this.pauseBeep.bind(this);
  }

  playBeep = () => {
    this.audioBeep.current.play();
  };

  pauseBeep = () => {
    this.audioBeep.current.pause();
    this.audioBeep.current.currentTime = 0; // rewind to beginning of sound
  };

  render() {
    return (
      <div
        id="app-container"
        className="d-flex flex-column justify-content-center"
      >
        <audio
          id="beep"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          type="audio/mp3"
          ref={this.audioBeep}
        ></audio>
        <div
          id="app-title"
          className="d-flex justify-content-between align-items-end"
        >
          <h1>P o m o d o r o T i m e r</h1>
        </div>
        <div
          id="app-main"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div id="timer-and-dials">
            <Timer play={this.playBeep} />
            <div id="app-dials" className="d-flex flex-column">
              <Dial title="session" />
              <Dial title="break" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Control type="start_stop" pauseBeep={this.pauseBeep} />
            <Control type="reset" pauseBeep={this.pauseBeep} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
