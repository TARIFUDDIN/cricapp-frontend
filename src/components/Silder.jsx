import React from 'react';
import { motion } from 'framer-motion';
import { Box, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const images = [
  'path/to/cricket1.jpg',
  'path/to/cricket2.jpg',
  'path/to/cricket3.jpg'
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <motion.img
        src={images[currentIndex]}
        alt="Cricket"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <IconButton
        onClick={prevSlide}
        sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', color: 'white' }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', color: 'white' }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Slider;
