import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";

const QuizContext = createContext();

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const { user } = useAuth0();
  const [quizzesData, setQuizzesData] = useState(null);
  const [quizData, setQuizData] = useState(null);

  const getQuizzes = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/quizzes");
      setQuizzesData(data);
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  const getQuiz = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/quiz/${id}`, {
        headers: {
          createdByEmail: user?.email ?? ""
        }
      });
      setQuizData(data);
      toast.success("Good luck")
    } catch (err) {
      toast.error(err.response?.data?.message)
    }
  };

  useEffect(() => {
    getQuizzes()
  }, [])

  const contextValue = {
    quizzesData,
    quizData,
    getQuiz,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  )
}

export default QuizContext
