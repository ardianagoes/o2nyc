import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton, Link } from "@mui/material";
import { useEffect, useState } from "react";
import "./Navbar.css";

const GOOGLE_FORM_URL = "https://forms.gle/12Fkbe73fsZ3w2Fg7";

const Navbar = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false); // ADDED: State for new desktop dropdown
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false); // ADDED: State for new mobile dropdown
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
      }

      const currentScrollY = window.scrollY;
      const threshold = 50; 

      if (currentScrollY < threshold) {
        setScrolling(false);
      }
      else if (currentScrollY > lastScrollY) {
        setScrolling(true); 
      } else {
        setScrolling(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileProjectsOpen(false); 
  };

  return (
    <Box className={`navbar ${scrolling ? "navbar-scrolled" : ""}`}>
      <Box className="navbar-container">
        <Box className="navbar-left">
          <Box className="logo-container">
            <Link href="/">
              <img src="/images/logo.png" alt="logo" className="website-logo" />
            </Link>
          </Box>
          <Link href="/home" className="selection-item">Home</Link>
          <Box
            className="selection-item-wrapper"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <Box
            className="selection-item navbar-dropdown-trigger"
              sx={{
                cursor: 'default',
                '&:hover': {
                  transform: 'none',
                  textShadow: 'none',
                }
              }}
            >
              About Us
            </Box>
            {isAboutDropdownOpen && (
              <Box className="dropdown-menu">
                <Link href="/board" className="dropdown-item">Board</Link>
                <Link href="/staff" className="dropdown-item">Staff</Link>
              </Box>
            )}
          </Box>
          <Box
            className="selection-item-wrapper"
            onMouseEnter={() => setIsProjectsDropdownOpen(true)}
            onMouseLeave={() => setIsProjectsDropdownOpen(false)}
          >
            <Box
              className="selection-item navbar-dropdown-trigger"
              sx={{
                cursor: 'default',
                '&:hover': {
                  transform: 'none',
                  textShadow: 'none',
                }
              }}
            >
              Projects
            </Box>
            {isProjectsDropdownOpen && (
              <Box className="dropdown-menu">
                <Link href="/community-sensor-project" className="dropdown-item">
                  Community Sensor Project
                </Link>
              </Box>
            )}
          </Box>

          <Link href="/contact" className="selection-item">Join Us</Link>
        </Box>
        <Box className="navbar-right">
          <Link
            href="https://linktr.ee/o2nyc"
            className="linktree-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={"/images/darklinktree.png"} alt="linktree logo" className="navbar-social-icon"/>
            <span className="linktree-text">LinkTree</span>
          </Link>
          <Button
            variant="contained"
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-contact-button"
            size="small"
            sx={{
              backgroundColor: '#2A7C7A',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.5em',
              padding: '1rem 18px',
              borderRadius: '25px',
              textTransform: 'none',
              boxShadow: '0 2px 5px black',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
              '&:hover': {
              backgroundColor: '#f5f5f5',
              color: '#256d6a',
              transform: 'translateY(-1px)',
              boxShadow: '0px 3px 7px black'
              }
            }}
          >
            Contact Us!
          </Button>
        </Box>
        <IconButton
          className="hamburger-icon"
          aria-label="toggle menu"
          onClick={handleMobileMenuToggle}
          sx={{ color: '#215d4e', display: { xs: 'flex', md: 'none' } }}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Box className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link href="/home" className="mobile-menu-item" onClick={handleMobileMenuClose}>Home</Link>
        <Box className="mobile-menu-group">
          <Box
              className="mobile-menu-item"
              onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
              sx={{ cursor: 'pointer', width: '100%' }}
          >
              About Us
          </Box>
          {isMobileAboutOpen && (
              <Box className="mobile-submenu">
                  <Link href="/board" className="mobile-menu-item" onClick={handleMobileMenuClose}>
                      Board
                  </Link>
                  <Link href="/staff" className="mobile-menu-item" onClick={handleMobileMenuClose}>
                      Staff
                  </Link>
              </Box>
          )}
        </Box>
        <Box className="mobile-menu-group">
            <Box
                className="mobile-menu-item"
                onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                sx={{ cursor: 'pointer', width: '100%' }}
            >
                Projects
            </Box>
            {isMobileProjectsOpen && (
                <Box className="mobile-submenu">
                    <Link href="/community-sensor-project" className="mobile-menu-item" onClick={handleMobileMenuClose}>
                        Community Sensor Project
                    </Link>
                </Box>
            )}
        </Box>
        <Link href="/contact" className="mobile-menu-item" onClick={handleMobileMenuClose}>Join Us</Link>
        <Box className="mobile-menu-extras">
          <Link href="https://linktr.ee/o2nyc" className="mobile-menu-item social" target="_blank" rel="noopener noreferrer" onClick={handleMobileMenuClose}>
            <img src={"/images/linktree.png"} alt="Instagram" className="mobile-menu-icon"/> Linktree
          </Link>
          <Button
            variant="outlined"
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            onClick={handleMobileMenuClose}
            sx={{fontFamily: '"Kanit", serif', borderColor: '#215d4e', color: '#215d4e', mt: '1rem', '&:hover': { borderColor: '#3a9d9b', backgroundColor: 'rgba(58, 157, 155, 0.05)' } }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;