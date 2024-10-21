import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';

// Tailwind CSS for styling
const useStyles = {
  section: 'py-16 px-4 bg-gray-100',
  gridItem: 'w-full p-4',
  card: 'bg-white shadow-lg rounded-lg overflow-hidden',
  cardMedia: {
    height: 200, // Set a fixed height for the images
    objectFit: 'contain', // Fit the image within the area while maintaining aspect ratio
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align content
    textAlign: 'center', // Center text
    padding: '24px', // Add padding for better spacing
  },
  heading: 'text-3xl font-bold mb-8 text-gray-800 text-center',
  button: 'mt-4 text-indigo-600 hover:text-indigo-800 hover:underline',
};

// Sample blog data
const blogPosts = [
  {
    title: 'The Future of AI in Web Development',
    imageUrl: '/images/research_development_hero.jpg',
    description: 'Discover how artificial intelligence is revolutionizing the web development process.',
    link: '/blog/ai-web-development',
  },
  {
    title: 'Best Practices for Responsive Design',
    imageUrl: '/images/research_development_hero.jpg',
    description: 'Learn the key strategies to ensure your website looks great on any device.',
    link: '/blog/responsive-design',
  },
  {
    title: 'Building Scalable Applications with Next.js',
    imageUrl: '/images/research_development_hero.jpg',
    description: 'A guide to developing highly scalable and efficient applications using Next.js.',
    link: '/blog/scalable-applications-nextjs',
  },
];

const BlogSection = () => {
  return (
    <section className={useStyles.section}>
      <Typography variant="h4" component="h2" className={useStyles.heading} sx={{ textAlign: 'center', fontWeight:"bold" }}>
        Recent Blog Posts
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ padding: '20px' }}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className={useStyles.gridItem}>
            <Card className={useStyles.card}  sx={{
                
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Added transition for hover effect
                '&:hover': {
                  transform: 'scale(1.05)', // Scale effect on hover
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Shadow effect on hover
                },
              }}>
              <CardMedia
                component="img"
                image={post.imageUrl}
                alt={post.title}
                sx={useStyles.cardMedia} // Apply styles from useStyles
              />
              <CardContent sx={useStyles.cardContent}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.description}
                </Typography>
                <Button className={useStyles.button} href={post.link}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default BlogSection;
