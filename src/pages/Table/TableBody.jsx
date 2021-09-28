import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "../../components/Button";
import Input from "../../components/Input";

function TableBody({ word, data, setData, wordId }) {
  const { english, russian, transcription, tags } = word;
  const initialState = {
    english: english,
    russian: russian,
    transcription: transcription,
    tags: tags,
  };
  const [isSelected, toogleSelected] = useState(false);
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    setValue((prevWord) => {
      return { ...prevWord, [e.target.name]: e.target.value };
    });
  };

  const updateWord = async () => {
    try {
      const res = await fetch(`/api/words/${wordId}`, {
        method: "PATCH",
        body: JSON.stringify(value),
      });
      const json = await res.json();

      const dataCopy = [...data];
      const index = data.findIndex((m) => m.id === wordId);
      dataCopy[index] = json.word;
      setData(dataCopy);
      toogleSelected(false);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteWord = async () => {
    try {
      await fetch(`/api/words/${wordId}`, { method: "DELETE" });
      setData(data.filter((m) => m.id !== wordId));
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    toogleSelected(false);
    setValue({ ...word });
  };

  return (
    <tr className="words-tablerow">
      {isSelected ? (
        <>
          <td>
            <Input
              onChange={handleChange}
              value={value.english}
              name={"english"}
            />
          </td>
          <td>
            <Input
              onChange={handleChange}
              value={value.transcription}
              name={"transcription"}
            />
          </td>
          <td>
            <Input
              onChange={handleChange}
              value={value.russian}
              name={"russian"}
            />
          </td>
          <td>
            <Input onChange={handleChange} value={value.tags} name={"tags"} />
          </td>
        </>
      ) : (
        <>
          <td>{value.english}</td>
          <td align="right">{value.transcription}</td>
          <td align="right">{value.russian}</td>
          <td align="right">{value.tags}</td>
        </>
      )}

      <td align="right">
        {isSelected ? (
          <div className="table-buttons">
            <Button onClick={updateWord}>
              <SaveIcon />
            </Button>
            <Button onClick={handleCancel}>
              <CancelIcon />
            </Button>
          </div>
        ) : (
          <div className="table-buttons">
            <Button
              onClick={() => {
                toogleSelected(true);
              }}
            >
              <EditIcon />
            </Button>
            <Button onClick={deleteWord}>
              <DeleteIcon />
            </Button>
          </div>
        )}
      </td>
    </tr>
  );
}

export default TableBody;
