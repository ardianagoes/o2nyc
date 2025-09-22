import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../comp/Navbar';
import ProjectSection from './ProjectSection';
import TypingEffect from './TypingEffect';
import AnimatedBubble from './AnimatedBubble';
import './CommunitySensorProject.css';

const sections = [
  {
    title: 'Hyperlocal Air Quality Monitoring',
    text: 'Most air quality data in NYC is citywide, leaving neighborhoods without the local insights they need. The Community Sensor Project changes that. We are deploying 125 low-cost sensors across the city, focusing on communities most impacted by pollution.',
    image: '/images/sensor.png',
    imagePosition: 'left',
  },
  {
    title: 'What We\'re Building',
    text: 'We are creating a public map where anyone can view live neighborhood-level air quality. We also host workshops where residents can assemble sensors, learn about pollution, and install them locally.',
    image: '/images/map.png',
    imagePosition: 'right',
  },
  {
    title: 'Why It Matters',
    text: 'Neighborhood data provides real-time insights where it\'s needed most. Our low-cost sensors make this technology accessible to everyone. We believe that turning data into advocacy can lead to collective action for cleaner air.',
    image: '/images/solder.png',
    imagePosition: 'left',
  },
  {
    title: 'Get Involved',
    text: 'You can host a Community Sensor in your school, business, or neighborhood. Partner with us to bring a workshop to your community, or volunteer to help expand sensor access across NYC.',
    image: '/images/volunteer1.jpg',
    imagePosition: 'right',
  },
];

const CommunitySensorProject = () => {
  return (
    <Box className="community-sensor-project-v6">
      <Navbar />
      <Box className="hero-section-v5">
        <div className="title-container-v2">
          <TypingEffect
            className="title-v2"
            text="The Community Sensor Project"
          />
          <AnimatedBubble direction="down">
            <Typography variant="body1" className="quote-v2">
              There's so much pollution in the air that if it weren't for our lungs there'd be no place to put it at all. - Robert Orben
            </Typography>
          </AnimatedBubble>
        </div>
      </Box>
      <Box className="sections-container-v2">
        {sections.map((section, index) => (
          <ProjectSection key={index} {...section} />
        ))}
      </Box>
    </Box>
  );
};

export default CommunitySensorProject;