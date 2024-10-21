import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';

// Tailwind CSS for styling
const useStyles = {
  section: 'py-16 px-4 bg-gray-50 text-center',
  gridItem: 'w-full p-4',
  button: 'mt-4 text-white hover:bg-indigo-500', // Hover effect for the button
};

// Portfolio data
const portfolioItems = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with custom-built checkout process and payment integration.',
    imageUrl: '/images/research_development_hero.jpg',
    link: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with a modern UI and real-time transaction tracking.',
    imageUrl: '/images/research_development_hero.jpg',
    link: '#',
  },
  {
    title: 'SaaS Analytics Tool',
    description: 'An advanced SaaS platform for data analytics with real-time reporting and customizable dashboards.',
    imageUrl: '/images/research_development_hero.jpg',
    link: '#',
  },
 
  {
    title: 'Freelancing Development',
    description: 'A platform for freelancing services, including development, design, and content creation.',
    imageUrl: '/images/research_development_hero.jpg',
    link: '#',
  },
  {
    title: 'API Development',
    description: 'An API development service providing secure and scalable solutions for businesses.',
    imageUrl: '/images/research_development_hero.jpg',
    link: '#',
  },
  {
    title: 'Research Paper Portal',
    description: 'A comprehensive platform for research paper writing and submission services.',
    imageUrl: '/images/research_development_hero.jpg',
    link: '#',
  },

  {
    title: 'Interior Design Website',
    description: 'A sleek website showcasing modern interior design ideas and portfolio.',
    imageUrl: '/images/research_development_hero.jpg',
    link: '#',
  },
  {
    title: 'Content Writing Service',
    description: 'High-quality content writing services for blogs, websites, and marketing materials.',
    imageUrl: '/images/research_development_hero.jpg',
    link: '#',
  },
];

const PortfolioSection = () => {
  return (
    <section className={useStyles.section}>
      <Typography variant="h4" component="h2" className="mb-8 font-bold text-gray-800" sx={{ textAlign: 'center' }}>
        Our Work
      </Typography>
      <Grid container spacing={4} className="flex justify-center" sx={{ padding: '20px' }}>
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} className={useStyles.gridItem} key={index}>
            <Card
              elevation={3}
              sx={{
                backgroundColor: 'white',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Added transition for hover effect
                '&:hover': {
                  transform: 'scale(1.05)', // Scale effect on hover
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Shadow effect on hover
                },
              }}
            >
              {/* Centering CardMedia */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <CardMedia
                  component="img"
                  alt={item.title}
                  image={item.imageUrl}
                  sx={{ height: 150, width: 'auto', maxWidth: '100%', margin: '0 auto' }} // Center and resize the image
                />
              </div>
              <CardContent className="text-center">
                <Typography
                  variant="h6"
                  component="h3"
                  className="font-semibold text-gray-700"
                  sx={{ textAlign: 'center' }} // Center align text
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className="text-gray-600 mb-4"
                  sx={{ textAlign: 'center' }} // Center align text
                >
                  {item.description}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Button
                    href={item.link}
                    variant="outlined"
                    className={useStyles.button}
                    sx={{ width: 'fit-content', margin: '0 auto' }} // Fit button width to content and center it
                  >
                    View Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* See More Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '.5rem' }}>
        <Button
          variant="contained"
          href="/services"
          className={useStyles.button}
          sx={{ width: 'fit-content' }} // Button width fits content
        >
          See More Works
        </Button>
      </div>
    </section>
  );
};

export default PortfolioSection;
