import { useState } from "react";
import "./Card.css";
function Card({ iteam, parentRemoveHandler }) {
  let price = iteam.price;
  let name = iteam.name;
  let info = `${iteam.info.substring(0, 200)}`;
  let [readmore, setReadmore] = useState(false);
  let id = iteam.id;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  function removeHandler(id) {
    parentRemoveHandler(id);
  }

  return (
    <div className="card">
      <img src={iteam.image} className="cardImg"></img>
      <p className="cardPrice">${price}</p>
      <p className="cardName">{name}</p>
      <p className="cardInfo">
        {readmore ? iteam.info : info}
        <span onClick={readmoreHandler} className="cardReadMore">
          {readmore ? `....show less` : `....read more`}
        </span>
      </p>
      <div className="cardButton">
        <button className="btn" onClick={() => removeHandler(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}
export default Card;
