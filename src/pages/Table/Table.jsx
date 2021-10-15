function Table(props) {
  return (
    <div className="words-tablewrap">
      <table className="words-table">
        <thead className="words-tablehead">
          <tr className="words-tablerow">
            <th>Слово</th>
            <th align="right">Транскрипция</th>
            <th align="right">Перевод</th>
            <th align="right">Тема</th>
            <th align="right">Действия</th>
          </tr>
        </thead>
        <tbody className="words-tablebody">{props.children}</tbody>
      </table>
    </div>
  );
}

export default Table;
