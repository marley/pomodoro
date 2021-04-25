import {
  INCREMENT,
  DECREMENT,
  START_TIMER,
  STOP_TIMER,
  RESET,
} from "../actionTypes";

const initialState = {
  focusTime: 25,
  breakTime: 5,
  started: false,
  session: "focusTime",
  timeLeft: 25,
};

// TODO need a function that will switch sessions once previous one is finished

const pomodoroReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(`Increment ${action.payload}`);
      return { ...state };
    case DECREMENT:
      console.log(`Decrement ${action.payload}`);
      return { ...state };
    case START_TIMER:
      console.log(`Start timer for ${state.session}!`);
      return { ...state };
    case STOP_TIMER:
      console.log(`Stop timer for ${state.session}!`);
      return { ...state };
    case RESET:
      console.log(`Reset timer for ${state.session}!`);
      return { ...state };
    default:
      console.log(`Default`);
      return { ...state };
  }
};

export default pomodoroReducer;
