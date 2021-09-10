import Words from "../../assets/data/words.json";
import "./CardSlider.scss";
import Card from "./Card";

function CardSlider() {
  return (
    <div className="card-container">
      <Card data={Words} />
    </div>
  );
}

export default CardSlider;
