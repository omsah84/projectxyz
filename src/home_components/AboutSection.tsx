import React from 'react';
import { Grid, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';

// Tailwind CSS for styling
const useStyles = {
  section: 'py-16 px-4 bg-white',
  heading: 'text-4xl font-bold mb-8 text-center text-gray-800',
  subheading: 'text-xl mb-4 text-center text-gray-600',
  text: 'mb-8 text-lg text-gray-600 text-center max-w-4xl mx-auto',
  button: 'mt-8 bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition duration-300',
  card: 'bg-white shadow-lg rounded-lg overflow-hidden mb-8 transition-transform duration-300 hover:shadow-xl hover:scale-105',
  cardMedia: 'h-56 w-full object-cover',
};

const AboutSection = () => {
  return (
    <section className={useStyles.section}>
      <Typography
        variant="h4"
        component="h2"
        className={useStyles.heading}
        sx={{ textAlign: 'center', mb: { xs: 1, md: 1 } }}
      >
        About Us
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        className={useStyles.subheading}
        sx={{ textAlign: 'center', mb: { xs: 1, md: 2 } }}
      >
        Our Story & Mission
      </Typography>
      <Typography
        variant="body1"
        className={useStyles.text}
        sx={{ textAlign: 'center', mb: { xs: 2, md: 3 }, px: { xs: 2, md: 6 } }}
      >
        We are a dedicated team of developers, designers, and strategists with a passion for crafting
        cutting-edge digital solutions. Our mission is to empower businesses by delivering
        high-quality software products tailored to meet their unique needs.
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mb: { xs: 4, md: 6 } }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={useStyles.card}>
            <CardMedia
              component="img"
              image="https://source.unsplash.com/random/300x200?team"
              alt="Our Team"
              className={useStyles.cardMedia}
            />
            <CardContent>
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
            <CardMedia
              component="img"
              image="https://source.unsplash.com/random/300x200?mission"
              alt="Our Mission"
              className={useStyles.cardMedia}
            />
            <CardContent>
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
            <CardMedia
              component="img"
              image="https://source.unsplash.com/random/300x200?vision"
              alt="Our Vision"
              className={useStyles.cardMedia}
            />
            <CardContent>
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
          className={useStyles.button}
          sx={{
            padding: '10px 25px',
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
