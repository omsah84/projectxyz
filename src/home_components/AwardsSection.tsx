import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';

// Tailwind CSS-like styling
const useStyles = {
  section: 'py-16 px-4 bg-gray-50',
  heading: 'text-4xl font-bold mb-8 text-center text-gray-800',
  subheading: 'text-lg mb-8 text-center text-gray-600',
  awardBox: 'flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 m-4',
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
        sx={{ marginBottom: { xs: 2, md: 1 }, fontSize: { xs: '2rem', md: '2.5rem' } }}
      >
        Awards & Certifications
      </Typography>
      <Typography
        variant="body1"
        className={useStyles.subheading}
        sx={{ marginBottom: { xs: 1, md: 2 }, fontSize: { xs: '1rem', md: '1.25rem' } }}
      >
        Recognizing our commitment to excellence
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box className={useStyles.awardBox} sx={{ padding: '24px', textAlign: 'center' }}>
            <Image
              src="/images/person-working-office.jpg"
              alt="Award 1"
              width={100}
              height={100}
              className="rounded-full" // Rounded image using Tailwind
            />
            <Typography className={useStyles.awardTitle} sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
              Best Startup 2023
            </Typography>
            <Typography className={useStyles.awardDescription} sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Recognized for innovation and exceptional performance in the industry.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box className={useStyles.awardBox} sx={{ padding: '24px', textAlign: 'center' }}>
            <Image
              src="/images/person-working-office.jpg"
              alt="Certification 1"
              width={100}
              height={100}
              className="rounded-full"
            />
            <Typography className={useStyles.awardTitle} sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
              ISO 9001 Certified
            </Typography>
            <Typography className={useStyles.awardDescription} sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Certified for quality management systems and consistent delivery of quality services.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box className={useStyles.awardBox} sx={{ padding: '24px', textAlign: 'center' }}>
            <Image
             src="/images/person-working-office.jpg"
              alt="Award 2"
              width={100}
              height={100}
              className="rounded-full"
            />
            <Typography className={useStyles.awardTitle} sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
              Top Developer 2022
            </Typography>
            <Typography className={useStyles.awardDescription} sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Awarded for excellence in software development and client satisfaction.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default AwardsSection;
