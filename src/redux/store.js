import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pomodoroReducer from "./reducers";

export default createStore(pomodoroReducer, applyMiddleware(thunk));
