import { Box } from "@mui/material";
import { Footer, Hero, Navbar, QuizCreation, QuizTaking } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

const Spa = () => {
  const user = useAuth0();
  return (
    <>
      <Navbar />
      <Hero />
      <Box
        height={"100dvh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"4rem"}
        sx={{ backgroundColor: "linear-gradient(0deg, rgba(193,43,18,1) 10%, rgba(143,143,143,1) 49%, rgba(81,131,181,1) 90%)"  }}
      >
        <QuizTaking />
        <QuizCreation />
      </Box>
      <Footer />
    </>
  );
};

export default Spa;
