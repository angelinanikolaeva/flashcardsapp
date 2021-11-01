import AddCircleIcon from "@mui/icons-material/AddCircle";
import { TextField } from "@mui/material";
import Button from "../../components/Button";
import useWordValidation from "../../hooks/useWordValidation";

const TableForm = ({
  setNewWord,
  newWord,
  createWord,
  isCreated,
  setCreated,
}) => {
  const { errors, setError, inputValidation } = useWordValidation();

  const handleInputChange = (e) => {
    setCreated("");
    const name = e.target.name;
    const value = e.target.value;
    inputValidation(name, value);
    setNewWord({ ...newWord, [name]: value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (
      Object.values(errors).some((x) => x[0] === true) ||
      Object.values(newWord).some((x) => x === "")
    ) {
      for (let [key, value] of Object.entries(errors)) {
        if (value[0] === false && value[1] === "Empty!") {
          setError((prev) => {
            return { ...prev, [key]: [true, "Empty!"] };
          });
        }
      }
    } else createWord();
  };

  return (
    <form className="words-table-form" onSubmit={submitForm}>
      <div className="words-table-inputs">
        <TextField
          error={errors.english[0]}
          label={errors.english[0] ? errors.english[1] : "English word"}
          id="standard-basic"
          variant="standard"
          value={newWord.english || ""}
          name="english"
          onChange={handleInputChange}
          color="secondary"
        />
        <TextField
          error={errors.transcription[0]}
          label={
            errors.transcription[0] ? errors.transcription[1] : "Transcription"
          }
          id="standard-basic"
          variant="standard"
          value={newWord.transcription || ""}
          name="transcription"
          onChange={handleInputChange}
          color="secondary"
        />
        <TextField
          error={errors.russian[0]}
          label={errors.russian[0] ? errors.russian[1] : "Russian word"}
          id="standard-basic"
          variant="standard"
          value={newWord.russian || ""}
          name="russian"
          onChange={handleInputChange}
          color="secondary"
        />
        <TextField
          error={errors.tags[0]}
          label={errors.tags[0] ? errors.tags[1] : "Tag"}
          id="standard-basic"
          variant="standard"
          value={newWord.tags || ""}
          name="tags"
          onChange={handleInputChange}
          color="secondary"
        />
      </div>
      <Button type="submit" className="words-table-form-button">
        <AddCircleIcon fontSize="large" />
      </Button>
      {isCreated && <p>{isCreated}</p>}
    </form>
  );
};

export default TableForm;
