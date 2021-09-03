import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import Button from "./Button";
import Input from "./Input";

function TableBody({ word }) {
  //   const { english, russian, transcription, tags } = word;
  const initialState = {
    english: word.english,
    russian: word.russian,
    transcription: word.transcription,
    tags: word.tags,
  };
  const [isSelected, toogleSelected] = useState(false);
  const [value, setValue] = useState(initialState);
  return (
    <tr className="words-tablerow">
      {isSelected ? (
        <>
          <td>
            <Input
              onChange={(val) =>
                setValue({ ...value, english: val.target.value })
              }
              value={value.english}
            />
          </td>
          <td>
            <Input
              onChange={(val) =>
                setValue({ ...value, transcription: val.target.value })
              }
              value={value.transcription}
            />
          </td>
          <td>
            <Input
              onChange={(val) =>
                setValue({ ...value, russian: val.target.value })
              }
              value={value.russian}
            />
          </td>
          <td>
            <Input
              onChange={(val) => setValue({ ...value, tags: val.target.value })}
              value={value.tags}
            />
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
            <Button
              inner={CancelIcon}
              onClick={(val) => {
                setValue(initialState);
                toogleSelected(false);
              }}
            />
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
