import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";

const QuizContext = createContext();

export const useQuizContext = () => useContext(QuizContext);

axios.defaults.baseURL = `https://profound-puffpuff-c3da0d.netlify.app/.netlify/functions`

export const QuizProvider = ({ children }) => {
  const { user } = useAuth0();
  const [quizzesData, setQuizzesData] = useState(null);
  const [quizData, setQuizData] = useState(null);

  const getQuizzes = async () => {
    try {
      const { data } = await axios.get("/api/quizzes");
      setQuizzesData(data);
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  const getQuiz = async (id) => {
    try {
      const { data } = await axios.get(`/api/quiz/${id}`, {
        headers: {
          createdByEmail: user?.email ?? ""
        }
      });
      setQuizData(data);
      toast.success("Good luck")
    } catch (err) {
      toast.success("You must login")
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
