import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "../../components/Button";
import Input from "../../components/Input";

function TableBody({ word }) {
  const { english, russian, transcription, tags } = word;
  // const initialState = {
  //   english: english,
  //   russian: russian,
  //   transcription: transcription,
  //   tags: tags,
  // };
  const [isSelected, toogleSelected] = useState(false);
  // const [value, setValue] = useState(initialState);
  // const handleChange = (e) => {
  //   // if (e.target.value.trim() === "") {
  //   //   console.log("The field is empty");
  //   // } else
  //   setValue((prevWord) => {
  //     return { ...prevWord, [e.target.name]: e.target.value };
  //   });
  // };
  // const handleCancel = () => {
  //   toogleSelected(false);
  //   setValue({ ...word });
  // };
  // const handleDelete = () => {
  //   toogleSelected(false);
  //   setValue(value.filter((word) => word.id !== value.id));
  // };
  return (
    <tr className="words-tablerow">
      {isSelected ? (
        <>
          <td>
            <Input
              type="text"
              // onChange={handleChange}
              value={english}
              name={"english"}
            />
          </td>
          <td>
            <Input
              type="text"
              // onChange={handleChange}
              value={transcription}
              name={"transcription"}
            />
          </td>
          <td>
            <Input
              type="text"
              // onChange={handleChange}
              value={russian}
              name={"russian"}
            />
          </td>
          <td>
            <Input
              // onChange={handleChange}
              value={tags}
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
        {isSelected ? (
          <div className="table-buttons">
            <Button
              onClick={() => {
                toogleSelected(false);
              }}
            >
              <SaveIcon />
            </Button>
            <Button>
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
            <Button>
              <DeleteIcon />
            </Button>
          </div>
        )}
      </td>
    </tr>
  );
}

export default TableBody;
