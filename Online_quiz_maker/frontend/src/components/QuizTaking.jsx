import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const QuizTaking = () => {
  // const { question = {}, questionNumber, submitAnswer } = props;
  const [value, setValue] = useState(null);

  const handleChangeRadio = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    submitAnswer(value);
    setValue(null);
  };

  return (
    <>
      <Accordion id="takeQuiz">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="create"
        >
          <Typography>TAKE A QUIZ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Question
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Title
                </Typography>
                <FormControl>
                  <RadioGroup
                    name="radio-group-quiz"
                    value={"value"}
                    onChange={handleChangeRadio}
                  >
                    <FormControlLabel
                      key={1}
                      value={"1"}
                      control={<Radio />}
                      label={""}
                    />
                  </RadioGroup>
                </FormControl>
              </CardContent>
              <CardActions>
                <Button
                  disabled={"value"}
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
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default QuizTaking;
