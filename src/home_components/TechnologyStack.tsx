import React from 'react';
import { Grid, Typography, Card, CardMedia } from '@mui/material';
// import { styled } from '@mui/system';

// Tailwind CSS for styling
const useStyles = {
  section: 'py-16 px-4 bg-gray-50 text-center',
  gridItem: 'w-full p-4',
  card: 'h-32 flex justify-center items-center bg-white shadow-lg',
  cardMedia: 'h-16 w-auto object-contain',
  heading: 'text-3xl font-bold mb-8 text-gray-800',
};

const technologyLogos = [
  { name: 'React', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Node.js', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'MongoDB', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' },
  { name: 'AWS', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Docker', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg' },
  { name: 'Python', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
];

const TechnologyStack = () => {
  return (
    <section className={useStyles.section}>
      <Typography variant="h4" component="h2" className={useStyles.heading}>
        Technology Stack We Work With
      </Typography>
      <Grid container spacing={4} className="flex justify-center">
        {technologyLogos.map((tech, index) => (
          <Grid item xs={6} sm={4} md={2} key={index} className={useStyles.gridItem}>
            <Card className={useStyles.card} elevation={3}>
              <CardMedia
                component="img"
                alt={tech.name}
                image={tech.imageUrl}
                className={useStyles.cardMedia}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default TechnologyStack;
