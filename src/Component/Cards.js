import Card from "./Card";
import "./Cards.css";

function Cards({ tours, parentRemoveHandler }) {
  return (
    <div className="Cards">
      {tours.map((iteam, index) => (
        <Card
          key={index}
          iteam={iteam}
          parentRemoveHandler={parentRemoveHandler}
        ></Card>
      ))}
    </div>
  );
}
export default Cards;
