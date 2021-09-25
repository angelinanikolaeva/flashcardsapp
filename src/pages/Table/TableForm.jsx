// import Input from "../../components/Input";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Input from "@mui/material/Input";
import Button from "../../components/Button";

const TableForm = (props) => {
  const {
    english,
    russian,
    transcription,
    tags,
    setEnglish,
    setRussian,
    setTags,
    setTranscription,
    submitForm,
  } = props;
  return (
    <form className="words-table-form" onSubmit={submitForm}>
      <div className="">
        <Input
          type="text"
          className="table-form"
          placeholder="English word"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
        />
        <Input
          type="text"
          className="table-form"
          placeholder="Transcription"
          value={transcription}
          onChange={(e) => setTranscription(e.target.value)}
        />
        <Input
          type="text"
          className="table-form"
          placeholder="Russian word"
          value={russian}
          onChange={(e) => setRussian(e.target.value)}
        />
        <Input
          type="text"
          className="table-form"
          placeholder="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <Button type="submit" className="table-form-button">
        <AddCircleIcon fontSize="large" />
      </Button>
    </form>
  );
};

export default TableForm;
