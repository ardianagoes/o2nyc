import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Footer from "../comp/Footer";
import Navbar from "../comp/Navbar";
import "./Contact.css";

const partners = [
  { name: 'Medgar Evers College', imageSrc: '/images/collabs/MEC-Logo.png' },
  { name: 'Brooklyn Level Up', imageSrc: '/images/collabs/BKLVL-Logo.png' },
  { name: 'Little Haiti BK', imageSrc: '/images/collabs/LH-Logo.png' },
  { name: 'Citizens Committee for New York City', imageSrc: '/images/collabs/CC-Logo.png' },
  { name: 'Singing Winds', imageSrc: '/images/collabs/SW-Logo.png' },
  { name: 'Youth Action 50', imageSrc: '/images/collabs/YA50-Logo.png' }
];

const CounterAnimation = ({ targetValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
      observer.disconnect();
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(targetValue * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, targetValue, duration]);

  return (
    <Box ref={counterRef} className="stats-container">
      <Box className="counter-container">
        <Typography variant="h4" className="counter-label">
          Total Raised:
        </Typography>
        <Typography variant="h2" className="counter-value">
          ${count.toLocaleString()}
        </Typography>
      </Box>
      <Box className="stats-row">
        <Box className="stat-box">
          <Typography variant="h4" className="stat-value">
            35+
          </Typography>
          <Typography variant="body2" className="stat-label">
            volunteers
          </Typography>
        </Box>
        <Box className="stat-box">
          <Typography variant="h4" className="stat-value">
            18+
          </Typography>
          <Typography variant="body2" className="stat-label">
            fundraisers held
          </Typography>
        </Box>
        <Box className="stat-box">
          <Typography variant="h4" className="stat-value">
            2
          </Typography>
          <Typography variant="body2" className="stat-label">
            grants received
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const volunteerSlides = [
  {
    imageSrc: '/images/volunteerevents/prospect-volunteer.png',
    caption: 'Prospect Park Fundraiser 4/13'
  },
  {
    imageSrc: '/images/volunteerevents/prospect-volunteer3.png',
    caption: 'Prospect Park Fundraiser 5/31'
  },
  { 
    imageSrc: '/images/volunteerevents/prospect-volunteer4.png',
    caption: 'Prospect Park Fundraiser 6/8'
  },
  { 
    imageSrc: '/images/volunteerevents/prospect-volunteer2.png',
    caption: 'Prospect Park Fundraiser 6/8'
  },
  { 
    imageSrc: '/images/volunteerevents/prospect-volunteer5.png',
    caption: 'Prospect Park Fundraiser 6/8'
  },
  { 
    imageSrc: '/images/volunteerevents/fundraise6-27.png',
    caption: 'Prospect Park Fundraiser 6/27'
  },
  { 
    imageSrc: '/images/volunteerevents/fundraise6-28.png',
    caption: 'Prospect Park Fundraiser 6/28'
  },
  { 
    imageSrc: '/images/volunteerevents/volunteer1.jpg',
    caption: 'Prospect Park Fundraiser 7/5'
  },
  { 
    imageSrc: '/images/volunteerevents/volunteer2.jpg',
    caption: 'Prospect Park Fundraiser 7/12'
  },
  { 
    imageSrc: '/images/volunteerevents/volunteer3.jpg',
    caption: 'Prospect Park Fundraiser 7/19'
  },
  { 
    imageSrc: '/images/volunteerevents/volunteer4.jpg',
    caption: 'Prospect Park Fundraiser 8/2'
  },
  { 
    imageSrc: '/images/volunteerevents/fundraise8-23.png',
    caption: 'Grand Army Plaza Fundraiser 8/23'
  },
  { 
    imageSrc: '/images/volunteerevents/fundraise9-13.png',
    caption: 'Fort Greene Park Fundraiser 9/13'
  },
];

const collaborationSlides = [
  {
    imageSrc: '/images/collabs/bklvl.png',
    caption: 'BKLVLUP'
  },
  {
    imageSrc: '/images/collabs/communityboard17.png',
    caption: 'COMMUNITY BOARD 17'
  },
  { 
    imageSrc: '/images/collabs/haitireuse.png',
    caption: 'LITTLE HAITI BK & BIG REUSE'
  },
  { 
    imageSrc: '/images/collabs/singingwinds.png',
    caption: 'SINGING WINDS'
  },
];

export default function Contact() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCollaborationSlide, setCurrentCollaborationSlide] = useState(0);
  const statsRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === volunteerSlides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? volunteerSlides.length - 1 : currentSlide - 1);
  };

  const nextCollaborationSlide = () => {
    setCurrentCollaborationSlide(currentCollaborationSlide === collaborationSlides.length - 1 ? 0 : currentCollaborationSlide + 1);
  };

  const prevCollaborationSlide = () => {
    setCurrentCollaborationSlide(currentCollaborationSlide === 0 ? collaborationSlides.length - 1 : currentCollaborationSlide - 1);
  };

  return (
    <Box className="contact-page">
        <Box className="navbar-box">
      <Navbar/>
      </Box>
      <Box className="contact-content">
      <Box className="get-involved-title-container">
        <Typography 
            variant="h3" 
            component={Link}
            href="https://forms.gle/12Fkbe73fsZ3w2Fg7"
            target="_blank"
            rel="noopener noreferrer"
            className="page-title get-involved-title"
            sx={{
            textDecoration: 'none',
            color: 'inherit',
            transition: 'opacity 0.2s ease-in-out',
            '&:hover': {
                opacity: 0.9,
                cursor: 'pointer',
            }
            }}
        >
            Get Involved!
        </Typography>
      </Box>
      
      <Box className="stats-section" ref={statsRef}>
        <CounterAnimation targetValue={8413} duration={2500} />
      </Box>
      <CommunityPartners triggerRef={statsRef} />
        
        <Box className="content-Box">
          <Box className="content-block">
            <Box className="left-column">
              <Box className="slideshow-container">
                <IconButton onClick={prevCollaborationSlide} className="slide-arrow left" aria-label="Previous slide">
                  <ArrowBackIosNewIcon />
                </IconButton>
                <img
                  src={collaborationSlides[currentCollaborationSlide].imageSrc}
                  alt="Community collaboration"
                  className="volunteer-image"
                />
                <IconButton onClick={nextCollaborationSlide} className="slide-arrow right" aria-label="Next slide">
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
              <Typography variant="caption" display="block" className="image-caption">
                {collaborationSlides[currentCollaborationSlide].caption}
              </Typography>
            </Box>
            <Box className="right-column">
              <Typography variant="body1" className="volunteer-text">
                At O2NYC, we believe in the power of collaboration. We're always looking to partner with community organizations to host events, raise awareness, and distribute our affordable air quality sensors. If you're interested in working together to make a difference, please reach out to us.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="sensor-box">
          <Box className="sensor-info-section">
            <Box className="left-column sensor-text-column">
              <Typography variant="body1" className="sensor-cost-text">
                Our sensors are cheap and inexpensive! Made of only 3 parts, housed in one box, that all cost just $20-30. Contact us if you wish to help fund or host one of our sensors!
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

function CommunityPartners({ triggerRef }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!triggerRef?.current) return;

    const statsObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.intersectionRatio <= 0.5) {
          setIsVisible(true);
          statsObserver.disconnect();
        }
      },
      {
        root: null,
        threshold: [0.5, 0],
        rootMargin: "0px 0px -10% 0px",
      }
    );

    statsObserver.observe(triggerRef.current);

    return () => {
      statsObserver.disconnect();
    };
  }, [triggerRef]);

  return (
    <Box ref={sectionRef} className={`partners-section ${isVisible ? 'visible' : ''}`}>
      <Typography variant="h4" className="partners-title">Our Community Partners</Typography>
      <Box className="partners-grid">
        {partners.map((p) => (
          <Box key={p.name} className="partner-card">
            <img src={p.imageSrc} alt={p.name} className="partner-logo" />
            <Typography variant="body1" className="partner-name">{p.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}