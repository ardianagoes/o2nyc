import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import Footer from "../comp/Footer";
import Navbar from "../comp/Navbar";
import "./SensorWorkshops.css";

const medgarWorkshopSlides = [
  {
    imageSrc: "/images/workshops/medgar-evers-4-25-26-1.jpg",
    alt: "Medgar Evers College Workshop photo 1",
  },
  {
    imageSrc: "/images/workshops/medgar-evers-4-25-26-2.jpg",
    alt: "Medgar Evers College Workshop photo 2",
  },
];

export default function SensorWorkshops() {
  const [slideIdx, setSlideIdx] = useState(0);

  const prevSlide = () => {
    setSlideIdx((i) => (i === 0 ? medgarWorkshopSlides.length - 1 : i - 1));
  };

  const nextSlide = () => {
    setSlideIdx((i) => (i === medgarWorkshopSlides.length - 1 ? 0 : i + 1));
  };

  const slide = medgarWorkshopSlides[slideIdx];

  return (
    <Box className="sensor-workshops-page">
      <Box className="navbar-box">
        <Navbar />
      </Box>

      <Box className="sensor-workshops-content">
        <Box className="sensor-workshops-title-container">
          <Typography variant="h3" component="h1" className="page-title sensor-workshops-title">
            Sensor Workshops
          </Typography>
        </Box>

        <Box className="workshop-entry">
          <Typography variant="h4" component="h2" className="workshop-entry-heading">
            Medgar Evers College Workshop 4/25/26
          </Typography>

          <Box className="workshop-carousel">
            <IconButton
              onClick={prevSlide}
              className="workshop-slide-arrow left"
              aria-label="Previous workshop image"
            >
              <ArrowBackIosNewIcon />
            </IconButton>

            <Box className="workshop-image-frame">
              <img src={slide.imageSrc} alt={slide.alt} className="workshop-image" />
            </Box>

            <IconButton
              onClick={nextSlide}
              className="workshop-slide-arrow right"
              aria-label="Next workshop image"
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>

          <Box className="workshop-entry-textbox">
            <Typography variant="body1" className="workshop-entry-text">
               Over 15 new sensors were assembled by community members today and will be installed soon! 
               Thank you to everyone who participated. Thank you to Medgar Evers College, and specifically Dr. Bramble and Dr. Herrera
              for making this event possible.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
}

