import React from "react";
import Words from "../../assets/data/words.json";
import "./Table.scss";
import TableBody from "./TableBody";

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
            <TableBody word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WordsTable;
