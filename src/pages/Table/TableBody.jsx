import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "../../components/Button";
import { TextField } from "@mui/material";
import useWordValidation from "../../hooks/useWordValidation";

function TableBody({ word, data, setData, wordId }) {
  const { english, russian, transcription, tags } = word;
  const { errors, inputValidation } = useWordValidation();
  const [isEditable, toogleEditable] = useState(false);
  const [value, setValue] = useState({
    english: english,
    russian: russian,
    transcription: transcription,
    tags: tags,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    inputValidation(name, value);
    setValue((prevWord) => {
      return { ...prevWord, [name]: value };
    });
  };

  const updateWord = () => {
    const dataCopy = [...data];
    const index = data.findIndex((m) => m.id === wordId);
    dataCopy[index] = value;
    setData(dataCopy);
    toogleEditable(false);
  };

  const deleteWord = async () => {
    setData(data.filter((m) => m.id !== wordId));
  };

  const handleCancel = () => {
    toogleEditable(false);
    setValue({ ...word });
  };

  return (
    <tr className="words-tablerow">
      {isEditable ? (
        <>
          <td>
            <TextField
              error={errors.english[0]}
              label={errors.english[0] ? errors.english[1] : " "}
              id="standard-error"
              variant="standard"
              onChange={handleChange}
              value={value.english || ""}
              name={"english"}
            />
          </td>
          <td>
            <TextField
              error={errors.transcription[0]}
              label={errors.transcription[0] ? errors.transcription[1] : " "}
              id="standard-error"
              variant="standard"
              onChange={handleChange}
              value={value.transcription || ""}
              name={"transcription"}
            />
          </td>
          <td>
            <TextField
              error={errors.russian[0]}
              label={errors.russian[0] ? errors.russian[1] : " "}
              id="standard-error"
              variant="standard"
              onChange={handleChange}
              value={value.russian || ""}
              name={"russian"}
            />
          </td>
          <td>
            <TextField
              error={errors.tags[0]}
              label={errors.tags[0] ? errors.tags[1] : " "}
              id="standard-error"
              variant="standard"
              onChange={handleChange}
              value={value.tags || ""}
              name={"tags"}
            />
          </td>
        </>
      ) : (
        <>
          <td>{english}</td>
          <td align="right">{transcription}</td>
          <td align="right">{russian}</td>
          <td align="right">{tags}</td>
        </>
      )}

      <td align="right">
        {isEditable ? (
          <div className="table-buttons">
            <Button
              onClick={updateWord}
              disabled={Object.values(errors).some((x) => x[0] === true)}
            >
              <SaveIcon />
            </Button>
            <Button onClick={handleCancel}>
              <CancelIcon />
            </Button>
          </div>
        ) : (
          <div className="table-buttons">
            <Button onClick={toogleEditable}>
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
