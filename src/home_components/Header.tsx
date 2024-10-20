"use client";
import Slider from "react-slick";
import React from "react";
import { Box, styled, Typography } from "@mui/material";

// Styled components using Material-UI's styled utility
const SliderContainer = styled('div')({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
});

const Slide = styled('div')({
  position: 'relative',
  display: 'flex', // Flexbox to center content
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
  height: '500px', // Set a consistent height for each slide
});

const SlideImage = styled('img')({
  width: '100%', // Make images responsive
  height: '100%', // Fill the height of the slide
  objectFit: 'cover', // Cover the entire area while maintaining aspect ratio
  display: 'block', // Remove extra space below the image
});

const Content = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Background for readability
  padding: '10px',
  borderRadius: '5px',
});

// List of images with corresponding content
const slides = [
  { 
    src: "/images/person-working-office.jpg", 
    alt: "Image 1", 
    content: "Content for Image 1"
  },
  { 
    src: "/images/891.jpg", 
    alt: "Image 2", 
    content: "Content for Image 2"
  },
  { 
    src: "/images/19344.jpg", 
    alt: "Image 3", 
    content: "Content for Image 3"
  },
  { 
    src: "/images/29479.jpg", 
    alt: "Image 4", 
    content: "Content for Image 4"
  },
  { 
    src: "/images/project_delivery_13.jpg", 
    alt: "Image 5", 
    content: "Content for Image 5"
  },
];

const Header: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <SlideImage src={slide.src} alt={slide.alt} />
            <Content>
              <Typography variant="h4">{slide.content}</Typography>
            </Content>
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default Header;
