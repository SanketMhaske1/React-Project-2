import "./Empty.css";
function Empty({ resetHandler }) {
  function resetData() {
    resetHandler();
  }
  return (
    <div className="noToursLeft">
      <p className="noToursLeftText">No Tours Left</p>
      <button onClick={resetData} className="noToursLeftButton">
        Reset
      </button>
    </div>
  );
}
export default Empty;
