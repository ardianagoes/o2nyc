import "./Contact.css";
import { Box, Typography } from "@mui/material";
import Navbar from "../comp/Navbar";

export default function Contact() {
  return (
    <Box className="contact-page">
        <Box className="navbar-box">
      <Navbar/>
      </Box>
    </Box>
  );
}