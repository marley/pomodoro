import React from "react";
import { connect } from "react-redux";
import { getPauseBeep, getTimeBlock, getTimeLeft } from "../redux/selectors";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.url =
      "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";
    this.audio = new Audio(this.url);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play = () => {
    this.audio.play();
  };

  pause = () => {
    this.audio.pause();
    this.audio.load(); // rewind to beginning of sound
  };
  
  render() {
    let timeBlock =
      this.props.currentTimeBlock === "focusTime" ? "Focus" : "Break";
    if (this.props.timeLeft === "00:00") {
      this.play();
    } else if (this.props.pauseBeep) {
      // if timer has been paused or reset
      this.pause();
    }

    return (
      <div id="timer-div" className="d-flex flex-column align-items-center">
        <audio
          id="beep"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          type="audio/mp3"
        ></audio>
        <label id="timer-label">{timeBlock}</label>
        <div id="time-left">{this.props.timeLeft}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const currentTimeBlock = getTimeBlock(state);
  const pauseBeep = getPauseBeep(state);
  const timeLeft = getTimeLeft(state);
  return { currentTimeBlock, pauseBeep, timeLeft };
};

export default connect(mapStateToProps)(Timer);
