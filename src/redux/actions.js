import {
  INCREMENT,
  DECREMENT,
  START_TIMER,
  STOP_TIMER,
  TICK_TOCK,
  RESET,
} from "./actionTypes";

export const increment = (dial) => ({
  // dial = "session" or "break"
  type: INCREMENT,
  payload: dial,
});

export const decrement = (dial) => ({
  // dial = "session" or "break"
  type: DECREMENT,
  payload: dial,
});

export const startTimer = () => {
  return (dispatch) => {
    const timerSelector = setInterval(() => {
      dispatch(tickTock());
    }, 1000);
    dispatch({
      type: START_TIMER,
      payload: new Date(),
      timerSelector,
    });
  };
};

export const stopTimer = () => {
  return (dispatch, getState) => {
    dispatch({
      type: STOP_TIMER,
      payload: new Date(),
    });

    clearInterval(getState().timerSelector);
  };
};

export const tickTock = () => ({
  type: TICK_TOCK,
  payload: new Date(),
});

export const reset = () => ({
  type: RESET,
});
