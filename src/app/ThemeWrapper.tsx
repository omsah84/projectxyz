// components/ThemeWrapper.tsx
"use client"; // This component is a Client Component

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/mui-theme"; // Import your custom theme
import CssBaseline from "@mui/material/CssBaseline";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets default styling */}
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
