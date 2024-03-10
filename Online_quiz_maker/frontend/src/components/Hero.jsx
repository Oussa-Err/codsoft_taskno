import { Box, Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Box
        
      >
        <Box
        height={"100dvh"}
        p={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={10}
        >
          <Typography
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: 35, md: 50 },
              textAlign: "center",
              letterSpacing: ".2rem",
              color: "white"
            }}
          >
            Welcome to QUIZ IT,
          </Typography>
          <Box mx={1} display={"flex"} gap={"20px"} flexDirection={"column"}>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: 20,
                textAlign: { xs: "auto", md: "center" },
                letterSpacing: ".2rem",
              }}
            >
              You will be asked 5 questions one after another.
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: 20,
                color: "darkgreen",
                textAlign: { xs: "auto", md: "center" },
                letterSpacing: ".2rem",
              }}
            >
              Each question has three options.&nbsp;
              <Typography
                component={"span"}
                sx={{
                  fontWeight: 300,
                  fontSize: 20,
                  color: "darkred",
                  textAlign: { xs: "auto", md: "center" },
                  letterSpacing: ".2rem",
                }}
              >
                You can choose only one options.
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: 20,
                textAlign: { xs: "auto", md: "center" },
                letterSpacing: ".2rem",
              }}
            >
              The result will be declared at the end of the quiz.
            </Typography>
          </Box>
          <Box
            display={"flex"}
            gap={{ xs: 1, md: 2 }}
            justifyContent={"center"}
          >
            <Button variant="outlined" href="#takeQuiz">
              Create a Quiz
            </Button>
            <Button href="#createQuiz" variant="contained">
              Take a Quiz
            </Button>
          </Box>
          <Button variant="text" href="#exploreQuizes">
            Explore Quizes
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
