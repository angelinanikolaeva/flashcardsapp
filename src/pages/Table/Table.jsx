function Table(props) {
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
        <tbody className="words-tablebody">{props.children}</tbody>
      </table>
    </div>
  );
}

export default Table;
