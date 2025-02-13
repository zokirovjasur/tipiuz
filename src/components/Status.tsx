"use client";

import { useState, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

// Custom hook for smooth counting animation
const useCounter = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
};

export default function Status() {
  const studentCount = useCounter(11000);
  const teacherCount = useCounter(400);
  const grantValue = useCounter(1000000000); // 1 Milliard in numbers

  return (
    <Box
      sx={{
        bgcolor: "#2B3147",
        color: "white",
        py: { xs: 4, md: 10 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          justifyContent={{ xs: "center", md: "flex-start" }} // Mobilda markazga, desktopda chapga
          alignItems={{ xs: "center", md: "flex-start" }} // Mobilda markazga, desktopda chapga
          flexDirection={{ xs: "column", md: "row" }} // Mobilda ustun, desktopda qator
        >
          {/* Left side - Heading */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                fontWeight: 300,
                position: "relative",
                display: "inline-block",
                pb: 1,
                textAlign: { xs: "center", md: "left" }, // Mobilda markazga, desktopda chapga
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: { xs: "50%", md: "0" }, // Mobilda markazga, desktopda chapga
                  width: "100%",
                  height: "1px",
                  bgcolor: "white",
                  transform: { xs: "translateX(-50%)", md: "none" }, // Mobilda markazga
                },
              }}
            >
              Sonlarda
            </Typography>
          </Grid>

          {/* Right side - Stats */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" }, // Mobilda markazga, desktopda chapga
            }}
          >
            {/* Top row - Two stats */}
            <Grid
              container
              spacing={{ xs: 2, md: 4 }}
              sx={{ mb: { xs: 2, md: 4 } }}
              justifyContent={{ xs: "center", md: "flex-start" }} // Mobilda markazga, desktopda chapga
            >
              <Grid item xs={12} sm={6}>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                      fontWeight: 500,
                      mb: 1,
                      position: "relative",
                      display: "inline-block",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -5,
                        left: { xs: "50%", md: "0" }, // Mobilda markazga, desktopda chapga
                        width: { xs: "50%", sm: "60%" },
                        height: "1px",
                        bgcolor: "white",
                        transform: { xs: "translateX(-50%)", md: "none" }, // Mobilda markazga
                      },
                    }}
                  >
                    {studentCount.toLocaleString()}+
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "0.875rem", md: "1.25rem" },
                      opacity: 0.7,
                    }}
                  >
                    Talabalar
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                      fontWeight: 500,
                      mb: 1,
                      position: "relative",
                      display: "inline-block",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -5,
                        left: { xs: "50%", md: "0" }, // Mobilda markazga, desktopda chapga
                        width: { xs: "50%", sm: "60%" },
                        height: "1px",
                        bgcolor: "white",
                        transform: { xs: "translateX(-50%)", md: "none" }, // Mobilda markazga
                      },
                    }}
                  >
                    {teacherCount.toLocaleString()}+
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "0.875rem", md: "1.25rem" },
                      opacity: 0.7,
                    }}
                  >
                    O'qituvchilar
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* Bottom row - One stat */}
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                  fontWeight: 500,
                  mb: 1,
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -5,
                    left: { xs: "50%", md: "0" }, // Mobilda markazga, desktopda chapga
                    width: { xs: "25%", sm: "30%" },
                    height: "1px",
                    bgcolor: "white",
                    transform: { xs: "translateX(-50%)", md: "none" }, // Mobilda markazga
                  },
                }}
              >
                {(grantValue / 1000000000).toFixed(1)} Milliard qiymatli
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.875rem", md: "1.25rem" },
                  opacity: 0.7,
                }}
              >
                Grandlar
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
