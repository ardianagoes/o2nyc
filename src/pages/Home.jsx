// Home.jsx

import "./Home.css";
import { Box, Typography } from "@mui/material";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
// Remove unused imports if needed (useEffect, useRef, useState were from previous code)
// import { useEffect, useRef, useState } from "react"; // Removed for now

export default function Home() {

  return (
    <Box className="home-page">
      <Box className="navbar-box">
        <Navbar />
      </Box>

      {/* --- Add Banner Image Here --- */}
      <img
        src="/images/banner.png" // Make sure this path is correct relative to your public folder
        alt="Homepage Banner"     // Add descriptive alt text
        className="home-banner-image"
      />
      {/* --- End Banner Image --- */}

      {/* Add other page content between banner and footer later */}
      <Box className="main-content-area">
         {/* Example: <Typography variant="h2">Welcome!</Typography> */}
      </Box>


      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
}