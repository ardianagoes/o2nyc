import "./Contact.css";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";

export default function Contact() {
  return (
    <Box className="contact-page">
        <Box className="navbar-box">
      <Navbar/>
      </Box>
        <Box className="get-involved-title-container">
        <Typography variant="h3" component="h1" className="page-title get-involved-title">
          Get Involved!
        </Typography>
      </Box>
      <Box className = "content-Box">
      <Box className="content-block">
        <Box className="left-column">
          <img
            src="/images/prospect-volunteer.png" 
            alt="Volunteer opportunity"
            className="volunteer-image" 
          />
          <Typography variant="caption" display="block" className="image-caption">
            Prospect Park Fundraiser 4/13
          </Typography>
        </Box>
        <Box className="right-column">
          <Typography variant="body1" className="volunteer-text">
            Help support O2 NYC, volunteer with us to help raise money, support communities, and gain service hours!
          </Typography>
        </Box>
      </Box>
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
      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
}