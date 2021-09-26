import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "../Button";
import Input from "../Input";

function TableBody({ word }) {
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
            <Button
              inner={SaveIcon}
              onClick={() => {
                toogleSelected(false);
              }}
            />
            <Button inner={CancelIcon} onClick={handleCancel} />
          </div>
        ) : (
          <div className="table-buttons">
            <Button
              inner={EditIcon}
              onClick={() => {
                toogleSelected(true);
              }}
            />
            <Button inner={DeleteIcon} />
          </div>
        )}
      </td>
    </tr>
  );
}

export default TableBody;
