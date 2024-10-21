/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Box, Typography, styled, Button, Stack } from "@mui/material";

// Styling the components using the styled utility
const HighlightedText = styled(Box)({
    backgroundColor: "#00C853", // Vibrant green
    padding: "0 10px",
    borderRadius: "5px",
});

const HeroContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "40px 15px", // Adjusted padding for small screens
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        padding: "70px 20px", // Regular padding for larger screens
    },
    [theme.breakpoints.down("sm")]: {
        padding: "80px 15px", // Regular padding for larger screens
    },
}));

const HeroContent = styled(Box)(({ theme }) => ({
    textAlign: "center", // Centering text on small screens
    maxWidth: "600px",
    marginBottom: "20px", // Small margin for mobile
    [theme.breakpoints.up("md")]: {
        textAlign: "left", // Aligning text to the left for larger screens
        marginBottom: "0",
    },
}));

const CallToActionButtons = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    gap: "20px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
        justifyContent: "center", // Center buttons on small screens
        gap: "10px", // Reduce gap for small screens
    },
}));

const ResponsiveButton = styled(Button)(({ theme }) => ({
    height: "60px",
    flexGrow: 1, // Allow buttons to grow equally
    minWidth: "150px", // Set a minimum width for the buttons
    [theme.breakpoints.down("sm")]: {
        minWidth: "120px", // Adjust minimum width for smaller screens
        fontSize: "12px", // Slightly larger font size
        height: "45px",
    },
}));

const HeroImage = styled("img")(({ theme }) => ({
    maxWidth: "100%",
    height: "auto",
    [theme.breakpoints.up("md")]: {
        maxWidth: "400px", // Regular size on larger screens
    },
    [theme.breakpoints.down("sm")]: {
        maxWidth: "300px", // Smaller image on small screens
        marginTop: "20px", // Add space between image and text
    },
}));

const HeroSectionComponent: React.FC = () => {
    return (
        <HeroContainer>
            <HeroContent>
                {/* Heading Text */}
                <Typography 
                    variant="h4" 
                    component="h1" 
                    gutterBottom 
                    sx={{ 
                        fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' }, 
                        fontWeight: "bold", 
                        textAlign: { xs: 'center', md: 'left' } // Center on small devices
                    }}
                >
                    Unlock Your <HighlightedText>Potential in </HighlightedText>
                    <Typewriter
                        words={[' Research & Development', ' Software Solutions', ' Freelance Services', ' AI Innovation', ' Full-Stack Development']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </Typography>

                {/* Subheading */}
                <Typography 
                    variant="body1" 
                    color="textSecondary"
                    sx={{ 
                        fontSize: { xs: '1rem', sm: '1.25rem' }, // Adjust font size for smaller screens
                        marginTop: '10px', 
                        marginBottom: '20px', 
                        textAlign: { xs: 'center', md: 'left' }
                    }}
                >
                    From groundbreaking research to innovative solutions, we help you excel in writing, freelancing, and development projects.
                </Typography>

                {/* Call to Action Buttons */}
                <CallToActionButtons>
                    <ResponsiveButton variant="contained" color="primary">
                        Explore Our Services
                    </ResponsiveButton>
                    <ResponsiveButton variant="outlined" color="secondary">
                        Start a Project
                    </ResponsiveButton>
                </CallToActionButtons>
            </HeroContent>

            {/* Hero Image */}
            <HeroImage src="/images/research_development_hero.jpg" alt="Research & Development" />
        </HeroContainer>
    );
};

export default HeroSectionComponent;
