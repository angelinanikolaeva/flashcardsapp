function Table(props) {
  return (
    <div className="words-tablewrap">
      <table className="words-table">
        <thead className="words-tablehead">
          <tr className="words-tablerow">
            <th>Word</th>
            <th>Transcription</th>
            <th>Translation</th>
            <th>Topic</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="words-tablebody">{props.children}</tbody>
      </table>
    </div>
  );
}

export default Table;
