import { Box, Typography, Button, TextField } from "@mui/material";
import heroImage from "../assets/hero-bg.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Hero() {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        px: 2,
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          mb: 2,
          maxWidth: "700px",
        }}
      >
        Unlimited movies, TV shows, and more
      </Typography>

      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: 400,
        }}
      >
        Starts at $7.99. Cancel anytime.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mb: 4,
          fontWeight: 400,
        }}
      >
        Ready to watch? Enter your email to create or restart your membership.
      </Typography>

      {/* Email + Button Row */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <TextField
          placeholder="Email address"
          variant="outlined"
          sx={{
            width: "380px",
            backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: "4px",

            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": {
                borderColor: "rgba(255,255,255,0.4)",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },

            "& input::placeholder": {
              color: "#aaa",
              opacity: 1,
            },
          }}
        />

       <Button
  variant="contained"
  endIcon={<ChevronRightIcon />}
  sx={{
    backgroundColor: "#E50914",
    fontSize: "20px",
    fontWeight: 700,
    px: 4,
    py: 1.5,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#f6121d",
    },
  }}
>
  Get Started
</Button>
      </Box>
    </Box>
  );
}

export default Hero;