import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 12,
        height: "70px",
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
        {new Date().getFullYear()}
      </Box>
    </Box>
  );
};

export default Footer;
