import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../comp/Footer';
import Navbar from '../comp/Navbar';
import AnimatedBubble from './AnimatedBubble';
import './CommunitySensorProject.css';
import TypingEffect from './TypingEffect';

const images = [
  '/images/sensor2.png',
  '/images/sensor.png',
  '/images/solder.png',
  '/images/collabs/bklvl.png'
];

const CommunitySensorProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box className="community-sensor-project-page">
      <Box className="navbar-box">
        <Navbar />
      </Box>
      <Box className="project-hero-section">
        <Box className="title-box">
          <TypingEffect
            className="project-title"
            text="The Community Sensor Project"
          />
        </Box>
      </Box>
      <Box className="project-content">
        <Box className="main-content-box">
          <AnimatedBubble direction="center">
            <Box className="intro-section centered-intro">
              <Typography variant="body1" className="intro-text">
                Most air quality data in NYC is citywide, leaving neighborhoods without the local insights they need. The Community Sensor Project changes that.
              </Typography>
            </Box>
          </AnimatedBubble>
          <AnimatedBubble direction="right">
            <Box className="content-row">
              <Box className="text-content">
                <Typography variant="body1" className="funding-text">
                  Through our fundraising efforts and the generous support of fellow nonprofits we have secured the funding necessary for our first bulk distribution of our air quality monitors. We're deploying 125 low-cost sensors across the city, focusing on communities most impacted by pollution. Each sensor measures PM 1, PM2.5 and PM10 in real time, giving residents access to the information they need to protect their health and advocate for change.
                </Typography>
              </Box>
              <Box className="image-content">
                <Box className="image-wrapper">
                  <img src={images[0]} alt="Project image 1" className="project-image" />
                </Box>
              </Box>
            </Box>
          </AnimatedBubble>

          <AnimatedBubble direction="left">
            <Box className="content-row">
              <Box className="image-content">
                <Box className="image-wrapper">
                  <img src={images[1]} alt="Project image 2" className="project-image" />
                </Box>
              </Box>
              <Box className="text-content">
                <Typography variant="h3" className="section-title">What We're Building</Typography>
                <Box className="bullet-list">
                  <Typography variant="body1" className="bullet-point">125+ air sensors placed citywide with community partners</Typography>
                  <Typography variant="body1" className="bullet-point">A public map where anyone can view live neighborhood-level air quality</Typography>
                  <Typography variant="body1" className="bullet-point">Workshops where residents assemble sensors, learn about pollution, and install them locally</Typography>
                </Box>
              </Box>
            </Box>
          </AnimatedBubble>

          <AnimatedBubble direction="right">
            <Box className="content-row">
              <Box className="text-content">
                <Typography variant="h3" className="section-title">Why It Matters</Typography>
                <Box className="bullet-list">
                  <Typography variant="body1" className="bullet-point">Neighborhood data → real-time insights where it's needed most</Typography>
                  <Typography variant="body1" className="bullet-point">Accessible technology → low-cost sensors anyone can understand</Typography>
                  <Typography variant="body1" className="bullet-point">Collective action → turning data into advocacy for cleaner air</Typography>
                </Box>
              </Box>
              <Box className="image-content">
                <Box className="image-wrapper">
                  <img src={images[2]} alt="Project image 3" className="project-image" />
                </Box>
              </Box>
            </Box>
          </AnimatedBubble>

          <AnimatedBubble direction="left">
            <Box className="content-row">
              <Box className="image-content">
                <Box className="image-wrapper">
                  <img src={images[3]} alt="Project image 4" className="project-image" />
                </Box>
              </Box>
              <Box className="text-content">
                <Typography variant="h3" className="section-title">Get Involved!</Typography>
                <Box className="bullet-list">
                  <Typography variant="body1" className="bullet-point">Host a Community Sensor in your school, business, or neighborhood</Typography>
                  <Typography variant="body1" className="bullet-point">Partner with us to bring a workshop to your community</Typography>
                  <Typography variant="body1" className="bullet-point">Volunteer to help expand sensor access across NYC</Typography>
                </Box>
              </Box>
            </Box>
          </AnimatedBubble>
        </Box>
        <Box className="mobile-content">
          <AnimatedBubble direction="center">
            <Box className="mobile-intro-section">
              <Typography variant="body1" className="intro-text">
                Most air quality data in NYC is citywide, leaving neighborhoods without the local insights they need. The Community Sensor Project changes that.
              </Typography>
            </Box>
          </AnimatedBubble>

          <AnimatedBubble direction="right">
            <Box className="mobile-text-section">
              <Typography variant="body1" className="funding-text">
                Through our fundraising efforts and the generous support of fellow nonprofits we have secured the funding necessary for our first bulk distribution of our air quality monitors. We're deploying 125 low-cost sensors across the city, focusing on communities most impacted by pollution. Each sensor measures PM 1, PM2.5 and PM10 in real time, giving residents access to the information they need to protect their health and advocate for change.
              </Typography>
            </Box>
          </AnimatedBubble>

          <AnimatedBubble direction="left">
            <Box className="mobile-image-section">
              <Box className="image-wrapper">
                <img src={images[0]} alt="Project image 1" className="project-image" />
              </Box>
            </Box>
          </AnimatedBubble>

          <AnimatedBubble direction="right">
            <Box className="mobile-text-section">
              <Typography variant="h3" className="section-title">What We're Building</Typography>
              <Box className="bullet-list">
                <Typography variant="body1" className="bullet-point">125+ air sensors placed citywide with community partners</Typography>
                <Typography variant="body1" className="bullet-point">A public map where anyone can view live neighborhood-level air quality</Typography>
                <Typography variant="body1" className="bullet-point">Workshops where residents assemble sensors, learn about pollution, and install them locally</Typography>
              </Box>
            </Box>
          </AnimatedBubble>

          <AnimatedBubble direction="left">
            <Box className="mobile-image-section">
              <Box className="image-wrapper">
                <img src={images[1]} alt="Project image 2" className="project-image" />
              </Box>
            </Box>
          </AnimatedBubble>

          <AnimatedBubble direction="right">
            <Box className="mobile-text-section">
              <Typography variant="h3" className="section-title">Why It Matters</Typography>
              <Box className="bullet-list">
                <Typography variant="body1" className="bullet-point">Neighborhood data → real-time insights where it's needed most</Typography>
                <Typography variant="body1" className="bullet-point">Accessible technology → low-cost sensors anyone can understand</Typography>
                <Typography variant="body1" className="bullet-point">Collective action → turning data into advocacy for cleaner air</Typography>
              </Box>
            </Box>
          </AnimatedBubble>

          <AnimatedBubble direction="left">
            <Box className="mobile-image-section">
              <Box className="image-wrapper">
                <img src={images[2]} alt="Project image 3" className="project-image" />
              </Box>
            </Box>
          </AnimatedBubble>

          <AnimatedBubble direction="right">
            <Box className="mobile-text-section">
              <Typography variant="h3" className="section-title">Get Involved!</Typography>
              <Box className="bullet-list">
                <Typography variant="body1" className="bullet-point">Host a Community Sensor in your school, business, or neighborhood</Typography>
                <Typography variant="body1" className="bullet-point">Partner with us to bring a workshop to your community</Typography>
                <Typography variant="body1" className="bullet-point">Volunteer to help expand sensor access across NYC</Typography>
              </Box>
            </Box>
          </AnimatedBubble>

          <AnimatedBubble direction="left">
            <Box className="mobile-image-section">
              <Box className="image-wrapper">
                <img src={images[3]} alt="Project image 4" className="project-image" />
              </Box>
            </Box>
          </AnimatedBubble>
        </Box>
      </Box>
      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
};

export default CommunitySensorProject;