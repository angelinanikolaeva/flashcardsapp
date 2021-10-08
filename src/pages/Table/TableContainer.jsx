import "./Table.scss";
import TableBody from "./TableBody";
import TableForm from "./TableForm";
import Table from "./Table";
import Loader from "../../components/Loader";
import { useUpdateWords, useWords } from "../../contexts/WordsContext";

function TableContainer() {
  const data = useWords();
  const setData = useUpdateWords();

  return (
    <>
      <TableForm data={data} setData={setData} />
      {data?.length > 0 ? (
        <Table>
          {data.map((word, index) => (
            <TableBody
              key={index + 1}
              word={word}
              data={data}
              setData={setData}
              wordId={word.id}
            />
          ))}
        </Table>
      ) : data ? (
        <h2 className="words-table-none"> No words </h2>
      ) : (
        <div className="words-table-loader">
          <Loader />
        </div>
      )}
    </>
  );
}

export default TableContainer;
