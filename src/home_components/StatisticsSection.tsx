import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

// Tailwind CSS for styling
const useStyles = {
  section: 'py-16 px-4 bg-gray-50',
  heading: 'text-4xl font-bold mb-8 text-center text-gray-800',
  statBox: 'bg-white shadow-lg rounded-lg p-6 m-4 text-center',
  statNumber: 'text-5xl font-bold text-indigo-600',
  statLabel: 'text-lg text-gray-600 mt-2',
};

const StatisticsSection = () => {
  return (
    <section className={useStyles.section}>
      <Typography variant="h4" component="h2" className={useStyles.heading}>
        Our Achievements in Numbers
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Box className={useStyles.statBox}>
            <Typography className={useStyles.statNumber}>120+</Typography>
            <Typography className={useStyles.statLabel}>Projects Completed</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className={useStyles.statBox}>
            <Typography className={useStyles.statNumber}>50+</Typography>
            <Typography className={useStyles.statLabel}>Happy Clients</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className={useStyles.statBox}>
            <Typography className={useStyles.statNumber}>5+</Typography>
            <Typography className={useStyles.statLabel}>Years in Business</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className={useStyles.statBox}>
            <Typography className={useStyles.statNumber}>10+</Typography>
            <Typography className={useStyles.statLabel}>Countries Served</Typography>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default StatisticsSection;
