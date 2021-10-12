import { createContext, useContext } from "react";
import { useFetch } from "../hooks/useFetch";

const WordsContext = createContext();

export const useWords = () => {
  return useContext(WordsContext);
};

export const WordsProvider = ({ children }) => {
  const { data, setData, error, isLoading } = useFetch("/api/words");

  return (
    <WordsContext.Provider value={{ data, setData, error, isLoading }}>
      {children}
    </WordsContext.Provider>
  );
};
export default WordsProvider;
