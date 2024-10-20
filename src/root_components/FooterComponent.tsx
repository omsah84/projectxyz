"use client";
import React from "react";
import { Box, Typography, styled, Grid, Link } from "@mui/material";

const FooterContainer = styled(Box)( {
  backgroundColor: "#f5f5f5",
  padding: "20px 40px",
  borderTop: "1px solid #e0e0e0",
});

const FooterHeading = styled(Typography)( {
  fontWeight: "bold",
  marginBottom: "15px",
});

const FooterColumn = styled(Grid)( {
  textAlign: "left",
  marginBottom: "20px",
});

const FooterLink = styled(Link)( {
  display: "block",
  marginBottom: "10px",
  color: "#000",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

// const SocialMediaIcons = styled(Box)( {
//   display: "flex",
//   gap: "10px",
//   marginTop: "15px",
// });

// const SocialIcon = styled("img")( {
//   width: "40px",
//   height: "40px",
//   cursor: "pointer",
//   "&:hover": {
//     opacity: 0.7,
//   },
// });

const FooterComponent: React.FC = () => {
  return (
    <FooterContainer>
      <Grid container spacing={4}>
        {/* Company Info Section */}
        <Grid item xs={12} sm={6} md={4}>
          <FooterColumn>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#FF5722' }}>
              Research Hub
            </Typography>
            <Typography>
              Empowering researchers with resources, courses, and community support for academic and freelance development.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', marginTop: '15px' }}>Sahu Satyam (Founder)</Typography>
            <Typography>Phone: +91 760 741 8817</Typography>
            <Typography>Email: support@researchhub.com</Typography>

            {/* <SocialMediaIcons>
              <SocialIcon src="/icons/facebook.svg" alt="Facebook" />
              <SocialIcon src="/icons/instagram.svg" alt="Instagram" />
              <SocialIcon src="/icons/twitter.svg" alt="Twitter" />
              <SocialIcon src="/icons/telegram.svg" alt="Telegram" />
            </SocialMediaIcons> */}
          </FooterColumn>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} sm={6} md={2}>
          <FooterColumn>
            <FooterHeading variant="h6">Useful Links</FooterHeading>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </FooterColumn>
        </Grid>

        {/* Courses */}
        <Grid item xs={12} sm={6} md={2}>
          <FooterColumn>
            <FooterHeading variant="h6">Our Courses</FooterHeading>
            <FooterLink href="#">Research Methodologies</FooterLink>
            <FooterLink href="#">Technical Writing</FooterLink>
            <FooterLink href="#">Freelancing 101</FooterLink>
            <FooterLink href="#">Project Management</FooterLink>
            <FooterLink href="#">Data Analysis</FooterLink>
          </FooterColumn>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={2}>
          <FooterColumn>
            <FooterHeading variant="h6">Quick Links</FooterHeading>
            <FooterLink href="#">Webinars</FooterLink>
            <FooterLink href="#">Online Workshops</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
            <FooterLink href="#">Community Forum</FooterLink>
          </FooterColumn>
        </Grid>

        {/* External Resources */}
        <Grid item xs={12} sm={6} md={2}>
          <FooterColumn>
            <FooterHeading variant="h6">External Resources</FooterHeading>
            <FooterLink href="#">ResearchGate</FooterLink>
            <FooterLink href="#">Academia.edu</FooterLink>
            <FooterLink href="#">Google Scholar</FooterLink>
            <FooterLink href="#">Mendeley</FooterLink>
            <FooterLink href="#">PapersOwl</FooterLink>
          </FooterColumn>
        </Grid>
      </Grid>

      <Box mt={1} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          © 2019-2024 All Rights Reserved. Research Hub
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default FooterComponent;
