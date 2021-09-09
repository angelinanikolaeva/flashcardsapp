import { useState } from "react";
import Words from "../../assets/data/words.json";
import Flashcard from "./Flashcard";
import "./CardList.scss";
import Button from "../Button";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";

function CardList() {
  const [slide, setSlide] = useState(1);
  const nextSlide = () => {
    if (slide !== Words.length) {
      setSlide(slide + 1);
    } else if (slide === Words.length) {
      setSlide(1);
    }
  };
  const prevSlide = () => {
    if (slide !== 1) {
      setSlide(slide - 1);
    } else if (slide === 1) {
      setSlide(Words.length);
    }
  };
  return (
    <div className="card-container">
      {Words.map((word, index) => (
        <Flashcard key={word.id} slide={slide} index={index} {...word} />
      ))}
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
    </div>
  );
}

export default CardList;
