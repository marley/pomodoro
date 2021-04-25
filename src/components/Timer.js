import React from "react";
import { connect } from "react-redux";
import { getSession, getTimeLeft } from "../redux/selectors";

const Timer = ({ currentSession, timeLeft }) => {
  let sessionTitle = currentSession === "focusTime" ? "Focus" : "Break";
  if (timeLeft === "00:00") {
    const sound = document.getElementById("beep");
    sound.play();
  }
  return (
    <div id="timer-div" className="d-flex flex-column align-items-center">
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        type="audio/mp3"
      ></audio>
      <label id="timer-label">{sessionTitle}</label>
      <div id="time-left">{timeLeft}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const currentSession = getSession(state);
  const timeLeft = getTimeLeft(state);
  return { currentSession, timeLeft };
};

export default connect(mapStateToProps)(Timer);
