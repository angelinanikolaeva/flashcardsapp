import React from "react";

const CardInner = ({ innerRef, slide, data, isFlipped, flipChange }) => {
  return (
    <>
      <div className="card" onClick={flipChange}>
        <div
          className={"card__inner" + (isFlipped ? " is-flipped " : "")}
          tabIndex="0"
          ref={innerRef}
        >
          <div className="card__face card__face--front">
            <h2>{data[slide].english}</h2>
            <h3>
              {slide + 1}/{data.length}
            </h3>
          </div>
          <div className="card__face card__face--back">
            <div className="card__content">
              <div className="card__header">
                <h2>{data[slide].english}</h2>
              </div>
              <div className="card__body">
                <h3>Topic: {data[slide].tags}</h3>
                <h3>Transcription: {data[slide].transcription}</h3>
                <h3>Translation: {data[slide].russian}</h3>
                <h2>
                  {slide + 1}/{data.length}
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
