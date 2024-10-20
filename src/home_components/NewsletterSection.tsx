import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

// Tailwind CSS for styling
const useStyles = {
  section: 'py-16 px-4 bg-gray-100',
  heading: 'text-4xl font-bold mb-6 text-center text-gray-800',
  subheading: 'text-lg mb-4 text-center text-gray-600',
  formContainer: 'flex flex-col sm:flex-row justify-center',
  input: 'flex-grow p-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-600',
  button: 'bg-indigo-600 text-white py-4 px-6 rounded-r-lg hover:bg-indigo-700 transition duration-300',
};

const NewsletterSection = () => {
  return (
    <section className={useStyles.section}>
      <Typography variant="h4" component="h2" className={useStyles.heading}>
        Subscribe to Our Newsletter
      </Typography>
      <Typography variant="body1" className={useStyles.subheading}>
        Stay updated with our latest news and offerings!
      </Typography>
      <Box className={useStyles.formContainer}>
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          className={useStyles.input}
          InputProps={{
            style: { height: '56px' }, // Adjust height to match button
          }}
        />
        <Button variant="contained" className={useStyles.button}>
          Subscribe
        </Button>
      </Box>
    </section>
  );
};

export default NewsletterSection;
