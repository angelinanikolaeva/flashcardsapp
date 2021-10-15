// import { useEffect } from "react";
import "./Table.scss";
import TableBody from "./TableBody";
import TableForm from "./TableForm";
import Table from "./Table";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { useWords } from "../../contexts/WordsContext";
import { observer } from "mobx-react-lite";

const TableContainer = observer(() => {
  const wordStore = useWords();
  const deleteWord = async (id) => {
    await wordStore.deleteWord(id);
  };
  const updateWord = async (word) => {
    await wordStore.updateWord(word);
  };

  const createWord = async () => {
    await wordStore.addWord(wordStore.word);
    wordStore.setWord({
      english: "",
      transcription: "",
      russian: "",
      tags: "",
    });
  };
  return (
    <>
      <TableForm
        data={wordStore.words}
        setNewWord={wordStore.setWord}
        newWord={wordStore.word}
        createWord={createWord}
        isCreated={wordStore.isCreated}
        setCreated={wordStore.setCreated}
      />
      {wordStore.error ? (
        <Error message={wordStore.error} />
      ) : wordStore.isLoading ? (
        <div className="words-table-loader">
          <Loader />
        </div>
      ) : wordStore.words?.length > 0 ? (
        <Table>
          {wordStore.words.map((word) => (
            <TableBody
              key={word.id}
              word={word}
              deleteWord={deleteWord}
              updateWord={updateWord}
            />
          ))}
        </Table>
      ) : (
        <h2 className="words-table-none"> Нет добавленных слов </h2>
      )}
    </>
  );
});

export default TableContainer;
