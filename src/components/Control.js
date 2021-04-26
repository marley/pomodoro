import React from "react";
import { connect } from "react-redux";
import { getStartStop } from "../redux/selectors";
import { startTimer, stopTimer, reset } from "../redux/actions";

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.props.type === "reset") {
      this.props.reset();
      this.props.pauseBeep();
    } else {
      if (this.props.started === true) {
        this.props.stopTimer();
        this.props.pauseBeep();
      } else {
        this.props.startTimer();
      }
    }
  };

  render() {
    let icon = this.props.type === "reset" ? "undo-alt" : "play";
    if (this.props.started === true && icon === "play") {
      icon = "pause";
    }
    return (
      <button id={this.props.type} className="btn" onClick={this.handleClick}>
        <i className={`fas fa-${icon}`}></i>
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  const started = getStartStop(state);
  return { started };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: () => dispatch(startTimer()),
    stopTimer: () => dispatch(stopTimer()),
    reset: () => dispatch(reset()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Control);
