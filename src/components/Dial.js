import React from "react";
import { connect } from "react-redux";
import { getFocusTime, getBreakTime } from "../redux/selectors";
import { increment, decrement } from "../redux/actions";

class Dial extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    let val = event.target.value;
    if (val === "+") {
      if (this.props.title === "session") {
        this.props.incrementFocusTime();
      } else {
        this.props.incrementBreakTime();
      }
    } else {
      if (this.props.title === "session") {
        this.props.decrementFocusTime();
      } else {
        this.props.decrementBreakTime();
      }
    }
  };
  render() {
    let title = this.props.title;
    let name = this.props.title === "session" ? "Focus" : "Break";
    let sessionLength =
      this.props.title === "session"
        ? this.props.focusTime
        : this.props.breakTime;
    return (
      <div
        id={`${title}-dial-div`}
        className="dial d-flex flex-column align-items-center"
      >
        <div id={`${title}-label`} className="d-flex">
          {name} Time
        </div>
        <div className="d-flex flex-row align-items-center">
          <button
            id={`${title}-decrement`}
            className="btn"
            value="-"
            onClick={this.handleClick}
          >
            -
          </button>
          <div id={`${title}-length`}>{sessionLength}</div>
          <button
            id={`${title}-increment`}
            className="btn"
            value="+"
            onClick={this.handleClick}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const focusTime = getFocusTime(state);
  const breakTime = getBreakTime(state);
  return { focusTime, breakTime };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementFocusTime: () => dispatch(increment("focus")),
    incrementBreakTime: () => dispatch(increment("break")),
    decrementFocusTime: () => dispatch(decrement("focus")),
    decrementBreakTime: () => dispatch(decrement("break")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dial);
