// import { format } from "date-fns";
import {
  INCREMENT,
  DECREMENT,
  START_TIMER,
  STOP_TIMER,
  TICK_TOCK,
  RESET,
} from "../actionTypes";
const { addSeconds, addMinutes, format } = require("date-fns");

const initialState = {
  started: false,
  focusTime: 25,
  breakTime: 5,
  session: "focusTime",
  timeLeft: "25:00",
  timerSelector: null,
  startTime: null,
};

const updateTimeLeft = (type, timeBlock, state) => {
  if (state.session === timeBlock) {
    // only update timeLeft if time changing corresponds to the current session
    let [minutesLeft, secondsLeft] = state.timeLeft.split(":");
    let minutesLeftVal = parseInt(minutesLeft);
    if (type === "+") {
      minutesLeftVal += 1;
    } else {
      minutesLeftVal -= 1;
    }
    if (minutesLeftVal.length === 1) {
      minutesLeft = `0${minutesLeftVal}`;
    } else {
      minutesLeft = `${minutesLeftVal}`;
    }
    let timeLeft = `${minutesLeft}:${secondsLeft}`;
    let startTime = updateStartTime(new Date(), timeLeft);
    return { timeLeft, startTime };
  }
  return { timeLeft: state.timeLeft, startTime: state.startTime };
};

const updateStartTime = (newStartTime, timeLeft) => {
  let [minutesLeft, secondsLeft] = timeLeft
    .split(":")
    .map((numStr) => parseInt(numStr));
  let startTime = addMinutes(newStartTime, minutesLeft);
  startTime = addSeconds(startTime, secondsLeft + 1); // add 1 to make up for display not updating right away
  return startTime;
};

const pomodoroReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case INCREMENT: {
      console.log(`Increment ${action.payload}`);
      if (state[action.payload] < 60) {
        let newTime = state[action.payload] + 1;
        let { timeLeft, startTime } = updateTimeLeft(
          "+",
          action.payload,
          state
        );
        if (action.payload === "focusTime") {
          return { ...state, focusTime: newTime, timeLeft, startTime };
        }
        return { ...state, breakTime: newTime, timeLeft, startTime };
      }
      return { ...state };
    }
    case DECREMENT: {
      console.log(`Decrement ${action.payload}`);
      if (state[action.payload] > 1) {
        let newTime = state[action.payload] - 1;
        let { timeLeft, startTime } = updateTimeLeft(
          "-",
          action.payload,
          state
        );
        if (action.payload === "focusTime") {
          return { ...state, focusTime: newTime, timeLeft, startTime };
        }
        return { ...state, breakTime: newTime, timeLeft, startTime };
      }
      return { ...state };
    }
    case START_TIMER: {
      console.log(`Start timer for ${state.session}!`);
      let timerSelector = action.timerSelector;
      let startTime = updateStartTime(action.payload, state.timeLeft);
      return { ...state, started: true, timerSelector, startTime };
    }
    case STOP_TIMER:
      console.log(`Stop timer for ${state.session} at ${action.payload}!`);
      // let stopTime = action.payload; // TODO we will need this when we start the timer again
      // let startTime = state.startTime - action.payload.getTime();
      return { ...state, started: false };
    case TICK_TOCK: {
      let timeLeft = state.timeLeft;
      let session = state.session;
      if (state.timeLeft === "00:00") {
        session = state.session === "focusTime" ? "breakTime" : "focusTime"; // update to next session
        if (state[session] < 10) {
          timeLeft = `0${state[session]}:00`;
        } else {
          timeLeft = `${state[session]}:00`;
        }
        let startTime = addMinutes(new Date(), state[session]); // need this since start time is usually set by clicking "start_stop"
        return { ...state, session, timeLeft, startTime };
      }
      let timeDiff = state.startTime - action.payload.getTime();
      timeLeft = format(new Date(timeDiff), "mm:ss");
      if (timeLeft === "00:00") {
        // TODO beep beep beep!
        console.log("Beep beep beep!");
      }
      return { ...state, session, timeLeft };
    }
    case RESET: {
      console.log(`Reset timer for ${state.session}!`);
      return {
        ...state,
        started: false,
        breakTime: 5,
        focusTime: 25,
        session: "focusTime",
        timeLeft: "25:00",
      };
    }
    default: {
      console.log(`Default`);
      return { ...state };
    }
  }
};

export default pomodoroReducer;
