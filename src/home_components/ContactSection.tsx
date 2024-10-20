"use client";
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  styled,
  
} from "@mui/material";

// Styled components for the Contact Section
const ContactContainer = styled(Box)(({ theme }) => ({
  padding: "40px 20px",
  backgroundColor: "#f9f9f9",
  [theme.breakpoints.up("md")]: {
    padding: "30px 30px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "30px 60px",
  },
}));

const ContactHeading = styled(Typography)({
  marginBottom: "20px",
  textAlign: "center",
});

const ContactForm = styled("form")(({ theme }) => ({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: theme.shadows[3],
}));

const MapContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "300px", // Set a height for the map
  overflow: "hidden",
  borderRadius: "8px", // Rounded corners
  marginTop: "20px", // Add some space above the map
  "& iframe": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
});

const ContactSection: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <ContactContainer>
      <ContactHeading variant="h4">Contact Us</ContactHeading>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} md={6}>
          <ContactForm onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              margin="normal"
              required
              type="email"
            />
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </ContactForm>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1">Email: support@example.com</Typography>
            <Typography variant="body1">Phone: +123 456 7890</Typography>
            <Typography variant="body1">
              Address: 123 Main St, City, Country
            </Typography>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509346!2d144.95373631565828!3d-37.81720997975135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11bb99%3A0x5045675218ceed0!2s123%20Main%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1634168204560!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </MapContainer>
          </Box>
        </Grid>
      </Grid>
    </ContactContainer>
  );
};

export default ContactSection;
