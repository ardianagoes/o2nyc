import "./Home.css";
import { Box, Typography } from "@mui/material";
import Navbar from "../comp/Navbar";

export default function Home() {
  return (
    <Box className="home-page">
      <Box className="navbar-box">
      <Navbar/>
      </Box>
      <Box className="content-block1">
        <Box className="left-column">
        <img src="images/spongebob.png" alt="logo" className= "home-picture"/>
        </Box>
        <Box className="right-column">

        <Typography>hello</Typography>
        </Box>

      </Box>
    </Box>
  );
} 