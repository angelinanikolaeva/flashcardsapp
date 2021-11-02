import axios from "axios";

export async function getWords() {
  return await axios.get("/api/words");
}

export async function getWordById(id) {
  return await axios.get(`/api/words/${id}`);
}

export async function addWord(word) {
  return await axios.post("/api/words/add", word);
}

export async function updateWord(word) {
  return await axios.post(`/api/words/${word.id}/update`, word);
}
export async function deleteWord(id) {
  return await axios.post(`/api/words/${id}/delete`);
}
