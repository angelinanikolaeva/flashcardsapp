import Words from "../assets/data/words.json";
import "../components/Table.scss";
import Button from "../components/Button";

function WordsTable() {
  return (
    <div className="words-tablewrap">
      <table className="words-table">
        <thead className="words-tablehead">
          <tr className="words-tablerow">
            <th>Word</th>
            <th align="right">Transcription</th>
            <th align="right">Translation</th>
            <th align="right">Topic</th>
            <th align="right">Actions</th>
          </tr>
        </thead>
        <tbody className="words-tablebody">
          {Words.map((word) => (
            <tr className="words-tablerow" key={word.id}>
              <td>{word.english}</td>
              <td align="right">{word.transcription}</td>
              <td align="right">{word.russian}</td>
              <td align="right">{word.tags}</td>
              <td align="right">
                {word.isEdit ? (
                  <div class="table-buttons">
                    <Button>Save</Button>
                    <Button>Cancel</Button>
                  </div>
                ) : (
                  <div class="table-buttons">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WordsTable;
