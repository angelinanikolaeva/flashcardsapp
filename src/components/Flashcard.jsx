import React, { useState } from "react";
import "./Flashcard.scss";

function Flashcard(props) {
  const { english, transcription, russian, tags } = props;
  const [isFlipped, setFlipped] = useState(false);
  const flipChange = () => {
    setFlipped(!isFlipped);
  };
  return (
    <div className="card" onClick={flipChange}>
      <div className={"card__inner" + (isFlipped ? " is-flipped" : "")}>
        <div className="card__face card__face--front">
          <h2>{english}</h2>
        </div>
        <div className="card__face card__face--back">
          <div className="card__content">
            <div className="card__header">
              {/* <img src="pp.jpg" alt="" className="pp" /> */}
              <h2>{english}</h2>
            </div>
            <div className="card__body">
              <h3>Тема/Topic: {tags}</h3>
              <h3>Транскрипция: {transcription}</h3>
              <h3>Перевод: {russian}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
