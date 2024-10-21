"use client"
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const useStyles = {
  section: 'py-16 px-4 bg-gray-100',
  heading: 'text-4xl font-bold mb-6 text-center text-gray-800',
  subheading: 'text-lg mb-4 text-center text-gray-600',
  formContainer: 'flex flex-col sm:flex-row justify-center items-center',
  input: 'flex-grow p-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-600',
  button: 'bg-indigo-600 text-white py-4 px-6 rounded-r-lg hover:bg-indigo-700 transition duration-300',
};

const NewsletterSection = () => {
  // State to store email input
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setSubmitted(false);
    } else {
      setError('');
      setSubmitted(true);
      setEmail(''); // Reset input after submission
    }
  };

  return (
    <section className={useStyles.section}>
      <Typography 
        variant="h4" 
        component="h2" 
        className={useStyles.heading} 
        sx={{ textAlign: 'center', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, fontWeight:"bold"}}
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

      {/* Form container */}
      <Box 
        className={useStyles.formContainer} 
        sx={{ 
          flexDirection: { xs: 'column', sm: 'row' }, 
          width: { xs: '100%', sm: 'auto', lg: '80%' }, 
          maxWidth: '800px',
          mx: 'auto',
        }}
        component="form"
        onSubmit={handleSubmit} // Handle form submission
      >
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          className={useStyles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email input in state
          sx={{
            height: { xs: '48px', sm: '56px' },
            borderRadius: { xs: '4px', sm: '4px 0 0 4px' },
            width: { xs: '100%', sm: 'auto', lg: '80%' },
            marginBottom: { xs: 2, sm: 0 },
          }}
        />
        <Button
          variant="contained"
          className={useStyles.button}
          type="submit" // Submit button
          sx={{
            height: { xs: '48px', sm: '56px' },
            borderRadius: { xs: '4px', sm: '0 4px 4px 0' },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          Subscribe
        </Button>
      </Box>

      {/* Show error message if email is invalid */}
      {error && (
        <Typography variant="body2" color="error" sx={{ textAlign: 'center', marginTop: 2 }}>
          {error}
        </Typography>
      )}

      {/* Show success message if form was successfully submitted */}
      {submitted && !error && (
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            marginTop: 2, 
            fontSize: { xs: '1rem', sm: '1.5rem' }, 
            color: 'green' 
          }}
        >
          You have successfully subscribed to our newsletter!
        </Typography>
      )}
    </section>
  );
};

export default NewsletterSection;
