import { Box, Link, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
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

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('o2nyc.contact@gmail.com');
      setShowCopiedMessage(true);
      setTimeout(() => {
        setShowCopiedMessage(false);
      }, 500);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

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
      
      <Box className="email-section">
        <Box className="email-container" onClick={copyEmailToClipboard}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="email-icon">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#215d4e" strokeWidth="2" fill="none"/>
            <polyline points="22,6 12,13 2,6" stroke="#215d4e" strokeWidth="2" fill="none"/>
          </svg>
          <Typography className="email-text" variant="body1">
            Email Us!
          </Typography>
        </Box>
        {showCopiedMessage && (
          <Box className="copied-message">
            <Typography variant="body2">Email Copied!</Typography>
          </Box>
        )}
      </Box>

      <Typography className="copyright" variant="body1" align="center">
        ©{new Date().getFullYear()} O2NYC 
      </Typography>
      <br/>
    </Box>
  );
};

export default Footer;