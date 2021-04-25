function Dial({ title }) {
  return (
    <div
      id={`${title.toLowerCase()}-dial-div`}
      className="dial d-flex flex-column align-items-center"
    >
      <div id={`${title.toLowerCase()}-label`} className="d-flex">
        {title} Length
      </div>
      <div className="d-flex flex-row align-items-center">
        <button id={`${title.toLowerCase()}-decrement`} className="btn">
          -
        </button>
        <div id={`${title.toLowerCase()}-length`}>5</div>
        <button id={`${title.toLowerCase()}-increment`} className="btn">
          +
        </button>
      </div>
    </div>
  );
}

export default Dial;
