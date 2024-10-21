"use client";
import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Tailwind-like utility for styling
const useStyles = {
  section: 'py-12 px-4 bg-gray-100',
  cardContainer: 'transform transition-transform duration-300 hover:scale-105 hover:shadow-lg',
  gridItem: 'w-full p-4',
};

// Icon styling (you can replace with @mui/icons-material icons or any SVGs)
const ServiceIcon = styled('div')({
  backgroundColor: '#3f51b5',
  color: 'white',
  borderRadius: '50%',
  padding: '10px',
  width: '60px',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '32px',
  margin: '0 auto 1rem',
});

const features = [
  { title: 'Web Development', description: 'Build modern web applications using the latest technologies.' },
  { title: 'Mobile App Development', description: 'Develop performant mobile applications for Android and iOS.' },
  { title: 'Content Writing', description: 'Deliver engaging content for websites, blogs, and social media.' },
  { title: 'API Development', description: 'Create secure and scalable APIs for your applications.' },
  { title: 'UI/UX Design', description: 'Design intuitive and user-friendly interfaces.' },
  { title: 'SEO Optimization', description: 'Enhance your online visibility with SEO services.' },
  { title: 'Cloud Integration', description: 'Integrate cloud solutions to boost efficiency.' },
  { title: 'Research Paper Writing', description: 'Get expert research paper writing services.' },
];

const FeaturesSection = () => {
  return (
    <section className={useStyles.section}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: 'center',
          marginBottom: '20px',
          fontWeight: 'bold',
          fontSize: { xs: '1.8rem', md: '2.5rem' }, // Responsive title font
        }}
      >
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <AnimatedOfferingCard
              title={feature.title}
              description={feature.description}
            />
          </Grid>
        ))}
      </Grid>

      {/* Centering the Button */}
      <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
        <Button
          variant="contained"
          color="primary"
          href="/services"
          sx={{
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.05)' },
            fontSize: { xs: '0.875rem', md: '1rem' }, // Responsive button font
            padding: { xs: '8px 16px', md: '10px 20px' },
          }}
        >
          See More Services
        </Button>
      </Box>
    </section>
  );
};

interface AnimatedOfferingCardProps {
  title: string;
  description: string;
}

const AnimatedOfferingCard: React.FC<AnimatedOfferingCardProps> = ({ title, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the card is visible
    triggerOnce: true, // Animate only the first time it comes into view
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6 }}
      className={useStyles.cardContainer}
    >
      <Card elevation={3} sx={{ padding: '20px' }}>
        <ServiceIcon>🚀</ServiceIcon>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive title font
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              fontSize: { xs: '0.85rem', md: '1rem' }, // Responsive description font
              marginTop: '10px',
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeaturesSection;
