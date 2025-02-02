import "./About.css";
import { Box, Typography } from "@mui/material";
import Navbar from "../comp/Navbar";

export default function About() {
  return (
    <Box className="about-page">
      <Box className="navbar-box">
      <Navbar/>
      </Box>
    </Box>
  );
}