import { createContext, useContext, useEffect } from "react";
import { useLocalObservable } from "mobx-react-lite";
import {
  getWords,
  getWordById,
  addWord,
  updateWord,
  deleteWord,
} from "./WordsService";

const WordsContext = createContext();

export const useWords = () => {
  return useContext(WordsContext);
};

export const WordsProvider = ({ children }) => {
  useEffect(() => {
    wordStore.getWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const wordStore = useLocalObservable(() => ({
    /*observables*/
    words: [],
    word: {
      english: "",
      transcription: "",
      russian: "",
      tags: "",
    },
    isLoading: false,
    error: "",
    isCreated: "",
    /*actions*/
    async getWords() {
      wordStore.setLoading(true);
      try {
        wordStore.setWords((await getWords()).data);
      } catch (e) {
        wordStore.setError(e);
      }
      wordStore.setLoading(false);
    },
    async getWordById(id) {
      wordStore.setLoading(true);
      try {
        const { data } = await getWordById(id);
        wordStore.word = data;
      } catch (e) {
        wordStore.setError(e);
      }
      wordStore.setLoading(false);
    },
    async addWord(newWord) {
      wordStore.setLoading(true);
      try {
        wordStore.words.push((await addWord(newWord)).data);
        wordStore.setCreated("Created!");
      } catch (e) {
        console.log(e);
        wordStore.setCreated("Something went wrong... Try again!");
      }
      wordStore.setLoading(false);
    },
    async deleteWord(id) {
      wordStore.setLoading(true);
      try {
        await deleteWord(id);
        wordStore.words = wordStore.words.filter((h) => h.id !== id);
      } catch (e) {
        wordStore.setError(e);
      }
      wordStore.setLoading(false);
    },
    async updateWord(updatedWord) {
      wordStore.setLoading(true);
      try {
        await updateWord(updatedWord);
        const index = wordStore.words.findIndex((h) => h.id === updatedWord.id);
        wordStore.words[index] = updatedWord;
      } catch (e) {
        wordStore.setError(e);
      }
      wordStore.setLoading(false);
    },
    setWords(words) {
      wordStore.words = words;
    },
    setWord(word) {
      wordStore.word = word;
    },
    setError({ message }) {
      wordStore.error = message;
      alert(message);
    },
    setCreated(string) {
      wordStore.isCreated = string;
    },
    setLoading(boolean) {
      boolean === true
        ? (wordStore.isLoading = true)
        : (wordStore.isLoading = false);
    },
    get totalWords() {
      return wordStore.words.length;
    },
  }));
  return (
    <WordsContext.Provider value={wordStore}>{children}</WordsContext.Provider>
  );
};
