import { useState } from "react";
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

const QuizTaking = () => {
  const [value, setValue] = useState(null);

  const handleChangeRadio = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    submitAnswer(value);
    setValue(null);
  };

  return (
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
  );
};

export default QuizTaking;
