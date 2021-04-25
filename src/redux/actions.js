import {
  INCREMENT,
  DECREMENT,
  START_TIMER,
  STOP_TIMER,
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

export const startTimer = () => ({
  type: START_TIMER,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const reset = () => ({
  type: RESET,
});
