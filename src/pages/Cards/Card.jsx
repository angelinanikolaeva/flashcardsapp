import { useState, useRef, useEffect } from "react";
import "./Card.scss";
import CardInner from "./CardInner";
import Button from "../../components/Button";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { useWords } from "../../contexts/WordsContext";
import { observer } from "mobx-react-lite";

const Card = observer(() => {
  const wordStore = useWords();
  const [isFlipped, setFlipped] = useState({});
  const inputRef = useRef(null);
  useEffect(() => inputRef.current && inputRef.current.focus());

  const flipChange = () => {
    // const newData = [...wordStore.words];
    const index = wordStore.words.findIndex(
      (obj) => obj.id === wordStore.words[slide].id
    );
    // newData[index].isFlipped = true;
    setFlipped({ ...isFlipped, [index]: true });
    // wordStore.setData(newData);
    setWordCount(wordCount + 1);
  };
  const [slide, setSlide] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const nextSlide = () => {
    setSlide(slide === wordStore.words.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? wordStore.words.length - 1 : slide - 1);
  };
  return (
    <>
      {wordStore.error ? (
        <Error message={wordStore.error} />
      ) : wordStore.isLoading ? (
        <div className="card__loader">
          <Loader />
        </div>
      ) : wordStore.words?.length > 0 ? (
        <div className="card-container">
          <Button className="btn-slide next" onClick={nextSlide}>
            <ArrowRight style={{ fontSize: "10em" }} />
          </Button>
          <Button className="btn-slide prev" onClick={prevSlide}>
            <ArrowLeft style={{ fontSize: "10em" }} />
          </Button>
          <CardInner
            key={wordStore.words[slide].id}
            isFlipped={isFlipped[slide]}
            flipChange={flipChange}
            data={wordStore.words}
            slide={slide}
            innerRef={inputRef}
          />
          <h2 className="card__wordcount">
            Выучено:
            <p>
              {wordCount}/{wordStore.words.length}
            </p>
          </h2>
        </div>
      ) : (
        <h3 className="card__none"> No words </h3>
      )}
    </>
  );
});

export default Card;
