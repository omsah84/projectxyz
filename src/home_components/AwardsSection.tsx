import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Star, VerifiedUser, Code } from '@mui/icons-material'; // Importing icons from MUI

// Tailwind CSS-like styling
const useStyles = {
  section: 'py-16 px-4 bg-gray-50',
  heading: 'text-4xl font-bold mb-8 text-center text-gray-800',
  subheading: 'text-lg mb-8 text-center text-gray-600',
  awardBox: 'flex flex-col items-center justify-center bg-white rounded-lg m-4 transition-transform duration-300 hover:scale-105', // Basic shadow
  awardTitle: 'text-xl font-semibold text-indigo-600 mb-2',
  awardDescription: 'text-center text-gray-600',
};

const AwardsSection = () => {
  return (
    <section className={useStyles.section}>
      <Typography
        variant="h4"
        component="h2"
        className={useStyles.heading}
        sx={{
          marginBottom: { xs: 1, md: 1 },
          fontSize: { xs: '2rem', md: '2.5rem' },
          textAlign: 'center',
          fontWeight: "bold"
        }}
      >
        Awards & Certifications
      </Typography>
      <Typography
        variant="body1"
        className={useStyles.subheading}
        sx={{
          marginBottom: { xs: 2, md: 4 },
          fontSize: { xs: '1rem', md: '1.25rem' },
          textAlign: 'center'
        }}
      >
        Recognizing our commitment to excellence
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {[
          {
            icon: <Star sx={{ fontSize: 60, color: 'indigo.600' }} />,
            title: 'Best Startup 2023',
            description: 'Recognized for innovation and exceptional performance in the industry.',
          },
          {
            icon: <VerifiedUser sx={{ fontSize: 60, color: 'indigo.600' }} />,
            title: 'ISO 9001 Certified',
            description: 'Certified for quality management systems and consistent delivery of quality services.',
          },
          {
            icon: <Code sx={{ fontSize: 60, color: 'indigo.600' }} />,
            title: 'Top Developer 2022',
            description: 'Awarded for excellence in software development and client satisfaction.',
          },
        ].map((award, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              className={useStyles.awardBox}
              sx={{
                textAlign: 'center',
                padding: { xs: '20px', md: '30px' }, // Added padding for better spacing
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Attractive shadow
                transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition
                '&:hover': {
                  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)', // Shadow on hover
                },
              }}
            >
              {award.icon}
              <Typography className={useStyles.awardTitle} sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                {award.title}
              </Typography>
              <Typography className={useStyles.awardDescription} sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                {award.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default AwardsSection;
