import React from 'react';
import { Grid, Typography, Button, Card, CardContent } from '@mui/material';
import TeamIcon from '@mui/icons-material/People'; // Icon for Our Team
import MissionIcon from '@mui/icons-material/CheckCircle'; // Icon for Our Mission
import VisionIcon from '@mui/icons-material/Visibility'; // Icon for Our Vision

// Tailwind CSS for styling
const useStyles = {
  section: 'py-16 px-4 bg-white',
  heading: 'text-4xl font-bold mb-8 text-center text-gray-800',
  subheading: 'text-xl mb-4 text-center text-gray-400',
  text: 'mb-8 text-lg text-gray-600 text-center max-w-4xl mx-auto',
  button: 'mt-8 bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition duration-300',
  card: 'bg-white shadow-lg rounded-lg overflow-hidden mb-8 transition-transform duration-300 hover:shadow-xl hover:scale-105',
  icon: {
    fontSize: '4rem',
    marginBottom: '16px', // Add space below the icon
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align content
    textAlign: 'center', // Center text
  },
};

const AboutSection = () => {
  return (
    <section className={useStyles.section}>
     <Typography
  variant="h4"
  component="h2"
  className={useStyles.heading}
  sx={{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: { xs: '2rem', md: '2.5rem' }, // Adjust font size for small and large screens
    mb: { xs: 1, md: 1 }, // Margin bottom for responsiveness
  }}
>
  About Us
</Typography>
<Typography
  variant="h6"
  component="h3"
  className={useStyles.subheading}
  sx={{
    textAlign: 'center',
    fontSize: { xs: '1.2rem', md: '1.8rem' }, // Adjust font size for small and large screens
    mb: { xs: 1, md: 1 }, // Margin bottom for responsiveness
  }}
>
  Our Story & Mission
</Typography>
<Typography
  variant="body1"
  className={useStyles.text}
  sx={{
    textAlign: { xs: 'center', md: 'center' }, // Align left for small screens and center for larger
    mb: { xs: 2, md: 3 }, // Margin bottom adjustment
    width: { xs: '95%', sm: '85%', md: '80%' }, // Wider on small screens, centered text for large screens
    margin: '0 auto', // Center the text horizontally
    fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' }, // Gradually adjust font size from small to large screens
    lineHeight: { xs: 1.5, md: 1.75 }, // Increase line-height for better readability
    padding: { xs: '0 10px', sm: '0 15px' }, // Padding on smaller screens to add spacing from the edges
  }}
>
  We are a dedicated team of developers, designers, and strategists with a passion for crafting
  cutting-edge digital solutions. Our mission is to empower businesses by delivering
  high-quality software products tailored to meet their unique needs.
</Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mb: { xs: 4, md: 6 } }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={useStyles.card}>
            <CardContent sx={useStyles.cardContent}>
              <TeamIcon sx={useStyles.icon} />
              <Typography variant="h6" component="h4" className="font-semibold text-gray-800">
                Our Team
              </Typography>
              <Typography variant="body2" color="textSecondary">
                A diverse team of experts working together to create seamless digital experiences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={useStyles.card}>
            <CardContent sx={useStyles.cardContent}>
              <MissionIcon sx={useStyles.icon} />
              <Typography variant="h6" component="h4" className="font-semibold text-gray-800">
                Our Mission
              </Typography>
              <Typography variant="body2" color="textSecondary">
                To innovate and deliver software solutions that exceed expectations and drive business growth.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={useStyles.card}>
            <CardContent sx={useStyles.cardContent}>
              <VisionIcon sx={useStyles.icon} />
              <Typography variant="h6" component="h4" className="font-semibold text-gray-800">
                Our Vision
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We strive to be the go-to digital partner for businesses worldwide, leading innovation in technology.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Button
          href="/contact"
          variant='contained'
          className={useStyles.button}
          sx={{
            padding: '5px 25px',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Contact Us
        </Button>
      </Grid>
    </section>
  );
};

export default AboutSection;
