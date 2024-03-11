import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [avatar, setAvatar] = useState(null);
  const [toggle, setToggle] = useState(null);
  const { logout, loginWithRedirect, user, isAuthenticated, isLoading } =
    useAuth0();

  const handleOpenMenu = (event) => {
    setToggle(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setToggle(null);
  };

  const handleOpenAvatar = (event) => {
    setAvatar(event.currentTarget);
  };

  const handleCloseAvatar = () => {
    setAvatar(null);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          boxShadow: "none",
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "sans-serif",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              QUIZ IT
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={toggle}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(toggle)}
                onClose={handleCloseMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {!isAuthenticated ? (
                  <MenuItem onClick={handleCloseMenu}>
                    <Typography
                      textAlign={"center"}
                      onClick={() => loginWithRedirect()}
                    >
                      Login
                    </Typography>
                  </MenuItem>
                ) : (
                  <Button
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    textAlign={"center"}
                  >
                    Log Out
                  </Button>
                )}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "sans-serif",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              QUIZIFY
            </Typography>
            {!isAuthenticated && (
              <Button
                style={{ color: "white", fontWeight: "bold" }}
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
                textAlign="center"
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            )}
            {
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenAvatar} sx={{ p: 0 }}>
                    <Avatar sx={{ color: "white" }} alt="user" src="o" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={avatar}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(avatar)}
                  onClose={handleCloseAvatar}
                >
                  <MenuItem onClick={handleCloseAvatar}>
                    <Button
                      style={{
                        textDecoration: "none",
                        color: "#333",
                      }}
                      textAlign="center"
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Log Out
                    </Button>
                  </MenuItem>
                </Menu>
              </Box>
            }
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
