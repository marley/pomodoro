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

// TODO need a function that will switch sessions once previous one is finished

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
      if (action.payload === "focus" && state.focusTime < 60) {
        let newTime = state.focusTime + 1;
        return { ...state, focusTime: newTime };
      } else if (action.payload === "break" && state.breakTime < 60) {
        let newTime = state.breakTime + 1;
        return { ...state, breakTime: newTime };
      }
      return { ...state };
    }
    case DECREMENT: {
      console.log(`Decrement ${action.payload}`);
      if (action.payload === "focus" && state.focusTime > 1) {
        let newTime = state.focusTime - 1;
        return { ...state, focusTime: newTime };
      } else if (action.payload === "break" && state.breakTime > 1) {
        let newTime = state.breakTime - 1;
        return { ...state, breakTime: newTime };
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
      console.log("tick tock");
      console.log(action.payload);
      console.log(`${state.startTime} - ${action.payload.getTime()}`);
      var timeDiff = state.startTime - action.payload.getTime(); // get your number
      var timeDiffInMins = format(new Date(timeDiff), "mm:ss"); // create Date object
      let timeLeft = timeDiffInMins;
      // 25 - (state.startTime.getTime() - action.payload.getTime());
      // let timeLeft = state.timeLeft - 1; // TODO use datetime to decrement second
      // let session = state.session;
      // if (timeLeft === 0) {
      //   // TODO use datetime to do comparison
      //   // TODO beep beep beep!
      // }
      // if (timeLeft < 0) {
      //   // TODO use datetime to do comparison
      //   session = state.session === "focusTime" ? "breakTime" : "focusTime"; // update session to next
      //   timeLeft = session === "focusTime" ? "25:00" : "05:00";
      // }
      // return { ...state, session, timeLeft };
      return { ...state, timeLeft };
    }
    case RESET: {
      console.log(`Reset timer for ${state.session}!`);
      let started = false;
      let focusTime = 25;
      let breakTime = 5;
      let timeLeft = state.session === "focusTime" ? "25:00" : "05:00";
      return { ...state, started, breakTime, focusTime, timeLeft };
    }
    default: {
      console.log(`Default`);
      return { ...state };
    }
  }
};

export default pomodoroReducer;
