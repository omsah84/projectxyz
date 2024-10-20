import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
// import { styled } from '@mui/system';

// Tailwind CSS for styling
const useStyles = {
  section: 'py-16 px-4 bg-gray-50 text-center',
  gridItem: 'w-full p-4',
  cardMedia: 'h-48 w-full object-cover',
  button: 'mt-4 bg-indigo-600 text-white hover:bg-indigo-500',
};

// Portfolio data
const portfolioItems = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with custom-built checkout process and payment integration.',
    imageUrl: 'https://source.unsplash.com/random?ecommerce',
    link: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with a modern UI and real-time transaction tracking.',
    imageUrl: 'https://source.unsplash.com/random?banking',
    link: '#',
  },
  {
    title: 'SaaS Analytics Tool',
    description: 'An advanced SaaS platform for data analytics with real-time reporting and customizable dashboards.',
    imageUrl: 'https://source.unsplash.com/random?analytics',
    link: '#',
  },
];

const PortfolioSection = () => {
  return (
    <section className={useStyles.section} >
      <Typography variant="h4" component="h2" className="mb-8 font-bold text-gray-800" sx={{textAlign:"center"}}>
        Our Work
      </Typography>
      <Grid container spacing={4} className="flex justify-center" sx={{padding:"20px"}}>
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} className={useStyles.gridItem} key={index}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                alt={item.title}
                image={item.imageUrl}
                className={useStyles.cardMedia}
              />
              <CardContent>
                <Typography variant="h6" component="h3" className="font-semibold text-gray-700">
                  {item.title}
                </Typography>
                <Typography variant="body2" component="p" className="text-gray-600 mb-4">
                  {item.description}
                </Typography>
                <Button href={item.link} variant="contained" className={useStyles.button}>
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default PortfolioSection;
