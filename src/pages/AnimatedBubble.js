import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Box } from '@mui/material';

const AnimatedBubble = ({ children, direction = 'left' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      className={`bubble ${direction} ${inView ? 'visible' : ''}`}
    >
      {children}
    </Box>
  );
};

export default AnimatedBubble;
