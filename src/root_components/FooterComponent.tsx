"use client";
import React from "react";
import { Box, Typography, styled, Grid, Link } from "@mui/material";

const FooterContainer = styled(Box)({
  backgroundColor: "#f5f5f5",
  padding: "20px 40px",
  borderTop: "1px solid #e0e0e0",
});

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: "15px",
  fontSize: "1.2rem", // Default for larger screens
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem", // Larger font for large screens
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem", // Smaller font size for mobile
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem", // Default for larger screens
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.1rem", // Slightly larger font for large screens
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem", // Smaller font size for mobile
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  display: "block",
  marginBottom: "10px",
  color: "#000",
  textDecoration: "none",
  fontSize: "1rem", // Default font size
  "&:hover": {
    textDecoration: "underline",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.1rem", // Larger font for large screens
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem", // Smaller font size for mobile
  },
}));

const FooterComponent: React.FC = () => {
  return (
    <FooterContainer>
      <Grid container spacing={2}>
        {/* Company Info Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#FF5722",
              fontSize: { xs: "1.5rem", sm: "2rem", lg: "2.5rem" }, // Dynamic font size
            }}
          >
            Research Hub
          </Typography>
          <FooterText>
            Empowering researchers with resources, courses, and community support for academic and freelance development.
          </FooterText>
          <FooterText sx={{ fontWeight: "bold", marginTop: "15px" }}>
            Sahu Satyam (Founder)
          </FooterText>
          <FooterText>Phone: +91 760 741 8817</FooterText>
          <FooterText>Email: support@researchhub.com</FooterText>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} sm={6} md={2}>
          <FooterHeading>Useful Links</FooterHeading>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
        </Grid>

        {/* Courses */}
        <Grid item xs={12} sm={6} md={2}>
          <FooterHeading>Our Courses</FooterHeading>
          <FooterLink href="#">Research Methodologies</FooterLink>
          <FooterLink href="#">Technical Writing</FooterLink>
          <FooterLink href="#">Freelancing 101</FooterLink>
          <FooterLink href="#">Project Management</FooterLink>
          <FooterLink href="#">Data Analysis</FooterLink>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={2}>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink href="#">Webinars</FooterLink>
          <FooterLink href="#">Online Workshops</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">FAQs</FooterLink>
          <FooterLink href="#">Community Forum</FooterLink>
        </Grid>

        {/* External Resources */}
        <Grid item xs={12} sm={6} md={2}>
          <FooterHeading>External Resources</FooterHeading>
          <FooterLink href="#">ResearchGate</FooterLink>
          <FooterLink href="#">Academia.edu</FooterLink>
          <FooterLink href="#">Google Scholar</FooterLink>
          <FooterLink href="#">Mendeley</FooterLink>
          <FooterLink href="#">PapersOwl</FooterLink>
        </Grid>
      </Grid>

      <Box mt={1} textAlign="center">
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            fontSize: { xs: "0.75rem", sm: "0.875rem", lg: "1rem" },
          }}
        >
          © 2019-2024 All Rights Reserved. Research Hub
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default FooterComponent;
