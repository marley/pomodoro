function Dial({ title }) {
  return (
    <div>
      <div id={`${title.toLowerCase()}-label`} className="App">
        {title} Length
      </div>
      <div>
        <button id={`${title.toLowerCase()}-decrement`}>-</button>
        <div id={`${title.toLowerCase()}-length`}>5</div>
        <button id={`${title.toLowerCase()}-increment`}>+</button>
      </div>
    </div>
  );
}

export default Dial;
