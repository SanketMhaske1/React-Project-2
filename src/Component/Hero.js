import Cards from "./Cards";
import "./Hero.css";
function Hero({ tours, parentRemoveHandler }) {
  return (
    <div className="Hero">
      <div className="Heading">
        <h1>Plan With Love</h1>
      </div>
      <Cards tours={tours} parentRemoveHandler={parentRemoveHandler}></Cards>
    </div>
  );
}

export default Hero;
