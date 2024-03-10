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
        mx={1}
      >
        <Box sx={{
          height: "100dvh"
        }}>
          <QuizTaking />
        </Box>

        <QuizCreation />
      </Box>
      <Footer />
    </>
  );
};

export default Spa;
