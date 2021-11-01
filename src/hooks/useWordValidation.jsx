import { useState } from "react";

const useWordValidation = () => {
  const [errors, setError] = useState({
    english: [false, "Empty!"],
    russian: [false, "Empty!"],
    transcription: [false, "Empty!"],
    tags: [false, "Empty!"],
  });
  function inputValidation(name, value) {
    if (value.trim() === "") {
      setError({ ...errors, [name]: [true, "Empty!"] });
    } else
      switch (name) {
        case "english":
          value.match(/^[a-zA-Z0-9_ ]*$/)
            ? setError({ ...errors, [name]: [false, ""] })
            : setError({ ...errors, [name]: [true, "Not in english"] });
          break;
        case "russian":
          value.match(/^[а-яёА-Я0-9 _,-]+$/i)
            ? setError({ ...errors, [name]: [false, ""] })
            : setError({ ...errors, [name]: [true, "Not in Russian!"] });
          break;
        case "transcription":
          value !== ""
            ? setError({ ...errors, [name]: [false, ""] })
            : setError({ ...errors, [name]: [true, "EMPTY!"] });
          break;
        case "tags":
          value.match(/^[а-яёА-Я0-9 _,-]+$/i)
            ? setError({ ...errors, [name]: [false, ""] })
            : setError({ ...errors, [name]: [true, "Not in russian"] });
          break;
        default:
          console.log("Error");
      }
  }

  return { errors, inputValidation, setError };
};
export default useWordValidation;
