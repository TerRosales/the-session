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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Header.css";
import { pages } from "../utility/data";
import ThemeToggler from "./ThemeToggler";
import { useTheme } from "@mui/material/styles";

interface HeaderProps {
  onThemeToggle: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle, darkMode }) => {
  const theme = useTheme(); // Get the current theme

  const navigate = useNavigate();
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

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
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

  const handleLogoClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation(); // Prevents the theme toggler from being triggered
    event.preventDefault(); // Prevents any default anchor behavior
    navigate("/"); // Programmatically navigates to the home page
  };

  return (
    <AppBar
      position="static"
      sx={{
        py: 3,
        backgroundColor: darkMode ? "rgba(0, 0, 0, 0.99)" : "f5f5f5", // Matching background
        color: theme.palette.text.primary, // Use theme text color
        borderBottom: "2px solid", // Matching thickness
        borderColor: darkMode
          ? "rgba(100, 100, 100, 0.2)" // Matching border color
          : "rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleLogoClick}
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
              cursor: "pointer", // Add a pointer cursor for better UX
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
                  <Box
                    sx={{ position: "relative", width: "100%" }}
                    className="dropdown"
                  >
                    {page.name === "Movements" ? (
                      <Button
                        sx={{
                          color: "inherit",
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          fontWeight: 700,
                        }}
                        className="linkHover linkClick linkHoverGlow"
                        onClick={toggleMobileDropdown}
                      >
                        {page.name}
                        <ArrowDropDownIcon className="dropdownIcon" />
                      </Button>
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
                    {page.name === "Movements" && mobileDropdownOpen && (
                      <Box className="dropdownMenu">
                        <Link
                          to="/sub-page-1"
                          className="dropdownMenuItem"
                          onClick={handleCloseNavMenu}
                        >
                          Sub Page 1
                        </Link>
                        <Link
                          to="/sub-page-2"
                          className="dropdownMenuItem"
                          onClick={handleCloseNavMenu}
                        >
                          Sub Page 2
                        </Link>
                        <Link
                          to="/sub-page-3"
                          className="dropdownMenuItem"
                          onClick={handleCloseNavMenu}
                        >
                          Sub Page 3
                        </Link>
                        <Link
                          to="/sub-page-4"
                          className="dropdownMenuItem"
                          onClick={handleCloseNavMenu}
                        >
                          Sub Page 4
                        </Link>
                        <Link
                          to="/sub-page-5"
                          className="dropdownMenuItem"
                          onClick={handleCloseNavMenu}
                        >
                          Sub Page 5
                        </Link>
                        <Link
                          to="/sub-page-6"
                          className="dropdownMenuItem"
                          onClick={handleCloseNavMenu}
                        >
                          Sub Page 6
                        </Link>
                      </Box>
                    )}
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={handleLogoClick}
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
              cursor: "pointer", // Add a pointer cursor for better UX
            }}
          >
            THE SESSION
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              if (page.name === "Movements") {
                return (
                  <Box
                    key={page.name}
                    sx={{ position: "relative" }}
                    className="dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Button
                      sx={{
                        my: 2,
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 15,
                        fontWeight: 700,
                        position: "relative",
                      }}
                      className="linkHover linkClick linkHoverGlow dropdownToggle"
                    >
                      {page.name}
                      <ArrowDropDownIcon className="dropdownIcon" />
                    </Button>
                    {dropdownOpen && (
                      <Box className="dropdownMenu">
                        <Link to="/sub-page-1" className="dropdownMenuItem">
                          Sub Page 1
                        </Link>
                        <Link to="/sub-page-2" className="dropdownMenuItem">
                          Sub Page 2
                        </Link>
                        <Link to="/sub-page-3" className="dropdownMenuItem">
                          Sub Page 3
                        </Link>
                        <Link to="/sub-page-4" className="dropdownMenuItem">
                          Sub Page 4
                        </Link>
                        <Link to="/sub-page-5" className="dropdownMenuItem">
                          Sub Page 5
                        </Link>
                        <Link to="/sub-page-6" className="dropdownMenuItem">
                          Sub Page 6
                        </Link>
                      </Box>
                    )}
                  </Box>
                );
              } else {
                return (
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
                );
              }
            })}
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
