// components/ThemeWrapper.tsx
"use client"; // This component is a Client Component

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/mui-theme"; // Import your custom theme

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
