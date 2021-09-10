import { useState, useEffect } from "react";
import "./Card.scss";
import Button from "../Button";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";

const Card = ({ data }) => {
  const [isFlipped, setFlipped] = useState(false);
  const flipChange = () => {
    setFlipped(!isFlipped);
  };
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    if (slide > data.length) {
      setSlide(0);
    }
  }, [slide, data]);

  const nextSlide = () => {
    if (slide !== data.length) {
      setSlide(slide + 1);
    } else if (slide === data.length) {
      setSlide(1);
    }
  };
  const prevSlide = () => {
    if (slide !== 1) {
      setSlide(slide - 1);
    } else if (slide === 1) {
      setSlide(data.length);
    }
  };
  return (
    <>
      <div className="card" onClick={flipChange}>
        <div className={"card__inner" + (isFlipped ? " is-flipped " : "")}>
          <div className="card__face card__face--front">
            <h2>{data[slide].english}</h2>
          </div>
          <div className="card__face card__face--back">
            <div className="card__content">
              <div className="card__header">
                {/* <img src="pp.jpg" alt="" className="pp" /> */}
                <h2>{data[slide].english}</h2>
              </div>
              <div className="card__body">
                <h3>Тема/Topic: {data[slide].tags}</h3>
                <h3>Транскрипция: {data[slide].transcription}</h3>
                <h3>Перевод: {data[slide].russian}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3>
        {slide}/{data.length}
      </h3>
      <Button
        className="btn-slide next"
        onClick={nextSlide}
        inner={ArrowRight}
      />

      <Button
        className="btn-slide prev"
        onClick={prevSlide}
        inner={ArrowLeft}
      />
    </>
  );
};

export default Card;
