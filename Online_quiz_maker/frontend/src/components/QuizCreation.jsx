import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import { Button, TextField } from "@mui/material";

const CreateForm = () => {
  return (
    <>
      <Accordion defaultExpanded id="createQuiz">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>ADD A NEW QUIZ</Typography>
        </AccordionSummary>
        <AccordionDetails style={{
        display: "flex",
        justifyContent: "center"
        
      }}> 
          <FormControl
            title="Create User"
            onSubmit={(...args) => console.log(args)}
            open
          >
            <TextField id="filled-basic" label="Question" variant="outlined" />
            <TextField id="filled-basic" label="Answer 1" variant="outlined" />
            <TextField id="filled-basic" label="Answer 2" variant="outlined" />
            <TextField id="filled-basic" label="Answer 3" variant="outlined" />
            <TextField id="filled-basic" label="Correct Answer" variant="outlined" />
            <Button>
              Submit
            </Button>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CreateForm;
