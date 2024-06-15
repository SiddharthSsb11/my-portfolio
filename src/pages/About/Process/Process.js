import React from "react";
import { Grid, Box, Typography, Fade } from "@mui/material";
import ProcessStepper from "./ProcessStepper";
import "../../../index.scss";
import ProcessStepperMobile from "./ProcessStepperMobile";
import { useInView } from "react-intersection-observer";

const processItems = [
  {
    title: "Conceptualization",
    body: "This is the initial phase of my work where I define the main purpose and functions of the project. I figure the purpose and utility of the problem-statement including the initial UI/UX that I want to achieve.",
  },
  {
    title: "Planning",
    body: "This phase refines my concept to have a clear vision of the outcome. I start with writing pseudo-codes, list down the needed libraries or APIs, and create a diagram for the database model.",
  },
  {
    title: "Development",
    body: "When the foundations are set, construction begins. I always try to make sure that I follow my plan and stick to my concept. This way, the result will be just as I envisioned.",
  },
];
const Process = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -35% 0px",
    delay: 250,
    triggerOnce: true,
  });

  return (
    <Box
      sx={{
        position: "relative",
        px: { xs: 1.75, sm: 3, md: 4, lg: 5 },
        py: { xs: 8, sm: 10, md: 11, lg: 12, xl: 15 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: "rgba(25,25,25,.25)",
          zIndex: -1,
        }}
      ></Box>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
          maxWidth: "1500px",
          mx: "auto",
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        <Grid item xs={12} md={12} lg={12} ref={ref}>
          <Fade
            appear={inView}
            in={inView}
            timeout={500}
            style={{ transitionDelay: "100ms" }}
          >
            <Box>
              <Typography
                variant="h2"
                align="center"
                fontWeight={400}
                fontSize={{ xs: 30, sm: 34, md: 36, lg: 38, xl: 45 }}
                letterSpacing={{ xs: 0.5, lg: 1 }}
                lineHeight={{ xs: 1.1 }}
                textTransform="none"
                sx={{
                  textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                }}
              >
                My Work Process
              </Typography>
            </Box>
          </Fade>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          mt={{ xs: 5, sm: 6, md: 7, lg: 8, xl: 10 }}
        >
          <Box sx={{ display: { xs: "none", md: "initial" } }}>
            <ProcessStepper processItems={processItems} />
          </Box>
          <Box sx={{ display: { xs: "initial", md: "none" } }}>
            <ProcessStepperMobile processItems={processItems} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Process;
