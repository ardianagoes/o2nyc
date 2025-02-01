import React from "react";
import "./Navbar.css";
import { Box, Link } from "@mui/material";

const Navbar = () => {

  return (
    <Box className="navbar">
      <Box className="navbar-container">
        <Box className="logo-container" sx={{ width: "10%" }}>
          <Link href="/"><img src="/logo.png" alt="logo" className= "website-logo"/></Link>
        </Box>
            <Link href="/about" className="selection-item">About Us</Link>
            <Link href="/research" className="selection-item">Research</Link>
            <Link href="/resources" className="selection-item">Resources</Link>
            <Link href="/contact" className="selection-item">Contact Us</Link>
      </Box>
    </Box>

  );
};

export default Navbar;