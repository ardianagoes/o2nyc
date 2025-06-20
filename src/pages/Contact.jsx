import "./Contact.css";
import { Box, Typography, Button, IconButton } from "@mui/material";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import React, { useState } from "react"; 
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const volunteerSlides = [
  {
    imageSrc: '/images/prospect-volunteer.png',
    caption: 'Prospect Park Fundraiser 4/13'
  },
  {
    imageSrc: '/images/prospect-volunteer3.png',
    caption: 'Prospect Park Fundraiser 5/31'
  },
  { 
    imageSrc: '/images/prospect-volunteer4.png',
    caption: 'Prospect Park Fundraiser 6/8'
  },
  { 
    imageSrc: '/images/prospect-volunteer2.png',
    caption: 'Prospect Park Fundraiser 6/8'
  },
  { 
    imageSrc: '/images/prospect-volunteer5.png',
    caption: 'Prospect Park Fundraiser 6/8'
  }
];

export default function Contact() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === volunteerSlides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? volunteerSlides.length - 1 : currentSlide - 1);
  };

  return (
    <Box className="contact-page">
        <Box className="navbar-box">
      <Navbar/>
      </Box>
      <Box className="contact-content">
        <Box className="get-involved-title-container">
        <Typography variant="h3" component="h1" className="page-title get-involved-title">
          Get Involved!
        </Typography>
      </Box>
        <Box className="sensor-box">
          <Box className="sensor-info-section">
            <Box className="left-column sensor-text-column">
              <Typography variant="body1" className="sensor-cost-text">
                Our sensors are cheap and inexpensive! Made of only 3 parts, housed in one box, that all cost just $50. Contact us if you wish to help fund or host one of our sensors!
              </Typography>
            </Box>
            <Box className="right-column sensor-image-column">
              <img
                src="/images/sensor.png"
                alt="O2NYC Air Quality Sensor Diagram"
                className="sensor-image"
              />
              <Typography variant="caption" display="block" className="image-caption">
                Air Quality Sensor
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="content-Box">
          <Box className="content-block">
            <Box className="left-column">
              <Box className="slideshow-container">
                <IconButton onClick={prevSlide} className="slide-arrow left" aria-label="Previous slide">
                  <ArrowBackIosNewIcon />
                </IconButton>
                <img
                  src={volunteerSlides[currentSlide].imageSrc}
                  alt="Volunteer opportunity"
                  className="volunteer-image"
                />
                <IconButton onClick={nextSlide} className="slide-arrow right" aria-label="Next slide">
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
              <Typography variant="caption" display="block" className="image-caption">
                {volunteerSlides[currentSlide].caption}
              </Typography>
            </Box>
            <Box className="right-column">
              <Typography variant="body1" className="volunteer-text">
                Help support O2 NYC, volunteer with us to help raise money, support communities, and gain service hours!
              </Typography>
            </Box>
          </Box>
        </Box>
      <Box className="form-button-section">
        <Button
          variant="contained"
          href="https://forms.gle/12Fkbe73fsZ3w2Fg7" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-form-button" 
          sx={{ 
            backgroundColor: 'white',
            color: '#2A7C7A', 
            fontWeight: 'bold',
            fontSize: '1.1rem',
            padding: '12px 30px', 
            borderRadius: '25px', 
            textTransform: 'none', 
            boxShadow: '0 3px 8px black',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
            '&:hover': {
              backgroundColor: '#f5f5f5', 
              color: '#256d6a',
              transform: 'translateY(-2px)', 
              boxShadow: '0 5px 12px black',
            }
          }}
        >
          Contact Form
        </Button>
      </Box>
      </Box>
      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
}