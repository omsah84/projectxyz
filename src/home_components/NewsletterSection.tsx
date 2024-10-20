import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const useStyles = {
  section: 'py-16 px-4 bg-gray-100',
  heading: 'text-4xl font-bold mb-6 text-center text-gray-800',
  subheading: 'text-lg mb-4 text-center text-gray-600',
  formContainer: 'flex flex-col sm:flex-row justify-center items-center', // Centering
  input: 'flex-grow p-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-600',
  button: 'bg-indigo-600 text-white py-4 px-6 rounded-r-lg hover:bg-indigo-700 transition duration-300',
};

const NewsletterSection = () => {
  return (
    <section className={useStyles.section}>
      <Typography 
        variant="h4" 
        component="h2" 
        className={useStyles.heading} 
        sx={{ textAlign: 'center', fontSize: { xs: '2rem', md: '2.5rem' } }}
      >
        Subscribe to Our Newsletter
      </Typography>
      <Typography 
        variant="body1" 
        className={useStyles.subheading} 
        sx={{ textAlign: 'center', marginBottom: { xs: 1, md: 2 } }}
      >
        Stay updated with our latest news and offerings!
      </Typography>
      <Box 
        className={useStyles.formContainer} 
        sx={{ 
          flexDirection: { xs: 'column', sm: 'row' }, 
          width: { xs: '100%', sm: 'auto', lg: '80%' }, // Adjust width on larger screens
          maxWidth: '800px', // Limit the maximum width
          mx: 'auto' // Center the form container
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          className={useStyles.input}
          sx={{
            height: '56px', // Ensuring the same height for input
            borderRadius: { xs: '4px', sm: '4px 0 0 4px' }, // Rounded corners only on the left
            width: { xs: '100%', sm: 'auto', lg: '80%' }, // Full width on small screens, larger width on large screens
            marginBottom: { xs: 2, sm: 0 }, // Space for small screens
          }}
        />
        <Button
          variant="contained"
          className={useStyles.button}
          sx={{
            height: '56px', // Same height as input
            borderRadius: { xs: '4px', sm: '0 4px 4px 0' }, // Rounded corners on the right
            width: { xs: '100%', sm: 'auto' }, // Full width on small screens
          }}
        >
          Subscribe
        </Button>
      </Box>
    </section>
  );
};

export default NewsletterSection;
