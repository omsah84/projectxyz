import React from 'react';
import { Button, Typography, Grid } from '@mui/material';
// import { styled } from '@mui/system';

// Tailwind CSS styling
const useStyles = {
  section: 'py-16 px-4 bg-indigo-600 text-white text-center',
  button: 'mt-8 bg-white text-indigo-600 hover:bg-gray-100',
  heading: 'text-3xl font-bold mb-4',
  subheading: 'text-lg mb-6',
};

const CTASection = () => {
  return (
    <section className={useStyles.section} >
      <Grid container gap={1} justifyContent="center" alignItems="center" direction="column" >
        <Typography variant="h3" component="h2" className={useStyles.heading}>
          Ready to Start Your Project?
        </Typography>
        <Typography variant="body1" className={useStyles.subheading}>
          Get in touch with us today and let&apos;s build something amazing together.
        </Typography>
        <Button variant="contained" className={useStyles.button} href="/contact">
          Contact Us Now
        </Button>
      </Grid>
    </section>
  );
};

export default CTASection;
