"use client";
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton, Fab } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

// Define types for the message structure
interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const FloatingChatbotButton: React.FC = () => {
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);

    const handleToggleChat = () => {
        setIsChatOpen((prev) => !prev);
    };

    const handleSend = () => {
        const newMessage: Message = {
            text: message,
            sender: 'user',
        };
        setMessages((prev) => [...prev, newMessage]);
        setMessage('');

        // Simulate a response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    const getBotResponse = (userMessage: string): Message => {
        // Simulated responses based on user input
        let responseText = 'Sorry, I didn’t understand that. Could you please specify your needs?';

        const lowerCaseMessage = userMessage.toLowerCase();

        if (lowerCaseMessage.includes('project')) {
            responseText = 'We specialize in various projects including web development, app development, and research papers. What specific project do you have in mind?';
        } else if (lowerCaseMessage.includes('research paper')) {
            responseText = 'We can assist you in writing and structuring research papers. Please provide the topic or area of research you are interested in.';
        } else if (lowerCaseMessage.includes('support')) {
            responseText = 'You can reach support at support@example.com for any queries or assistance.';
        } else if (lowerCaseMessage.includes('courses')) {
            responseText = 'We offer various courses, including web development and data analysis. Would you like to know more about a specific course?';
        } else if (lowerCaseMessage.includes('services')) {
            responseText = 'Our services include web development, mobile app development, content writing, API development, and more. Which service are you interested in?';
        }

        return { text: responseText, sender: 'bot' };
    };

    return (
        <>
            <Fab
                onClick={handleToggleChat}
                color="primary"
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                        transform: 'scale(1.1)',
                    },
                }}
            >
                <ChatIcon />
            </Fab>
            {isChatOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 80,
                        right: { xs: '50%', sm: 16 }, // Move to the center on small screens
                        transform: { xs: 'translateX(50%)', sm: 'none' }, // Centering transform
                        width: { xs: '90%', sm: '400px' },
                        maxHeight: { xs: '80%', sm: '400px' }, // Increased height for small screens
                        backgroundColor: '#ffffff',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                        padding: 2,
                        zIndex: 1000,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ borderBottom: '2px solid #3f51b5', paddingBottom: 1, paddingTop: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>Chatbot</Typography>
                        <IconButton onClick={handleToggleChat} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box mt={1} mb={1} sx={{ flexGrow: 1, overflowY: 'auto', maxHeight: '200px', padding: 1 }}>
                        {/* Display the prompt and messages */}
                        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
                            Type your message below:
                        </Typography>
                        {messages.map((msg, index) => (
                            <Typography key={index} variant="body2" color={msg.sender === 'user' ? 'textPrimary' : 'textSecondary'}>
                                {msg.text}
                            </Typography>
                        ))}
                    </Box>
                    <Box display="flex" sx={{ paddingTop: 1 }}>
                        <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            onClick={handleSend}
                            sx={{ marginLeft: 1 }}
                        >
                            Send
                        </Button>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default FloatingChatbotButton;
