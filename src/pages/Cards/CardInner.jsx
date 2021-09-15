import React from "react";

const CardInner = ({ index, data, word, isFlipped, flipChange }) => {
  return (
    <>
      <div className="card" onClick={flipChange}>
        <div className={"card__inner" + (isFlipped ? " is-flipped " : "")}>
          <div className="card__face card__face--front">
            <h2>{word.english}</h2>
            <h3>
              {index + 1}/{data.length}
            </h3>
          </div>
          <div className="card__face card__face--back">
            <div className="card__content">
              <div className="card__header">
                {/* <img src="pp.jpg" alt="" className="pp" /> */}
                <h2>{word.english}</h2>
              </div>
              <div className="card__body">
                <h3>Тема/Topic: {word.tags}</h3>
                <h3>Транскрипция: {word.transcription}</h3>
                <h3>Перевод: {word.russian}</h3>
                <h2>
                  {index + 1}/{data.length}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInner;
