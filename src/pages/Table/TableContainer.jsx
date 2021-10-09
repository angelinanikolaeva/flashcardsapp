import "./Table.scss";
import TableBody from "./TableBody";
import TableForm from "./TableForm";
import Table from "./Table";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { useWords } from "../../contexts/WordsContext";

function TableContainer() {
  const { data, setData, error, isLoading } = useWords();
  return (
    <>
      <TableForm data={data} setData={setData} />
      {error ? (
        <Error message={error} />
      ) : isLoading ? (
        <div className="words-table-loader">
          <Loader />
        </div>
      ) : data?.length > 0 ? (
        <Table>
          {data.map((word, index) => (
            <TableBody
              key={index + 1}
              word={word}
              data={data}
              setData={setData}
            />
          ))}
        </Table>
      ) : (
        <h2 className="words-table-none"> No words </h2>
      )}
    </>
  );
}

export default TableContainer;
