import AddCircleIcon from "@mui/icons-material/AddCircle";
import Input from "@mui/material/Input";
import Button from "../../components/Button";

const TableForm = ({
  data,
  setData,
  newWord,
  setNewWord,
  handleInputChange,
}) => {
  const createWord = async () => {
    try {
      const res = await fetch("/api/words", {
        method: "POST",
        body: JSON.stringify(newWord),
      });
      const json = await res.json();
      setData([...data, json.word]);
      setNewWord({ english: "", transcription: "", russian: "", tags: "" });
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
    <form className="words-table-form" onSubmit={submitForm}>
      <div className="">
        <Input
          type="text"
          className="table-form"
          placeholder="English word"
          value={newWord.english}
          name="english"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          className="table-form"
          placeholder="Transcription"
          value={newWord.transcription}
          name="transcription"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          className="table-form"
          placeholder="Russian word"
          value={newWord.russian}
          name="russian"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          className="table-form"
          placeholder="tags"
          value={newWord.tags}
          name="tags"
          onChange={handleInputChange}
        />
      </div>

      <Button type="submit" className="table-form-button">
        <AddCircleIcon fontSize="large" />
      </Button>
    </form>
  );
};

export default TableForm;
