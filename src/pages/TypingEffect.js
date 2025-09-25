import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

const TypingEffect = ({ text, className, onComplete }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    if (onComplete) {
      const totalTime = 0.1 + (letters.length * 0.08) + 1.0; 
      const timer = setTimeout(() => {
        onComplete();
      }, totalTime * 1000);

      return () => clearTimeout(timer);
    }
  }, [letters.length, onComplete]);

  return (
    <motion.div
      style={{ display: "block", textAlign: "center", width: "100%" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span 
          variants={child} 
          key={index}
          style={{ display: "inline" }}
        >
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypingEffect;
