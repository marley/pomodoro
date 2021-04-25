import Dial from "./components/Dial";
import Timer from "./components/Timer";
import Control from "./components/Control";
import "./App.css";

function App() {
  return (
    <div
      id="app-container"
      className="d-flex flex-column justify-content-center"
    >
      <div
        id="app-title"
        className="d-flex justify-content-between align-items-end"
      >
        <h1>P o m o d o r o T i m e r</h1>
      </div>
      <div
        id="app-main"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div id="timer-and-dials">
          <Timer />
          <div id="app-dials" className="d-flex flex-column">
            <Dial title="Session" />
            <Dial title="Break" />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Control type="start_stop" />
          <Control type="reset" />
        </div>
      </div>
    </div>
  );
}

export default App;
