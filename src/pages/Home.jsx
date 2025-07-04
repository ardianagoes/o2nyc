import { Box, Link, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Footer from "../comp/Footer";
import Navbar from "../comp/Navbar";
import "./Home.css";

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
      <Box
        className="fixed-banner-container"
        aria-label="Homepage Banner"
      ></Box>
      <Box className="motto-section">
        <Typography variant="h5" component="p" className="motto-text">
          Our motto is simple, everyone deserves the right to breathe{" "}
          <strong>clean quality air</strong>, regardless of their income, race,
          or zip code.
        </Typography>
      </Box>
      <Box className="info-section">
        <Box
          ref={infoTextRef}
          className={`info-text-box ${isInfoVisible ? "visible" : ""}`}
        >
          <Typography variant="body1" component="p">
            Most NYC neighborhoods lack{" "}
            <strong>real-time air quality monitoring sensors</strong>, with the
            majority concentrated in wealthier areas. This leaves{" "}
            <strong>low-income communities</strong> without critical information
            about the air they breathe.
          </Typography>
        </Box>
        <Box className="info-image-container">
          <Box></Box>
          <img
            src="/images/map.png"
            alt="Air quality map"
            className="info-image"
          />
          <Link
            href="https://www.trueinitiative.org/media/792240/true-nyc-report-fv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="caption"
            display="block"
            className="home-image-caption"
            sx={{
              textDecoration: "underline",
              color: "white",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Source: The Real Urban Emissions Initiative
          </Link>
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
            To close this gap, O₂-NYC is designing and distributing{" "}
            <strong>affordable air sensors</strong> that provide{" "}
            <strong>real-time pollution data</strong>, equipping communities with
            the tools they need to advocate for <strong>cleaner air</strong>.{" "}
          </Typography>
          <Typography
            className="action-heading"
            variant="h1"
            component="h3"
            sx={{ mt: 2, mb: 1 }}
          >
            How We Make a Difference:
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 0.5 }}>
            <strong>Affordable Air Sensors</strong> – <strong>Low-cost</strong>{" "}
            devices tracking air pollution city wide
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 0.5 }}>
            <strong>GIS Data Mapping</strong> – Live and interactive pollution
            tracking for everyone to see
          </Typography>
          <Typography variant="body1" component="p">
            <strong>Policy & Community Advocacy</strong> – Partnering with local
            officials, <strong>environmental justice groups</strong>, and
            community organizations to push for real change through the usage of
            our data
          </Typography>
        </Box>
      </Box>
      <Box className="final-cta-section">
        <Box className="left-column get-involved-bubble-container">
          <Box className="get-involved-title-bubble">
            <Typography
              variant="h3"
              component="h2"
              className="page-title get-involved-title"
            >
              Get Involved!
            </Typography>
          </Box>
          <Box className="get-involved-blurb-bubble">
            <Typography variant="h6" component="h3" className="blurb-heading">
              How You Can Help
            </Typography>
            <Typography variant="body1" component="p" className="blurb-point">
              • <strong>Host a Sensor</strong> – Place an air quality sensor in
              your school, business, or community center.
            </Typography>
            <Typography variant="body1" component="p" className="blurb-point">
              • <strong>Volunteer</strong> & help us fundraise to distribute
              sensors throughout NYC!
            </Typography>
            <Typography variant="body1" component="p" className="blurb-point">
              • <strong>Collaborate</strong> with us to host volunteering and
              educational events on environmental awareness and pollution.
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