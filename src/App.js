import Dial from "./components/Dial";
import Timer from "./components/Timer";
import Control from "./components/Control";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <Dial title="Break" />
      <Dial title="Session" />
      <Timer />
      <Control type="start_stop" />
      <Control type="Reset" />
    </div>
  );
}

export default App;
