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
  payload: `${dial}Time`,
});

export const decrement = (dial) => ({
  // dial = "session" or "break"
  type: DECREMENT,
  payload: `${dial}Time`,
});

export const startTimer = () => {
  return (dispatch, getState) => {
    const timerSelector = setInterval(() => {
      dispatch(tickTock());
    }, 1000);
    dispatch({
      type: START_TIMER,
      payload: getState().timeLeft,
      timerSelector,
    });
  };
};

export const stopTimer = () => {
  return (dispatch, getState) => {
    dispatch({
      type: STOP_TIMER,
    });

    clearInterval(getState().timerSelector);
  };
};

export const tickTock = (timeLeft) => ({
  type: TICK_TOCK,
  payload: timeLeft,
});

export const reset = () => {
  return (dispatch, getState) => {
    dispatch({
      type: RESET,
    });

    clearInterval(getState().timerSelector);
  };
};
