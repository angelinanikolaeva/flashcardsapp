import { useState, useRef, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Card.scss";
import CardInner from "./CardInner";
import Button from "../../components/Button";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import Loader from "../../components/Loader";

const Card = () => {
  const [data, setData] = useLocalStorage("words", "");
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

  useEffect(() => {
    fetch("/api/words")
      .then((res) => res.json())
      .then((json) => {
        if (data === "") {
          setData(json.words);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const nextSlide = () => {
    setFlipped(false);
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setFlipped(false);
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <>
      {data?.length > 0 ? (
        <div className="card-container">
          <Button className="btn-slide next" onClick={nextSlide}>
            <ArrowRight style={{ fontSize: "10em" }} />
          </Button>
          <Button className="btn-slide prev" onClick={prevSlide}>
            <ArrowLeft style={{ fontSize: "10em" }} />
          </Button>
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
      ) : data ? (
        <h3 className="card__none"> No words </h3>
      ) : (
        <div className="card__loader">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Card;
