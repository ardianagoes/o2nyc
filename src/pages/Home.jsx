import "./Home.css";
import { Box, Typography } from "@mui/material";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const infoTextRef = useRef(null);
  const [isActionVisible, setIsActionVisible] = useState(false);
  const actionTextRef = useRef(null); 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInfoVisible(true);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (infoTextRef.current) {
      observer.observe(infoTextRef.current);
    }
    return () => {
      if (infoTextRef.current) {
        observer.unobserve(infoTextRef.current);
      }
      observer.disconnect();
    };
  }, []); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActionVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const currentRef = actionTextRef.current; 
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []); 

  return (
    <Box className="home-page">
      <Box className="navbar-box">
        <Navbar />
      </Box>
      <img
        src="/images/banner.png" 
        alt="Homepage Banner"     
        className="home-banner-image"
      />
      <Box className="motto-section">
        <Typography variant="h5" component="p" className="motto-text">
          Our motto is simple, everyone deserves the right to breathe clean quality air, regardless of their income, race, or zip code.
        </Typography>
      </Box>
      <Box className="info-section">
      <Box
          ref={infoTextRef} 
          className={`info-text-box ${isInfoVisible ? "visible" : ""}`}
        >
        <Typography variant="body1" component="p"> 
            Most NYC neighborhoods lack real-time air quality monitoring sensors, with the majority concentrated in wealthier areas. This leaves low-income communities without critical information about the air they breathe.
        </Typography>
        </Box>
        <Box className="info-image-container">
          <Box></Box>
          <img
            src="/images/map.png" 
            alt="Air quality map"
            className="info-image"/>
          <Typography variant="caption" display="block" className="home-image-caption">
          Ambient PM2.5 concentrations attributable to diesel truck tailpipe emissions within New York City.
          </Typography>
        </Box>
      </Box>
       <Box className="action-section">
        <Box className="map-container">
          <iframe
            title="Sensor Community Map" 
            src="https://maps.sensor.community/#3/32.88/-47.0" 
            className="map-iframe"
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
          ></iframe>
        </Box>
        <Box
          ref={actionTextRef} 
          className={`action-text-box ${isActionVisible ? "visible" : ""}`} 
        >
          <Typography variant="body1" component="p">
            To close this gap, O₂NYC is designing and distributing affordable air sensors that provide real-time pollution data, equipping communities with the tools they need to advocate for cleaner air.
          </Typography>
          <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1 }}>
            🛠️ How We Make a Difference:
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 0.5 }}>
            ✔ Affordable Air Sensors – Low-cost devices tracking air pollution
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 0.5 }}>
            ✔ GIS Data Mapping – Live, interactive pollution tracking for public access
          </Typography>
          <Typography variant="body1" component="p">
            ✔ Policy & Community Advocacy – Partnering with local officials, environmental justice groups, and community organizations to push for change
          </Typography>
          <Typography variant="body1" component="p">
          💨 Why It Matters: Pollutants like PM 2.5 and PM 10 are linked to asthma, lung disease, and cardiovascular issues, disproportionately affecting historically underserved communities.          </Typography>
        </Box>
      </Box>
    <Box className="final-cta-section">
    <Box className="left-column get-involved-bubble-container">
      <Box className="get-involved-title-bubble">
        <Typography variant="h3" component="h2" className="page-title get-involved-title">
          Get Involved!
        </Typography>
      </Box>
      <Box className="get-involved-blurb-bubble">
        <Typography variant="h6" component="h3" className="blurb-heading">
          How You Can Help
        </Typography>
        <Typography variant="body1" component="p" className="blurb-point">
          • Host a Sensor – Place an air quality sensor in your school, business, or community center.
        </Typography>
        <Typography variant="body1" component="p" className="blurb-point">
          • Volunteer & help us fundraise to distribute sensors throughout NYC!
        </Typography>
        <Typography variant="body1" component="p" className="blurb-point">
          • Collaborate with us to host volunteering and educational events on environmental awareness and pollution.
        </Typography>
      </Box>
    </Box>
    <Box className="right-column form-embed-container">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdWXIyeg9juJ3evVO80iZkIrT-EylJh1OG3yYQbk6aqP__4JQ/viewform?embedded=true"
        className="google-form-iframe" 
        loading="lazy"
      >
        Loading…
      </iframe>
    </Box>
</Box>
      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
}