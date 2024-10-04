// styles/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra small devices
      sm: 576, // Small devices
      md: 768, // Medium devices
      lg: 1024, // Large devices
      xl: 1200, // Extra large devices
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif', // Set global font family
  },
  palette: {
    primary: {
      main: "#007bff", // Primary color
    },
    secondary: {
      main: "#6c757d", // Secondary color
    },
  },
});

export default theme;
