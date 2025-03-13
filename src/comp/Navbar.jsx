import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Box, Link } from "@mui/material";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
        <Box className="logo-container" sx={{ width: "10%" }}>
          <Link href="/">
            <img src="images/logo.png" alt="logo" className="website-logo" />
          </Link>
        </Box>
        <Link href="/home" className="selection-item">Home</Link>
        <Link href="/about" className="selection-item">About Us</Link>
        <Link href="/research" className="selection-item">Research</Link>
        <Link href="/resources" className="selection-item">Resources</Link>
        <Link href="/contact" className="selection-item">Join Us</Link>
      </Box>
    </Box>
  );
};

export default Navbar;
