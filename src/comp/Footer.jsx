import React from "react";
import "./Footer.css";
import { Box, Link, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box className="contact-box">
      <Box className="icons-container">
        <Box className="icons" align="center">
          <Link
            href="https://www.instagram.com/greenfuturesnyc/"
            className="logo-ref"
            target="_blank"
          >
            <img src={"/images/instagram.png"} alt="Instagram logo" />
          </Link>
          <Link
            href=""
            className="logo-ref"
            target="_blank"
          >
            <img src={"/images/facebook.png"} alt="Facebook logo" />
          </Link>
          <Link
            href=""
            className="logo-ref"
            target="_blank"
          >
            <img src={"/images/linktree.png"} alt="Linktree" />
          </Link>
          <Link
            href="https://github.com/ardianagoes/green-futures"
            className="logo-ref"
            target="_blank"
          >
            <img src={"/images/github.png"} alt="GitHub logo" />
          </Link>
        </Box>
      </Box>
      <Typography variant="body1" align="center">
        ©2025 O2NYC.
      </Typography>
      <Typography variant="body1" align="center" class="thanks">
        o2nyc@gmail.com
      </Typography>
      <br />
    </Box>
  );
};

export default Contact;
