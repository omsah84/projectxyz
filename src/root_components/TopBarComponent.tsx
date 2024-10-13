'use client';
import { styled, Box, Typography, useMediaQuery, useTheme, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Email, Call } from "@mui/icons-material";

interface TopBarProps {
  backgroundColor?: string;
  textColor?: string;
  gap?: string;
}

const StyledHeader = styled(Box)<{ backgroundcolor: string }>(({ backgroundcolor }) => ({
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: backgroundcolor || "black",
  position: "sticky",
  top: 0,
}));

const ContentBox = styled(Box)<{ gap: string }>(({ gap }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: gap || "15px",
}));

const StyledTypography = styled(Typography)<{ textcolor: string }>(({ textcolor }) => ({
  color: textcolor || "white",
  display: "flex",
  alignItems: "center",
  gap: "3px",
}));

const StyledLink = styled(Link)<{ textcolor: string }>(({ textcolor }) => ({
  color: textcolor || "white",
  cursor: "pointer",
}));

const TopBarComponent: React.FC<TopBarProps> = ({
  backgroundColor = "black", // Default background color
  textColor = "white",       // Default text color
  gap = "15px",              // Default gap between items
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleCall = (): void => {
    window.open('tel:+917975230478'); // Dialer will open with this number
  };

  const renderItem = (icon: JSX.Element, text: string, isLink = false) => (
    <StyledTypography variant="body1" textcolor={textColor}>
      {icon}
      {isLink ? (
        <StyledLink textcolor={textColor} onClick={handleCall} aria-label="Call">
          {text}
        </StyledLink>
      ) : (
        text
      )}
    </StyledTypography>
  );

  return (
    <header>
      <StyledHeader backgroundcolor={backgroundColor} role="banner">
        <ContentBox gap={gap}>
          {isSmallScreen ? (
            // Only show the phone number centered on small screens
            renderItem(<Call />, "+917975230478", true)
          ) : isTabletScreen ? (
            // Show phone number and email on tablet screens, hide the address
            <>
              {renderItem(<Call />, "+917975230478", true)}
              {renderItem(<Email />, "support@domainname.com")}
            </>
          ) : (
            // Show full content on larger screens
            <>
              {renderItem(<LocationOnIcon />, "SY NO-101&156/2, Niladri, D Thogur, Bangalore, Karnataka - 560100")}
              {renderItem(<Call />, "+917975230478", true)}
              {renderItem(<Email />, "support@domainname.com")}
            </>
          )}
        </ContentBox>
      </StyledHeader>
    </header>
  );
};

export default TopBarComponent;
