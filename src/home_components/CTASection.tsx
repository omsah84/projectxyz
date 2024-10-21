import React from 'react';
import { Button, Typography, Grid } from '@mui/material';

// Tailwind CSS styling
const useStyles = {
  section: 'py-16 px-4 bg-indigo-400 text-white text-center',
  button: 'mt-8 bg-white text-indigo-600 hover:bg-gray-100',
};

const CTASection = () => {
  return (
    <section className={useStyles.section}>
      <Grid 
        container 
        gap={1} 
        justifyContent="center" 
        alignItems="center" 
        direction="column"
        sx={{ padding: { xs: '10px', sm: '10px' }, textAlign: 'center' }} // Increased padding for small screens
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: { xs: '1.5rem', sm: '2.25rem', md: '3rem' }, // Adjusted responsive font size
            fontWeight: 'bold',
            marginBottom: { xs: '3px', sm: '5px' }, // Adjusted margin for small screens
          }}
        >
          Ready to Start Your Project?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.875rem', sm: '1.125rem' }, // Smaller font size for small screens
            marginBottom: { xs: '15px', sm: '10px' }, // Adjusted margin for small screens
          }}
        >
          Get in touch with us today and let&apos;s build something amazing together.
        </Typography>
        <Button
          variant="contained"
          className={useStyles.button}
          href="/contact"
          sx={{
            padding: '10px 24px',
            fontSize: { xs: '0.75rem', sm: '1rem' }, // Button text size responsiveness
            borderRadius: '20px', // Added border radius for a softer button look
          }}
        >
          Contact Us Now
        </Button>
      </Grid>
    </section>
  );
};

export default CTASection;
