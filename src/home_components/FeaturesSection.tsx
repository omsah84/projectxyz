"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Importing useInView

// Custom styling using Tailwind CSS
const useStyles = {
  section: 'py-16 px-4 bg-gray-100 text-center',
  cardContainer: 'max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl',
  gridItem: 'w-full p-4',
};

// Example Icons (you can use icons from @mui/icons-material or any SVGs)
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
  { title: 'Mobile App Development', description: 'Develop highly performant mobile applications for Android and iOS.' },
  { title: 'Content Writing', description: 'Deliver engaging content for websites, blogs, and social media.' },
  { title: 'API Development', description: 'Create secure and scalable APIs for your applications.' },
  { title: 'UI/UX Design', description: 'Design intuitive and user-friendly interfaces for your applications.' },
  { title: 'SEO Optimization', description: 'Enhance your online visibility with our SEO services.' },
  { title: 'Cloud Integration', description: 'Integrate cloud solutions into your business to boost efficiency.' },
  { title: 'Research Paper Writing', description: 'Get expert research paper writing services tailored to your needs.' }
];

const FeaturesSection = () => {
  return (
    <section className={useStyles.section}>
      <Typography variant="h4" component="h2" className="mb-8 font-bold text-gray-800" sx={{ textAlign: "center" }}>
        Our Services
      </Typography>
      <Grid container spacing={4} className="flex justify-center" sx={{ padding: "20px" }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} className={useStyles.gridItem} key={index}>
            <AnimatedOfferingCard
              title={feature.title}
              description={feature.description}
            />
          </Grid>
        ))}
      </Grid>

      {/* Centering the Button */}
      <Box sx={{ textAlign: 'center', mt: 1 }}>
        <Button
          variant="contained"
          color="primary"
          href="/services"
          sx={{
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.1)' },
          }}
        >
          See More Services
        </Button>
      </Box>
    </section>
  );
};

// Define the props interface
interface AnimatedOfferingCardProps {
  title: string;
  description: string;
}

const AnimatedOfferingCard: React.FC<AnimatedOfferingCardProps> = ({ title, description }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > lastScrollY) {
      setScrollDirection('down'); // Scrolling down
    } else {
      setScrollDirection('up'); // Scrolling up
    }
    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the card is visible
    triggerOnce: false, // Animate every time the card comes into view
  });

  // Define animation variants for the scroll effect
  const variants = {
    hidden: { opacity: 0, y: scrollDirection === 'down' ? 30 : -30 }, // Scroll down hides the card below
    visible: { opacity: 1, y: 0 }, // Final state (visible)
  };

  return (
    <motion.div
      ref={ref} // Attach the ref to the motion.div
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate based on visibility
      transition={{ duration: 0.5 }}
      className={useStyles.cardContainer}
    >
      <Card elevation={3}>
        <ServiceIcon>{/* You can use an icon component here */}🚀</ServiceIcon>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" component="h3" className="font-semibold text-gray-700">
            {title}
          </Typography>
          <Typography variant="body2" component="p" className="text-gray-600">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeaturesSection;
