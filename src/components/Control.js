function Control({ type }) {
  let icon = type === "reset" ? "undo-alt" : "play";
  // logic to pick pause
  return (
    <button id={type} className="btn">
      <i class={`fas fa-${icon}`}></i>
    </button>
  );
}

export default Control;
