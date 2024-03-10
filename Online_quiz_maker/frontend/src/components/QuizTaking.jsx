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
  const quizData = useQuizContext();
  const [value, setValue] = useState(null);
  const [currIndex, setcurrIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (quizData) {
      setIsLoading(false);
    }
  }, [quizData]);

  const handleChangeRadio = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted:", value);
    setValue(null);
    setcurrIndex(currIndex + 1);
  };

  const renderQuestion = () => {
    if (isLoading) {
      return <Typography variant="h6">Loading...</Typography>;
    }
    // console.log(quizData.quiz.quiz);

    if (!quizData || !quizData.quiz) {
      return (
        <Typography variant="h6">
          No quiz available, please select One.
        </Typography>
      );
    }

    const currQuestion = quizData.quiz.quiz[currIndex];

    if (!currQuestion) {
      return (
        <Typography variant="h6">Current question is undefined.</Typography>
      );
    }

    return (
      <>
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: 600, md: 750 },
            width: "100%",
            mx: "auto",
            px: 2,
            py: 4,
          }}
        >
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

  return (
    <Box>
      <Card variant="outlined">
        <CardContent>{renderQuestion()}</CardContent>
        <CardActions>
          <Button
            disabled={value === null}
            onClick={handleSubmit}
            fullWidth
            variant="outlined"
            size="small"
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default QuizTaking;
