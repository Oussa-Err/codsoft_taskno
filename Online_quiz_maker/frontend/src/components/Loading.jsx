import { Box, LinearProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearProgress
        variant="indeterminate"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          height: "8px",
          background: "#5183b5",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "white",
          },
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          color="#5183b5"
          fontWeight={600}
          fontSize={40}
          letterSpacing={{ xs: ".1rem", md: ".2rem" }}
        >
          Please wait while we prepare something awesome for you.
        </Typography>
      </Box>
    </Box>
  );
};

export default Loading;
