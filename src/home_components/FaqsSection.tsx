"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Styled components for the FAQs Section
const FaqsContainer = styled(Box)(({ theme }) => ({
  margin:"auto",
  padding: "40px 20px",
  backgroundColor: "#f9f9f9",
  maxWidth: "85%",
  borderRadius: "8px", // Add rounded corners
  // boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
  [theme.breakpoints.up("md")]: {
    padding: "30px 30px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "30px 60px",
  },
}));

const FaqsHeading = styled(Typography)(({ theme }) => ({
  marginBottom: "20px",
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.h4.fontWeight,
  color: "#333", // Darker color for better contrast
  textAlign: "center",
}));

const FaqsSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const faqsData = [
    {
      question: "What courses do you offer?",
      answer: "We offer a diverse range of courses including research methodology, data analysis, freelancing strategies, web development, and programming languages like Python.",
    },
    {
      question: "How long do the courses take?",
      answer: "Course durations vary based on content depth, but most of our courses last between 3 to 6 weeks.",
    },
    {
      question: "Is there a certification upon completion?",
      answer: "Yes, upon successfully completing a course, students receive a certificate.",
    },
    {
      question: "Can I access the courses from anywhere?",
      answer: "Absolutely! Our courses are accessible online, meaning you can learn from anywhere with an internet connection.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods to make the enrollment process convenient.",
    },
    {
      question: "Do you provide support for course materials?",
      answer: "Yes, we offer comprehensive support and resources for all enrolled students.",
    },
    {
      question: "Are the courses self-paced?",
      answer: "Most of our courses are designed to be self-paced.",
    },
    {
      question: "What topics are covered in the freelancing course?",
      answer: "The freelancing course covers essential skills such as proposal writing, client management, and portfolio building.",
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes, we provide discounts for group enrollments.",
    },
    {
      question: "Can I get a refund if I am not satisfied with the course?",
      answer: "Yes, we have a refund policy that allows you to request a full refund within 14 days of enrollment.",
    },
    {
      question: "How do I get in touch with customer support?",
      answer: "You can reach our customer support team through our website's contact form or via email.",
    },
    {
      question: "What are the prerequisites for the courses?",
      answer: "While most courses are open to everyone, some may have prerequisites based on the content level.",
    },
    {
      question: "Can I take multiple courses at once?",
      answer: "Yes, you can enroll in multiple courses simultaneously.",
    },
    {
      question: "What resources are provided with the courses?",
      answer: "Each course comes with various resources, including video lectures, downloadable materials, and access to a community forum.",
    },
  ];

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <FaqsContainer>
      <FaqsHeading>Frequently Asked Questions</FaqsHeading>
      {faqsData.slice(0, showMore ? faqsData.length : 5).map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            marginBottom: "10px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            "&:before": {
              display: "none", // Remove default border
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#3f51b5" }} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              backgroundColor: "#e0e7ff", // Light blue background for header
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#d1d5db" }, // Darker on hover
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#fafafa",
              borderRadius: "0 0 8px 8px",
              padding: "16px",
            }}
          >
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Button
        onClick={handleShowMore}
        variant="contained"
        sx={{
          marginTop: "20px",
          backgroundColor: "#3f51b5",
          color: "white",
          "&:hover": { backgroundColor: "#303f9f" },
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        {showMore ? "Show Less" : "Show All"}
      </Button>
    </FaqsContainer>
  );
};

export default FaqsSection;
