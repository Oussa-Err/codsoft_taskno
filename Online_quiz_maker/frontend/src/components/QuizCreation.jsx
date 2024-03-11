import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  TextField,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  quiz: Yup.array().of(
    Yup.object().shape({
      question: Yup.string().required("Question is required"),
      answers: Yup.array()
        .of(Yup.string().required("Answer is required"))
        .min(3, "Must have at least 3 answers"),
      correctAnswer: Yup.string().required("Correct Answer is required"),
    })
  ),
});

const CreateForm = () => {
  const [curr, setCurr] = useState(0);
  const { user } = useAuth0();

  const initialValues = {
    title: "",
    quiz: Array.from({ length: 5 }, () => ({
      question: "",
      answers: ["", "", ""],
      correctAnswer: "",
    })),
    createdByEmail: user.email,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      axios
        .post("http://127.0.0.1:3000/api/create", values)
        .then(() => {
          toast.success("Quiz created successfully");
          actions.resetForm();
        })
        .catch((err) => {
          toast.error(err.response?.data?.message);
        });
    },
  });

  return (
    <Box>
      <Box
        mb={5}
        maxWidth={700}
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{ backdropFilter: "blur(8px)" }}
      >
        <Typography
          variant="body1"
          fontWeight={300}
          fontSize={20}
          color="white"
          textAlign={{ xs: "auto", md: "center" }}
          letterSpacing=".2rem"
        >
          Have you ever stumbled upon false information in your IT journey? 🤔
          Now's your chance to set the record straight!
        </Typography>
        <Typography
          variant="body1"
          fontWeight={300}
          fontSize={20}
          color="white"
          textAlign={{ xs: "auto", md: "center" }}
          letterSpacing=".2rem"
        >
          Contribute a quiz with 5 questions on a specific IT topic.
          <br />
          <Typography
            variant="body1"
            fontWeight={300}
            fontSize={20}
            color="darkgreen"
            textAlign={{ xs: "auto", md: "center" }}
            letterSpacing=".2rem"
          >
            Your unique insights can help others avoid common misconceptions.
          </Typography>
        </Typography>
      </Box>
      <Accordion id="takeQuiz">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="create"
        >
          <Typography>CREATE A QUIZ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={formik.handleSubmit}>
            <Typography
              variant="body1"
              fontWeight={300}
              fontSize={{ xs: 15, md: 20 }}
              textAlign={{ xs: "auto", md: "center" }}
              letterSpacing={{ xs: ".1rem", md: ".2rem" }}
            >
              Start by giving a unique Title to your Quiz
            </Typography>
            <TextField
              id="title"
              name="title"
              label="Quiz Title"
              variant="outlined"
              fullWidth
              margin="normal"
              error={formik.touched.title && Boolean(formik.errors.title)}
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            <Box>
              <Typography
                variant="body1"
                fontWeight={300}
                fontSize={20}
                color="green"
                textAlign={{ xs: "auto", md: "center" }}
                letterSpacing=".2rem"
              >
                Question {curr + 1}
              </Typography>
              <TextField
                id={`quiz[${curr}].question`}
                name={`quiz[${curr}].question`}
                label="Question"
                variant="outlined"
                fullWidth
                margin="normal"
                error={
                  formik.touched.quiz?.[curr]?.question &&
                  Boolean(formik.errors.quiz?.[curr]?.question)
                }
                value={formik.values.quiz[curr].question}
                onChange={formik.handleChange}
              />
              <Box>
                {formik.values.quiz[curr].answers.map((answer, answerIndex) => (
                  <Box key={answerIndex}>
                    <TextField
                      id={`quiz[${curr}].answers[${answerIndex}]`}
                      name={`quiz[${curr}].answers[${answerIndex}]`}
                      label={`Answer ${answerIndex + 1}`}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={
                        formik.touched.quiz?.[curr]?.answers?.[answerIndex] &&
                        formik.errors.quiz?.[curr]?.answers?.[answerIndex]
                      }
                      value={formik.values.quiz[curr].answers[answerIndex]}
                      onChange={formik.handleChange}
                    />
                  </Box>
                ))}
              </Box>
              <TextField
                id={`quiz[${curr}].correctAnswer`}
                name={`quiz[${curr}].correctAnswer`}
                label="Correct Answer"
                variant="outlined"
                fullWidth
                margin="normal"
                error={
                  formik.touched?.quiz?.[curr]?.correctAnswer &&
                  formik.errors?.quiz?.[curr]?.correctAnswer
                }
                value={formik.values.quiz[curr].correctAnswer}
                onChange={formik.handleChange}
              />
              <Box display="flex" justifyContent="space-between" mt={2}>
                {curr > 0 && (
                  <Button
                    type="button"
                    onClick={() => setCurr((prevIndex) => prevIndex - 1)}
                    variant="outlined"
                    color="primary"
                  >
                    Previous
                  </Button>
                )}
                {curr < 4 && (
                  <Button
                    type="button"
                    onClick={() => setCurr((prevIndex) => prevIndex + 1)}
                    variant="outlined"
                    color="primary"
                  >
                    Next
                  </Button>
                )}
                {curr + 1 === 5 && (
                  <Button type="submit" variant="contained" color="primary">
                    Submit Quiz
                  </Button>
                )}
              </Box>
            </Box>
          </form>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CreateForm;
