import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useQuizContext } from "./QuizContext";

const QuizSelect = () => {
  const { quizzesData, getQuiz } = useQuizContext();
  const [selectedQuizId, setSelectedQuizId] = useState("");

  const handleChange = (event) => {
    const quizId = event.target.value;
    setSelectedQuizId(quizId);
    getQuiz(quizId);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="select-quiz-label">Select Quiz</InputLabel>
        <Select
          labelId="select-quiz-label"
          id="select-quiz"
          value={selectedQuizId}
          onChange={handleChange}
          inputProps={{
            name: "quiz",
            id: "select-quiz",
          }}
        >
          {quizzesData &&
            quizzesData.quizzes.map((quiz) => (
              <MenuItem key={quiz._id} value={quiz._id}>
                {quiz.title}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default QuizSelect;
