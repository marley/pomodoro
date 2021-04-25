import React from "react";
import { connect } from "react-redux";
import { getSession, getTimeLeft } from "../redux/selectors";

const Timer = ({ currentSession, timeLeft }) => {
  // Add logic to change label
  let sessionTitle = currentSession === "focusTime" ? "Focus" : "Break";
  return (
    <div id="timer-div" className="d-flex flex-column align-items-center">
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
