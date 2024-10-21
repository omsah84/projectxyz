import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Button, Box } from '@mui/material';

// Tailwind-like utility for styling
const useStyles = {
  section: 'py-12 px-4 bg-gray-100',
  cardContainer: 'transform transition-transform duration-300 hover:scale-105 hover:shadow-lg',
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
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: 'center',
          marginBottom: '20px',
          fontWeight: 'bold',
          fontSize: { xs: '1.8rem', md: '2.5rem' }, // Responsive title font
        }}
      >
        Our Work
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={5} lg={4} xl={3}  key={index}>
            <Card
              elevation={3}
              sx={{
                padding: '10px',
                height: { xs: 350, md: 400 },
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {/* Centering CardMedia */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <CardMedia
                  component="img"
                  alt={item.title}
                  image={item.imageUrl}
                  sx={{
                    height: { xs: 170, md: 150 },
                    width: 'auto',
                    maxWidth: '100%',
                    margin: '0 auto',
                  }}
                />
              </div>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive title font
                    fontWeight: 'bold',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    fontSize: { xs: '0.85rem', md: '1rem' }, // Responsive description font
                    marginTop: '10px',
                  }}
                >
                  {item.description}
                </Typography>
                <Box sx={{ textAlign: 'center', marginTop: '15px' }}>
                  <Button
                    href={item.link}
                    variant="outlined"
                    className={useStyles.button}
                    sx={{
                      fontSize: { xs: '0.75rem', md: '1rem' },
                      padding: { xs: '6px 12px', md: '8px 16px' },
                    }}
                  >
                    View Case Study
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Centering the Button for More Works */}
      <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
        <Button
          variant="contained"
          color="primary"
          href="/services"
          sx={{
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.05)' },
            fontSize: { xs: '0.875rem', md: '1rem' }, // Responsive button font
            padding: { xs: '8px 16px', md: '10px 20px' },
          }}
        >
          See More Works
        </Button>
      </Box>
    </section>
  );
};

export default PortfolioSection;
