import { Box } from "@mui/material";
import { Footer, Hero, Navbar, QuizCreation, QuizTaking } from "../components";

const Spa = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Box
        height={"100dvh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"4rem"}
        sx={{ backgroundColor: "" }}
      >
        <QuizCreation />
        <QuizTaking />
      </Box>
      <Footer />
    </>
  );
};

export default Spa;
