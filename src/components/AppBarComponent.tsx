"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const AppBarComponent: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const renderDrawer = () => (
    <Drawer anchor="bottom"  open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: "auto",height:"calc(100vh - 40px)" }} // Adjusts to full width automatically
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {["Home", "About Us", "Services", "Contact"].map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: "flex", justifyContent: "center" }}>
              <Link href={`/${text.toLowerCase().replace(" ", "-")}`} passHref>
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <Box>
      <AppBar position="sticky" >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between",minHeight:"43px"}}>
          {/* Logo on the left */}
          <Typography variant="h6" component={Link} href="/" sx={{ textDecoration: "none", color: "inherit" }}>
            {/* Replace "My Logo" with the actual logo component or image */}
            My Logo
          </Typography>

          {/* Menu on the right */}
          {isSmallScreen ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              <Button color="inherit" component={Link} href="/">
                Home
              </Button>
              <Button color="inherit" component={Link} href="/about-us">
                About Us
              </Button>
              <Button color="inherit" component={Link} href="/services">
                Services
              </Button>
              <Button color="inherit" component={Link} href="/contact">
                Contact
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {renderDrawer()}
    </Box>
  );
};

export default AppBarComponent;
