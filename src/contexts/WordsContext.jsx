import { createContext, useContext, useState } from "react";
const WordsContext = createContext();
const UpdateWordsContext = createContext();

export const useWords = () => {
  return useContext(WordsContext);
};

export const useUpdateWords = () => {
  return useContext(UpdateWordsContext);
};

export const WordsProvider = ({ value, children }) => {
  const [data, setData] = useState(value);
  return (
    <WordsContext.Provider value={data}>
      <UpdateWordsContext.Provider value={setData}>
        {children}
      </UpdateWordsContext.Provider>
    </WordsContext.Provider>
  );
};
export default WordsProvider;
// const WordsContext = createContext({ data: [], setData: () => {} });

// const [userName, setUserName] = useState("John Smith");
// const value = useMemo(() => ({ userName, setUserName }), [userName]);
