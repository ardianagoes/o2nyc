import { Box, Button, Link, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';    
import CloseIcon from '@mui/icons-material/Close';  

const INSTAGRAM_URL = "https://www.instagram.com/o2nyc_/";
const GOOGLE_FORM_URL = "https://forms.gle/12Fkbe73fsZ3w2Fg7";
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 90);
    };
    const closeMenuOnScroll = () => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", closeMenuOnScroll); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", closeMenuOnScroll);
    };
  }, [isMobileMenuOpen]); 

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
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
          <Link href="/about" className="selection-item">About Us</Link>
          <Link href="/contact" className="selection-item">Join Us</Link>
        </Box>
        <Box className="navbar-right">
          <Link
            href={INSTAGRAM_URL}
            className="insta-nav" 
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={"/images/instagram.png"} alt="Instagram logo" className="navbar-social-icon"/>
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
        <Link href="/home" className="mobile-menu-item" onClick={handleMobileMenuClose}  sx={{
          display: 'block', 
          padding: '1rem 1.5rem',
          fontFamily: '"Kanit", serif', 
          fontSize: '1.2rem',
          color: '#215d4e',      
          textDecoration: 'none', 
          textAlign: 'center',
          borderBottom: '1px solid #eee'
          }}>Home</Link>
        <Link href="/about" className="mobile-menu-item" onClick={handleMobileMenuClose}sx={{
          display: 'block', 
          padding: '1rem 1.5rem',
          fontFamily: '"Kanit", serif', 
          fontSize: '1.2rem',
          color: '#215d4e',      
          textDecoration: 'none', 
          textAlign: 'center',
          borderBottom: '1px solid #eee'
          }} >About Us</Link>
        <Link href="/contact" className="mobile-menu-item" onClick={handleMobileMenuClose} sx={{
          display: 'block', 
          padding: '1rem 1.5rem',
          fontFamily: '"Kanit", serif', 
          fontSize: '1.2rem',
          color: '#215d4e',      
          textDecoration: 'none', 
          textAlign: 'center',
          borderBottom: '1px solid #eee'
          }}>Join Us</Link>
        <Box className="mobile-menu-extras">
          <Link href={INSTAGRAM_URL} className="mobile-menu-item social" target="_blank" rel="noopener noreferrer" onClick={handleMobileMenuClose} sx={{
          display: 'block', 
          padding: '1rem 1.5rem',
          fontFamily: '"Kanit", serif', 
          fontSize: '1.2rem',
          color: '#215d4e',      
          textDecoration: 'none', 
          textAlign: 'center',
          borderBottom: '1px solid #eee'
          }}>
            <img src={"/images/instagram.png"} alt="Instagram" className="mobile-menu-icon"/> Instagram
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