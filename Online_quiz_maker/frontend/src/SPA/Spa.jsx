import { Box, Typography } from "@mui/material";
import { Footer, Hero, Navbar, QuizCreation, QuizTaking } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import Explore from "../components/Explore";
import Loading from "../components/Loading";

const Spa = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Box
        id="takeQuiz"
        width={"100dvw"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap="4rem"
      >
        <Box
          minHeight="100dvh"
          paddingX={"8px"}
          display="flex"
          flexDirection="column"
          gap="3rem"
          mt="3rem"
          justifyContent="space-around"
        >
          <Box
            mx={1}
            display="flex"
            gap="20px"
            flexDirection="column"
            sx={{ filter: "blur(50%)" }}
          >
            <Typography fontWeight={300} fontSize={20} letterSpacing=".2rem">
              You will be asked 5 questions one after another.
            </Typography>
            <Typography
              fontWeight={300}
              fontSize={20}
              color="darkred"
              letterSpacing=".2rem"
            >
              Each question has three options. You can choose only one option.
            </Typography>
            <Typography
              fontWeight={300}
              fontSize={20}
              letterSpacing=".2rem"
              mb={5}
            >
              The result will be declared at the end of the quiz.
            </Typography>
            <Explore />
            <QuizTaking />
          </Box>
        </Box>
        {isAuthenticated && (
          <Box
            id="createQuiz"
            paddingX={"8px"}
            minHeight="100dvh"
            display="flex"
            flexDirection="column"
            gap="3rem"
            mt="3rem"
            justifyContent="space-around"
            alignItems="center"
          >
            <QuizCreation />
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Spa;
