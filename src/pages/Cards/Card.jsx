import { useState } from "react";
import "./Card.scss";
import CardInner from "./CardInner";
import Button from "../../components/Button";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import data from "../../assets/data/words.json";
// import { dataApi } from "./data/api";

const Card = () => {
  const [isFlipped, setFlipped] = useState(false);
  const flipChange = () => {
    setFlipped(!isFlipped);
  };
  const [slide, setSlide] = useState(0);

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
      {data.map((word, index) => {
        return (
          <>
            {index === slide && (
              <CardInner
                key={word.id}
                isFlipped={isFlipped}
                word={word}
                flipChange={flipChange}
                data={data}
                index={index}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Card;
