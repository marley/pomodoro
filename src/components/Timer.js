import React from "react";
import { connect } from "react-redux";
import { getTimeBlock, getTimeLeft } from "../redux/selectors";

class Timer extends React.Component {
  render() {
    let timeBlock =
      this.props.currentTimeBlock === "focusTime" ? "Focus" : "Break";
    if (this.props.timeLeft === "00:00") {
      this.props.play();
    }

    return (
      <div id="timer-div" className="d-flex flex-column align-items-center">
        {/* <audio
          id="beep"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          type="audio/mp3"
          ref={this.audioBeep}
        ></audio> */}
        <label id="timer-label">{timeBlock}</label>
        <div id="time-left">{this.props.timeLeft}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const currentTimeBlock = getTimeBlock(state);
  const timeLeft = getTimeLeft(state);
  return { currentTimeBlock, timeLeft };
};

export default connect(mapStateToProps)(Timer);
