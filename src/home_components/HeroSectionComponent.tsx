/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Box, Typography, styled, Button, Stack } from "@mui/material";


// Styling the components using the styled utility
const HighlightedText = styled(Box)({
    backgroundColor: "#00C853", // Changed to a vibrant green
    padding: "0 10px",
    borderRadius: "5px",
});

const HeroContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "50px 20px",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
    },
}));

const HeroContent = styled(Box)(({ theme }) => ({
    textAlign: "left",
    maxWidth: "600px",
    marginBottom: "0px",
    [theme.breakpoints.up("md")]: {
        marginBottom: "0",
    },
}));

const CallToActionButtons = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    gap: "20px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start", // Align buttons to the start
    },
}));

const ResponsiveButton = styled(Button)(({ theme }) => ({
    height: "60px",
    flexGrow: 1, // Allow buttons to grow equally
    minWidth: "150px", // Set a minimum width for the buttons
    [theme.breakpoints.down("sm")]: {
        minWidth: "120px", // Adjust minimum width for smaller screens
        fontSize: "10px",
        height: "45px",
    },
}));

const HeroImage = styled("img")(({ theme }) => ({
    maxWidth: "100%",
    height: "auto",
    [theme.breakpoints.up("md")]: {
        maxWidth: "400px",
    },
}));

const HeroSectionComponent: React.FC = () => {
    return (
        <HeroContainer>
            <HeroContent>
                {/* Heading Text */}
                <Typography variant="h3" component="h1" gutterBottom>
                    Unlock Your <HighlightedText>Potential</HighlightedText> in Research & Development
                </Typography>

                {/* Subheading */}
                <Typography variant="body1" color="textSecondary">
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
