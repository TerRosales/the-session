import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import { pages } from "../utility/data";
import ThemeToggler from "./ThemeToggler"; // Import the ThemeToggler component
import Movement from "./Movement"; // Import the Movement component

interface HeaderProps {
  onThemeToggle: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle, darkMode }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 960) {
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setDropdownOpen(false);
    }
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <AppBar position="static" sx={{ py: 3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              py: 1,
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              fontSize: 40,
              color: "inherit",
              textDecoration: "none",
              display: { xs: "none", md: "flex" },
            }}
          >
            THE SESSION
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name}>
                  {page.name === "Movements" ? (
                    <Movement
                      dropdownOpen={mobileDropdownOpen}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onToggleDropdown={toggleMobileDropdown}
                      onCloseNavMenu={handleCloseNavMenu}
                      mobile={true}
                    />
                  ) : (
                    <Button
                      sx={{
                        color: "inherit",
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        fontWeight: 700,
                      }}
                      className="linkHover linkClick linkHoverGlow"
                      component={Link}
                      to={page.path}
                      onClick={handleCloseNavMenu}
                    >
                      {page.name}
                    </Button>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontSize: 20,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            THE SESSION
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              page.name === "Movements" ? (
                <MovementsButton
                  key={page.name}
                  dropdownOpen={dropdownOpen}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onToggleDropdown={toggleMobileDropdown}
                  onCloseNavMenu={handleCloseNavMenu}
                />
              ) : (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "inherit",
                    display: "block",
                    fontSize: 15,
                    fontWeight: 700,
                    position: "relative",
                  }}
                  component={Link}
                  to={page.path}
                  className="linkHover linkClick linkHoverGlow"
                >
                  {page.name}
                </Button>
              )
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <ThemeToggler onThemeToggle={onThemeToggle} darkMode={darkMode} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
