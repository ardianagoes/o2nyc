import { Box, Typography } from '@mui/material';
import React from 'react';
import AnimatedBubble from './AnimatedBubble';

const ProjectSection = ({ title, text, image, imagePosition = 'left' }) => {
  return (
    <Box className="project-section">
      <AnimatedBubble direction="up">
        <Box className="image-container">
          <img src={image} alt={title} className="project-image" />
        </Box>
      </AnimatedBubble>
      <AnimatedBubble direction="up">
        <Box className="text-content">
          <Typography variant="h2" component="h2" className="section-title">
            {title}
          </Typography>
          <Typography variant="body1" className="section-text">
            {text}
          </Typography>
        </Box>
      </AnimatedBubble>
    </Box>
  );
};

export default ProjectSection;
