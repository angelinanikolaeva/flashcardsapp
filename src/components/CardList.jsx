import React from "react";
import Words from "../assets/data/words.json";
import Flashcard from "./Flashcard";
import "./CardList.scss";

function CardList() {
  return (
    <div className="card-container">
      {Words.map((word) => (
        <Flashcard {...word} />
      ))}
    </div>
  );
}

export default CardList;
