import {
  INCREMENT,
  DECREMENT,
  START_TIMER,
  STOP_TIMER,
  RESET,
} from "../actionTypes";

const initialState = {
  started: false,
  focusTime: 25,
  breakTime: 5,
  session: "focusTime",
  timeLeft: "25:00",
};

// TODO need a function that will switch sessions once previous one is finished

// const updateTimeLeft = (state, type) => {
//   let { m, s } = state.timeLeft.split(":");
//   let mVal = parseInt(m);
//   if (type === "+") {
//     mVal += 1;
//   } else {
//     mVal -= 1;
//   }
//   return `${mVal}:${s}`;
// };

// const updateTimeLeft = (state, newTime) => {
//   let timeLeft = state.
//   newTime = state[session]
// };

const pomodoroReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case INCREMENT:
      console.log(`Increment ${action.payload}`);
      if (action.payload === "focus" && state.focusTime < 60) {
        let newTime = state.focusTime + 1;
        return { ...state, focusTime: newTime };
      } else if (action.payload === "break" && state.breakTime < 60) {
        let newTime = state.breakTime + 1;
        return { ...state, breakTime: newTime };
      }
      return { ...state };
    case DECREMENT:
      console.log(`Decrement ${action.payload}`);
      if (action.payload === "focus" && state.focusTime > 0) {
        let newTime = state.focusTime - 1;
        return { ...state, focusTime: newTime };
      } else if (action.payload === "break" && state.breakTime > 0) {
        let newTime = state.breakTime - 1;
        return { ...state, breakTime: newTime };
      }
      return { ...state };
    case START_TIMER:
      console.log(`Start timer for ${state.session}!`);
      return { ...state, started: true };
    case STOP_TIMER:
      console.log(`Stop timer for ${state.session}!`);
      return { ...state, started: false };
    case RESET:
      console.log(`Reset timer for ${state.session}!`);
      let started = false;
      let focusTime = 25;
      let breakTime = 5;
      let timeLeft = state.session === "focusTime" ? "25:00" : "05:00";
      return { ...state, started, breakTime, focusTime, timeLeft };
    default:
      console.log(`Default`);
      return { ...state };
  }
};

export default pomodoroReducer;
