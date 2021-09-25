import Card from "./Cards/Card";
import Table from "./Table/Table";
import { useState, useEffect } from "react";

const DataContainer = (props) => {
  const [updating, setUpdating] = useState(false);
  const [english, setEnglish] = useState("");
  const [russian, setRussian] = useState("");
  const [transcription, setTranscription] = useState("");
  const [tags, setTags] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/words")
      .then((res) => res.json())
      .then((json) => setData(json.words))
      .catch((err) => console.log(err));
  }, []);
  const createWord = async () => {
    try {
      const res = await fetch("/api/words", {
        method: "POST",
        body: JSON.stringify({ english, transcription, russian, tags }),
      });
      const json = await res.json();

      setData([...data, json.word]);
      setEnglish("");
      setRussian("");
      setTranscription("");
      setTags("");
    } catch (err) {
      console.log(err);
    }
  };
  const deleteWord = async (id) => {
    try {
      await fetch(`/api/words/${id}`, { method: "DELETE" });

      setData(data.filter((m) => m.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const submitForm = async (event) => {
    event.preventDefault();

    // if (updating) {
    //   updateMovie()
    // } else {
    createWord();
    // }
  };
  return (
    <>
      {props.name === "main" ? (
        <Table
          data={data}
          english={english}
          russian={russian}
          transcription={transcription}
          tags={tags}
          setEnglish={setEnglish}
          setRussian={setRussian}
          setTags={setTags}
          setTranscription={setTranscription}
          submitForm={submitForm}
        />
      ) : (
        <Card data={data} />
      )}
    </>
  );
};

export default DataContainer;
