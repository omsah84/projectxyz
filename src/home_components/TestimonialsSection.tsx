import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';

// Custom styling using Tailwind CSS
const useStyles = {
  section: 'py-16 px-4 bg-white text-center',
  gridItem: 'w-full p-4',
  avatar: 'mb-4', // Removed mx-auto to allow custom centering
};

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Tech Company',
    review: 'The team provided exceptional service and delivered everything on time. Highly recommended!',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager, Creative Agency',
    review: 'Incredible work! They understood our vision and brought it to life with perfect execution.',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Mike Johnson',
    role: 'CTO, Startup Inc.',
    review: 'Their expertise in web development is top-notch. The project was smooth and efficient.',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  },
];

const TestimonialsSection = () => {
  return (
    <section className={useStyles.section}>
      <Typography
        variant="h4"
        component="h2"
        className="mb-8 font-bold text-gray-800"
        sx={{ textAlign: 'center', fontSize: { xs: '1.5rem', md: '2.5rem' }, fontWeight:"bold" }} // Responsive title font
      >
        What Our Clients Say
      </Typography>
      <Grid container spacing={4} className="flex justify-center" sx={{ padding: '10px' }}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} className={useStyles.gridItem} key={index}>
            <Card elevation={3} className="bg-gray-50 p-6 flex flex-col items-center">
              {/* Centering Avatar */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Avatar
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className={useStyles.avatar}
                  sx={{
                    width: { xs: '50px', md: '64px' }, // Responsive avatar size
                    height: { xs: '50px', md: '64px' },
                  }}
                />
              </div>
              <CardContent className="text-center">
                <Typography
                  variant="body1"
                  component="p"
                  className="italic text-gray-600 mb-4"
                  sx={{
                    fontSize: { xs: '0.875rem', md: '1rem' }, // Responsive review text size
                    textAlign: 'center',
                  }}
                >
                  &#34; {testimonial.review} &#34;
                </Typography>
                <Typography
                  variant="h6"
                  component="h3"
                  className="font-semibold text-gray-700"
                  sx={{ textAlign: 'center', fontSize: { xs: '1rem', md: '1.25rem' } }} // Responsive name font
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className="text-gray-500"
                  sx={{ textAlign: 'center', fontSize: { xs: '0.75rem', md: '1rem' } }} // Responsive role font
                >
                  {testimonial.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default TestimonialsSection;
