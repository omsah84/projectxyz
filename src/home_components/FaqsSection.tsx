"use client";
import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, styled, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Styled components for the FAQs Section
const FaqsContainer = styled(Box)(({ theme }) => ({
  padding: "40px 20px",
  backgroundColor: "#f9f9f9",
  [theme.breakpoints.up('md')]: { // Padding for medium and larger screens
    padding: "30px 30px", // Increased padding for larger screens
  },
  [theme.breakpoints.up('lg')]: { // Optional: further increase for larger screens
    padding: "30px 60px", // Further increased padding for large screens
  },
}));

const FaqsHeading = styled(Typography)({
  marginBottom: "20px",
});

const FaqsSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  
  const faqsData = [
    {
      question: "What courses do you offer?",
      answer: "We offer a diverse range of courses including research methodology, data analysis, freelancing strategies, web development, and programming languages like Python. Each course is designed to provide you with the skills needed to excel in today's competitive environment.",
    },
    {
      question: "How long do the courses take?",
      answer: "Course durations vary based on content depth, but most of our courses last between 3 to 6 weeks. Each course is structured with flexible learning modules, allowing you to progress at your own pace while meeting the completion timeline.",
    },
    {
      question: "Is there a certification upon completion?",
      answer: "Yes, upon successfully completing a course, students receive a certificate. This certificate can be a valuable addition to your resume, showcasing your new skills to potential employers or clients.",
    },
    {
      question: "Can I access the courses from anywhere?",
      answer: "Absolutely! Our courses are accessible online, meaning you can learn from anywhere with an internet connection. This flexibility allows you to fit learning into your busy schedule, whether at home, work, or while traveling.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods to make the enrollment process convenient. This includes credit and debit cards, as well as popular online payment platforms like PayPal. You can choose the option that best suits you during the checkout process.",
    },
    {
      question: "Do you provide support for course materials?",
      answer: "Yes, we offer comprehensive support and resources for all enrolled students. Our dedicated support team is available to answer your questions, and we also provide access to additional materials, forums, and study groups to enhance your learning experience.",
    },
    {
      question: "Are the courses self-paced?",
      answer: "Most of our courses are designed to be self-paced. This means you can start and complete the course whenever it suits you. However, some courses may have scheduled live sessions or deadlines for assignments to keep you engaged.",
    },
    {
      question: "What topics are covered in the freelancing course?",
      answer: "The freelancing course covers essential skills such as proposal writing, client management, time management, pricing strategies, and portfolio building. You'll learn how to effectively market your services and attract clients in a competitive freelancing landscape.",
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes, we provide discounts for group enrollments to encourage collaborative learning. If you're interested in enrolling multiple participants, please contact us for details on pricing and available packages.",
    },
    {
      question: "Can I get a refund if I am not satisfied with the course?",
      answer: "Yes, we have a refund policy that allows you to request a full refund within 14 days of enrollment if you are not satisfied with the course content. We believe in the quality of our offerings and want to ensure you have a positive learning experience.",
    },
    {
      question: "How do I get in touch with customer support?",
      answer: "You can easily reach our customer support team through our website's contact form or via email. Our team is dedicated to responding promptly to your inquiries and assisting you with any issues you may encounter.",
    },
    // Additional FAQs can be added here
    {
      question: "What are the prerequisites for the courses?",
      answer: "While most courses are open to everyone, some may have prerequisites based on the content level. We recommend reviewing the course description for specific requirements.",
    },
    {
      question: "Can I take multiple courses at once?",
      answer: "Yes, you can enroll in multiple courses simultaneously, depending on your availability and capacity to manage your learning schedule effectively.",
    },
    {
      question: "What resources are provided with the courses?",
      answer: "Each course comes with various resources, including video lectures, downloadable materials, quizzes, and access to a community forum for discussions and networking with fellow learners.",
    },
  ];

  // Function to handle showing more FAQs
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <FaqsContainer>
      <FaqsHeading variant="h4" component="h2">
        Frequently Asked Questions
      </FaqsHeading>
      {faqsData.slice(0, showMore ? faqsData.length : 5).map((faq, index) => (
        <Accordion key={index} sx={{ marginBottom: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Button onClick={handleShowMore} variant="contained" sx={{ marginTop: "20px" }}>
        {showMore ? "Show Less" : "Show All"}
      </Button>
    </FaqsContainer>
  );
};

export default FaqsSection;
