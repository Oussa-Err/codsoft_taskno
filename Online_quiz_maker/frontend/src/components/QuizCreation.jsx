import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { toast } from "react-toastify";

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
  const [curr, setcurr] = useState(0);

  const initialValues = {
    title: "",
    quiz: Array.from({ length: 5 }, () => ({
      question: "",
      answers: ["", "", ""],
      correctAnswer: "",
    })),
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    axios
      .post("http://127.0.0.1:8080/api/create", values)
      .then(() => {
        toast.success("Quiz created successfully");
      })
      .catch((err) => {
        toast.error(err.response?.data?.message);
      });
    console.log(values);
  };

  return (
    <Box>
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
              component={"span"}
              sx={{
                fontWeight: 300,
                fontSize: 20,
                textAlign: { xs: "auto", md: "center" },
                letterSpacing: ".2rem",
              }}
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
                sx={{
                  fontWeight: 300,
                  fontSize: 20,
                  color: "green",
                  textAlign: { xs: "auto", md: "center" },
                  letterSpacing: ".2rem",
                }}
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {curr > 0 && (
                  <Button
                    type="button"
                    onClick={() => setcurr((prevIndex) => prevIndex - 1)}
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "10px" }}
                  >
                    Previous
                  </Button>
                )}
                {curr < 4 && (
                  <Button
                    type="button"
                    onClick={() => setcurr((prevIndex) => prevIndex + 1)}
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
