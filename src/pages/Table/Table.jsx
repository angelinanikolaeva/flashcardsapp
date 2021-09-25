import React from "react";
import Loading from "../../components/Loading";
import "./Table.scss";
import TableBody from "./TableBody";
import TableForm from "./TableForm";

function Table(props) {
  const {
    data,
    english,
    setEnglish,
    russian,
    setRussian,
    transcription,
    setTranscription,
    tags,
    setTags,
    submitForm,
  } = props;
  return (
    <>
      <TableForm
        english={english}
        russian={russian}
        transcription={transcription}
        tags={tags}
        setEnglish={setEnglish}
        setRussian={setRussian}
        setTags={setTags}
        setTranscription={setTranscription}
        submitForm={submitForm}
      />
      <div className="words-tablewrap">
        {data?.length > 0 ? (
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
              {data.map((word) => (
                <TableBody word={word} key={word.id} />
              ))}
            </tbody>
          </table>
        ) : data ? (
          <p> No words </p>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default Table;
