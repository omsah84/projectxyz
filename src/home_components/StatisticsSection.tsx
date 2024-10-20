"use client"
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import CountUp from 'react-countup'; // Import CountUp for running counter

// Tailwind CSS for styling
const useStyles = {
  section: 'py-16 px-4 bg-gray-50',
  heading: 'text-4xl font-bold mb-8 text-center text-gray-800',
  statBox: 'bg-white shadow-lg rounded-lg p-6 text-center',
  statNumber: 'text-5xl font-bold text-indigo-600',
  statLabel: 'text-lg text-gray-600 mt-2',
};

const StatisticsSection = () => {
  return (
    <section className={useStyles.section}>
      <Typography
        variant="h4"
        component="h2"
        className={useStyles.heading}
        sx={{ textAlign: 'center', marginBottom: { xs: 1, md: 2 }, fontSize: { xs: '2rem', md: '2.5rem' } }}
      >
        Our Achievements in Numbers
      </Typography>
      <Grid container spacing={0} justifyContent="center"> {/* Removed spacing */}
        <Grid item xs={12} sm={6} md={3}>
          <Box className={useStyles.statBox} sx={{ p: 4, textAlign: 'center', margin: 0 }}> {/* No margin */}
            <Typography className={useStyles.statNumber} sx={{ fontSize: { xs: '3rem', md: '4rem' } }}>
              <CountUp end={120} duration={3} suffix="+" /> {/* Running counter */}
            </Typography>
            <Typography className={useStyles.statLabel} sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
              Projects Completed
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className={useStyles.statBox} sx={{ p: 4, textAlign: 'center', margin: 0 }}>
            <Typography className={useStyles.statNumber} sx={{ fontSize: { xs: '3rem', md: '4rem' } }}>
              <CountUp end={50} duration={3} suffix="+" />
            </Typography>
            <Typography className={useStyles.statLabel} sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
              Happy Clients
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className={useStyles.statBox} sx={{ p: 4, textAlign: 'center', margin: 0 }}>
            <Typography className={useStyles.statNumber} sx={{ fontSize: { xs: '3rem', md: '4rem' } }}>
              <CountUp end={5} duration={3} suffix="+" />
            </Typography>
            <Typography className={useStyles.statLabel} sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
              Years in Business
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className={useStyles.statBox} sx={{ p: 4, textAlign: 'center', margin: 0 }}>
            <Typography className={useStyles.statNumber} sx={{ fontSize: { xs: '3rem', md: '4rem' } }}>
              <CountUp end={10} duration={3} suffix="+" />
            </Typography>
            <Typography className={useStyles.statLabel} sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
              Countries Served
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default StatisticsSection;
