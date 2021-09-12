import { useState } from "react";
import "./Card.scss";
import CardInner from "./CardInner";
import Button from "../Button";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";

const Card = ({ data }) => {
  const [isFlipped, setFlipped] = useState(false);
  const flipChange = () => {
    setFlipped(!isFlipped);
  };
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
    setFlipped(false);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
    setFlipped(false);
  };
  return (
    <>
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
      {data.map((word, index) => {
        return (
          <>
            {index === slide && (
              <CardInner
                isFlipped={isFlipped}
                word={word}
                flipChange={flipChange}
                data={data}
                index={index}
                key={data.id}
              />
            )}
          </>
        );
      })}
    </>
  );
};

export default Card;
