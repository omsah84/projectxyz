import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

// Tailwind CSS for styling
const useStyles = {
  section: 'py-16 px-4 bg-gray-50',
  heading: 'text-4xl font-bold mb-8 text-center text-gray-800',
  subheading: 'text-lg mb-4 text-center text-gray-600',
  awardBox: 'flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 m-4',
  awardImage: 'h-24 mb-4', // Adjust height as necessary
  awardTitle: 'text-xl font-semibold text-indigo-600',
  awardDescription: 'text-center text-gray-600',
};

const AwardsSection = () => {
  return (
    <section className={useStyles.section}>
      <Typography variant="h4" component="h2" className={useStyles.heading}>
        Awards & Certifications
      </Typography>
      <Typography variant="body1" className={useStyles.subheading}>
        Recognizing our commitment to excellence
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box className={useStyles.awardBox}>
            <img src="https://source.unsplash.com/random/100x100?award" alt="Award 1" className={useStyles.awardImage} />
            <Typography className={useStyles.awardTitle}>Best Startup 2023</Typography>
            <Typography className={useStyles.awardDescription}>
              Recognized for innovation and exceptional performance in the industry.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box className={useStyles.awardBox}>
            <img src="https://source.unsplash.com/random/100x100?certificate" alt="Certification 1" className={useStyles.awardImage} />
            <Typography className={useStyles.awardTitle}>ISO 9001 Certified</Typography>
            <Typography className={useStyles.awardDescription}>
              Certified for quality management systems and consistent delivery of quality services.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box className={useStyles.awardBox}>
            <img src="https://source.unsplash.com/random/100x100?medal" alt="Award 2" className={useStyles.awardImage} />
            <Typography className={useStyles.awardTitle}>Top Developer 2022</Typography>
            <Typography className={useStyles.awardDescription}>
              Awarded for excellence in software development and client satisfaction.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default AwardsSection;
