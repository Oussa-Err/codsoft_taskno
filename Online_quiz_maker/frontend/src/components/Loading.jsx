import { Box, LinearProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
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
    </Box>
  );
};

export default Loading;
