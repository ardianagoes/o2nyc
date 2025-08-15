import { Box, Link, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const iconsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1, 
      }
    );
    if (iconsRef.current) {
      observer.observe(iconsRef.current);
    }

    return () => {
      if (iconsRef.current) {
        observer.unobserve(iconsRef.current);
      }
      observer.disconnect();
    };
  }, []); 

  return (
    <Box className="contact-box">
      <Box className="footer-logo-container">
        <img src="/images/logo.png" alt="O2NYC Logo" className="footer-main-logo" />
      </Box>
      <Box className="icons-container">
        <Box
          ref={iconsRef}
          className={`icons ${isVisible ? "visible" : ""}`}
          align="center"
        >
          <Link href="https://www.instagram.com/o2nyc_/" className="logo-ref" target="_blank" rel="noopener noreferrer">
            <img src={"/images/instagram.png"} alt="Instagram logo" />
          </Link>
          <Link href="https://linktr.ee/o2nyc" className="logo-ref" target="_blank" rel="noopener noreferrer">
            <img src={"/images/linktree.png"} alt="Linktree" />
          </Link>
          <Link href="https://github.com/ardianagoes/o2nyc" className="logo-ref" target="_blank" rel="noopener noreferrer">
            <img src={"/images/github.png"} alt="GitHub logo" />
          </Link>
        </Box>
      </Box>
      <Typography className="copyright" variant="body1" align="center">
        Email Us! o2nyc.contact@gmail.com
      </Typography>
      <Typography className="copyright" variant="body1" align="center">
        ©{new Date().getFullYear()} O2NYC 
      </Typography>
      <br/>
    </Box>
  );
};

export default Footer;