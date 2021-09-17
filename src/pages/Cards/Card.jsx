import { useState, useRef, useEffect } from "react";
import "./Card.scss";
import CardInner from "./CardInner";
import Button from "../../components/Button";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import data from "../../assets/data/words.json";
// import { dataApi } from "./data/api";

const Card = () => {
  const inputRef = useRef(null);
  useEffect(() => inputRef.current && inputRef.current.focus());
  const [isFlipped, setFlipped] = useState(false);
  const flipChange = () => {
    if (!isFlipped) {
      setFlipped(true, setWordCount(wordCount + 1));
    }
  };
  const [slide, setSlide] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  // useEffect(() => {
  //   dataApi().then((data) => {
  //     ...;
  //   });
  // }, []);

  const nextSlide = () => {
    setFlipped(false);
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setFlipped(false);
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className="card-container">
      <Button
        className="btn-slide next"
        onClick={nextSlide}
        inner={ArrowRight}
        innerstyle={{ fontSize: "10em" }}
      />
      <Button
        className="btn-slide prev"
        onClick={prevSlide}
        inner={ArrowLeft}
        innerstyle={{ fontSize: "10em" }}
      />
      <CardInner
        key={data[slide].id}
        isFlipped={isFlipped}
        flipChange={flipChange}
        data={data}
        slide={slide}
        innerRef={inputRef}
      />
      <h2 className="card__wordcount">
        Выучено:
        <p>
          {wordCount}/{data.length}
        </p>
      </h2>
    </div>
  );
};

export default Card;
