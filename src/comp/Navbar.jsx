import { Box, Button, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

const INSTAGRAM_URL = "https://www.instagram.com/o2nyc_/";
const GOOGLE_FORM_URL = "https://forms.gle/12Fkbe73fsZ3w2Fg7";
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              backgroundColor: 'white',
              color: '#2A7C7A', 
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
            Get Involved!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;