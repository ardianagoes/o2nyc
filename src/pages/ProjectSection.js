import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import AnimatedBubble from './AnimatedBubble';

const ProjectSection = ({ title, text, image, imagePosition = 'left' }) => {
  const imageFirst = imagePosition === 'left';

  return (
    <Box className="project-section">
      <Grid container spacing={4} alignItems="center">
        {imageFirst && (
          <Grid item xs={12} md={6}>
            <AnimatedBubble direction="left">
              <img src={image} alt={title} style={{ width: '100%', borderRadius: '15px' }} />
            </AnimatedBubble>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <AnimatedBubble direction={imageFirst ? 'right' : 'left'}>
            <Box className="text-content">
              <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body1" fontSize="1.2rem">
                {text}
              </Typography>
            </Box>
          </AnimatedBubble>
        </Grid>
        {!imageFirst && (
          <Grid item xs={12} md={6}>
            <AnimatedBubble direction="right">
              <img src={image} alt={title} style={{ width: '100%', borderRadius: '15px' }} />
            </AnimatedBubble>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ProjectSection;
