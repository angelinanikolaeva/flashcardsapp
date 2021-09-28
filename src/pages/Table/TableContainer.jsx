import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Table.scss";
import TableBody from "./TableBody";
import TableForm from "./TableForm";
import Table from "./Table";
import Loader from "../../components/Loader";

function TableContainer() {
  const [data, setData] = useLocalStorage("words", "");
  const [newWord, setNewWord] = useState({
    english: "",
    transcription: "",
    russian: "",
    tags: "",
  });
  const handleInputChange = (e) => {
    setNewWord((word) => {
      return { ...word, [e.target.name]: e.target.value };
    });
  };

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

  return (
    <>
      <TableForm
        data={data}
        setData={setData}
        newWord={newWord}
        handleInputChange={handleInputChange}
        setNewWord={setNewWord}
      />
      {data?.length > 0 ? (
        <Table>
          {data.map((word) => (
            <TableBody
              key={word.id}
              word={word}
              data={data}
              setData={setData}
              wordId={word.id}
            />
          ))}
        </Table>
      ) : data ? (
        <h2 className="words-table-none"> No words </h2>
      ) : (
        <div className="words-table-loader">
          <Loader />
        </div>
      )}
    </>
  );
}

export default TableContainer;
