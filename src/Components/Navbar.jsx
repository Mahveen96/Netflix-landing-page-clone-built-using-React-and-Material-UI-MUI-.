import { AppBar, Toolbar, Button, Box, Menu, MenuItem, CssBaseline } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import { useState } from "react";
import logo from "../assets/netflix-logo.svg"; // your logo

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      {/* CssBaseline removes default browser margin/padding */}
      <CssBaseline /> 

      <AppBar
        position="static"
        sx={{
          backgroundColor: "#000", // transparent to blend with page
          boxShadow: "none",
        }}
      >
        {/* Remove default Toolbar padding with sx */}
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 0, py: 0, minHeight: "64px !important" }}>
          
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", pl: 2 }}>
            <img src={logo} alt="Netflix Logo" style={{ width: 120, height: "auto" }} />
          </Box>

          {/* Right Side Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
            <Button
              variant="outlined"
              startIcon={<TranslateIcon />}
              onClick={handleClick}
              sx={{ color: "white", borderColor: "white", mr: 2 }}
            >
              English
            </Button>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>English</MenuItem>
              <MenuItem onClick={handleClose}>Spanish</MenuItem>
              <MenuItem onClick={handleClose}>French</MenuItem>
            </Menu>

            <Button variant="contained" sx={{ backgroundColor: "#E50914" }}>
              Sign In
            </Button>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;