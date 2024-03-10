import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 12,
        height: "70px",
        bgcolor: "#333",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ color: "white" }}>
        All rights reserved&nbsp;
        <Link to="https://linktr.ee/oussamaerr" style={{ color: "orange", textDecoration: "none" }}>
          Err.
        </Link>&nbsp;
        2024.
      </Box>
    </Box>
  );
};

export default Footer;
