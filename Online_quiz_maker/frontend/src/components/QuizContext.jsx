import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const QuizContext = createContext();

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(null);

  const getQuizzes = async () => {
    console.log("executed ");
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/quiz/65ed457b966d6d87be60751e"
      );
      // console.log(data)
      setQuizData(data);
      toast.success("Good luck");
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  };

  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <QuizContext.Provider value={quizData}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
