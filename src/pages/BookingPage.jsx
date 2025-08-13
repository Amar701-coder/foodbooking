import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import Menu from "@mui/icons-material/Menu";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

const BookingPage = () => {
 const navigationItems = ["BreakFast", "Lunch", "Dinner"];

  const foodImages = [
    {
      src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=200&fit=crop&crop=center",
      top: "20%",
      left: "55%",
    },
    {
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop&crop=center",
      top: "15%",
      left: "75%",
    },
    {
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=200&fit=crop&crop=center",
      top: "25%",
      left: "85%",
    },
    {
      src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop&crop=center",
      top: "45%",
      left: "50%",
    },
    {
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop&crop=center",
      top: "35%",
      left: "65%",
    },
    {
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop&crop=center",
      top: "50%",
      left: "85%",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          width: "1278px",
          height: "840px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "1178px",
            height: "662px",
            left: "100px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "1178px",
              height: "662px",
              top: 0,
              left: 0,
            }}
          >
            {/* Green curved background */}
            <Box
              sx={{
                position: "absolute",
                width: "942px",
                height: "532px",
                top: 0,
                left: "236px",
                bgcolor: "#5cac0e",
                borderRadius: "50%",
                transform: "scale(1.2, 1)",
                clipPath: "ellipse(50% 100% at 50% 0%)",
              }}
            />

            {/* Header */}
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                position: "absolute",
                width: "1064px",
                height: "48px",
                top: "44px",
                left: "2px",
              }}
            >
              <IconButton sx={{ mr: 2 }}>
                <Menu sx={{ color: "#333333" }} />
              </IconButton>

              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  color: "#333333",
                  mr: "auto",
                }}
              >
                Food Hunt
              </Typography>

              <Stack direction="row" spacing={4} sx={{ mr: "auto", ml: 4 }}>
                {navigationItems.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "medium",
                      color: "#333333",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>

              <IconButton>
                <ShoppingBag sx={{ color: "#333333" }} />
              </IconButton>
            </Stack>

            {/* Food images scattered on green background */}
            {foodImages.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image.src}
                sx={{
                  position: "absolute",
                  width: index === 4 ? "294px" : "100px",
                  height: index === 4 ? "292px" : "100px",
                  top: image.top,
                  left: image.left,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid white",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              />
            ))}

            {/* Main content */}
            <Stack
              spacing={1.5}
              sx={{
                position: "absolute",
                top: "291px",
                left: 0,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "medium",
                  color: "#5cac0e",
                  fontSize: "48px",
                  lineHeight: "normal",
                }}
              >
                Delicious
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "medium",
                  color: "black",
                  fontSize: "36px",
                  lineHeight: "normal",
                }}
              >
                Quench the Hunger
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "normal",
                  color: "black",
                  fontSize: "14px",
                  letterSpacing: "0.56px",
                  lineHeight: "22.1px",
                  width: "347px",
                  height: "60px",
                }}
              >
                Book your Favourite food at Favourite table
              </Typography>
            </Stack>
          </Box>

          {/* Quench Now Button */}
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              width: "170px",
              height: "50px",
              top: "516px",
              left: "2px",
              bgcolor: "#5cac0e",
              borderRadius: "48px",
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: "14px",
              color: "#fffbfb",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#4a9a0c",
              },
            }}
          >
            Book Now
          </Button>

          {/* Left Arrow */}
          <IconButton
            sx={{
              position: "absolute",
              left: "517px",
              top: "548px",
              width: "40px",
              height: "40px",
              bgcolor: "#5cac0e",
              borderRadius: "20px",
              "&:hover": {
                bgcolor: "#4a9a0c",
              },
            }}
          >
            <ArrowBackIos sx={{ color: "white", fontSize: "16px" }} />
          </IconButton>

          {/* Right Arrow */}
          <IconButton
            sx={{
              position: "absolute",
              left: "1053px",
              top: "548px",
              width: "40px",
              height: "40px",
              bgcolor: "#5cac0e",
              borderRadius: "20px",
              "&:hover": {
                bgcolor: "#4a9a0c",
              },
            }}
          >
            <ArrowForwardIos sx={{ color: "white", fontSize: "16px" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default BookingPage