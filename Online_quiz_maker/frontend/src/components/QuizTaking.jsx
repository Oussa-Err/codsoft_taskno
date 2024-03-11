import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useQuizContext } from "./QuizContext";

const QuizTaking = () => {
  const { quizData } = useQuizContext();
  const [value, setValue] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [graded, setGraded] = useState(false);

  const handleChangeRadio = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    const currQuestion = quizData.quiz.quiz[currIndex];
    const correctAnswer = currQuestion.correctAnswer;

    setAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: currQuestion.question,
        answer: value,
        correct: value === correctAnswer,
      },
    ]);

    setValue(null);
    if (currIndex + 1 < quizData.quiz.quiz.length) {
      setCurrIndex(currIndex + 1);
    } else {
      setGraded(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrIndex(0);
    setAnswers([]);
    setGraded(false);
  };

  const renderQuestion = () => {
    if (!quizData) {
      return (
        <Typography variant="h6">
          No quiz available, please select One.
        </Typography>
      );
    }

    const currQuestion = quizData.quiz.quiz[currIndex];

    return (
      <>
        <Box>
          <Typography variant="h5" component="div">
            Question {currIndex + 1}
          </Typography>
          <Typography sx={{ pb: 1.5 }} color="text.secondary">
            {currQuestion.question}
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              name={`radio-group-quiz-${currIndex}`}
              value={value}
              onChange={handleChangeRadio}
            >
              {currQuestion.answers.map((answer, index) => (
                <FormControlLabel
                  sx={{
                    py: "10px",
                  }}
                  key={index}
                  value={answer}
                  control={<Radio />}
                  label={answer}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </>
    );
  };

  const renderSubmitButton = () => {
    if (!quizData) {
      return null;
    }

    if (graded) {
      return (
        <Button
          onClick={handleRestartQuiz}
          fullWidth
          variant="outlined"
          size="small"
        >
          Restart Quiz
        </Button>
      );
    }

    return (
      <Button
        disabled={value === null}
        onClick={handleSubmit}
        fullWidth
        variant="outlined"
        size="small"
      >
        {currIndex === quizData.quiz.quiz.length - 1 ? "Grade Quiz" : "Next"}
      </Button>
    );
  };

  return (
    <Box>
      <Card variant="elevation">
        <CardContent>
          {graded ? (
            <Box mt={2}>
              <Typography
                variant="h3"
                sx={{
                  color:
                    answers.filter((answer) => answer.correct).length === 5
                      ? "green"
                      : "inherit",
                  textAlign: "center",
                  fontFamily: "serif",
                  letterSpacing: ".3rem",
                  pb: "2rem"
                }}
              >
                {answers.filter((answer) => answer.correct).length}/5
              </Typography>
              {answers.map((answer, index) => (
                <Box
                  key={index}
                  sx={{
                    mb: 1,
                    color: answer.correct ? "green" : "red",
                  }}
                >
                  <Typography variant="body1">
                    Question {index + 1}: {answer.question}
                  </Typography>
                  <Typography variant="body2">
                    Your Answer: {answer.answer}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : (
            renderQuestion()
          )}
        </CardContent>
        <CardActions>{renderSubmitButton()}</CardActions>
      </Card>
    </Box>
  );
};

export default QuizTaking;
