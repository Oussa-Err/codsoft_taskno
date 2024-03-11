import { Box, Button, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

const Hero = () => {
  const { isAuthenticated } = useAuth0();

  const checkAuthOnTake = () => {
    if (!isAuthenticated) {
      toast.warning("Quiz Access requires Login");
    }
  };

  const checkAuthOnCreate = () => {
    if (!isAuthenticated) {
      toast.warning("To create a quiz, you need to log in");
    }
  };

  return (
    <>
      <Box>
        <Box
          height={{ xs: "auto", md: "100vh" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={10}
          sx={{ pt: { xs: 20, md: 0 } }}
        >
          <Typography
            variant="h1"
            fontWeight={700}
            fontSize={{ xs: 35, md: 50 }}
            textAlign="center"
            letterSpacing={{ xs: ".1rem", md: ".2rem" }}
            color="white"
            mb={2}
          >
            Welcome to QUIZ IT,
          </Typography>
          <Box
            mx={1}
            maxWidth={700}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Typography
              variant="body1"
              fontWeight={300}
              fontSize={20}
              color="white"
              textAlign={{ xs: "auto", md: "center" }}
              letterSpacing={{ xs: ".1rem", md: ".2rem" }}
            >
              Join our community of IT enthusiasts and share your knowledge
              through quizzes!
            </Typography>
            <Typography
              variant="body1"
              fontWeight={300}
              fontSize={20}
              textAlign={{ xs: "auto", md: "center" }}
              letterSpacing={{ xs: ".1rem", md: ".2rem" }}
            >
              Let's build a repository of accurate, insightful quizzes together!
              <br />
              Share, learn, and empower the IT community!
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            gap={{ xs: 1, md: 2 }}
          >
            <Button
              variant="outlined"
              href="#createQuiz"
              sx={{ color: "white", borderColor: "white" }}
              onClick={checkAuthOnCreate}
            >
              Create a Quiz
            </Button>
            <Button
              href="#takeQuiz"
              variant="contained"
              onClick={checkAuthOnTake}
              sx={{
                backgroundColor: "white",
                color: "#3f51b5",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Take a Quiz
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
