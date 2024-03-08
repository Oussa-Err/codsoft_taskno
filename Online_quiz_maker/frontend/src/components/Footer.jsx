import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "70px",
        bgcolor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ color: "white" }}>
        All rights reserved{" "}
        <Link to="https://linktr.ee/oussamaerr" style={{ color: "orange" }}>
          Err.
        </Link>
        2024.
      </Box>
    </Box>
  );
};

export default Footer;
