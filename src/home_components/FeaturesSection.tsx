"use client";
import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

// Custom styling using Tailwind CSS
const useStyles = {
  section: 'py-16 px-4 bg-gray-100 text-center',
  cardContainer: 'max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl',
  icon: 'w-16 h-16 mb-4 mx-auto text-indigo-500',
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
            <Card className={useStyles.cardContainer} elevation={3} sx={{ transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.1)' }}}>
              <ServiceIcon>{/* You can use an icon component here */}🚀</ServiceIcon>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" component="h3" className="font-semibold text-gray-700">
                  {feature.title}
                </Typography>
                <Typography variant="body2" component="p" className="text-gray-600">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
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

export default FeaturesSection;
