import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography, ButtonBase, Fade } from "@mui/material";
import ProjectsShowcase from "./ProjectsShowcase";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@mui/system";

const slideLeft = keyframes`
  0% {
    transform: translateX(1.5em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(1.5em);
    opacity: 0;
  }
`;

const Projects = () => {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -35% 0px",
    delay: 250,
    triggerOnce: true,
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        px: { xs: 1.75, sm: 3, md: 4, lg: 5 },
        py: { xs: 8, sm: 10, md: 12, lg: 16, xl: 20 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* backdrop */}
      {isHovered && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            // zIndex: 2,
            display: { xs: "initial", lg: "none" },
            // background: "blue"
          }}
          onTouchStart={() => setIsHovered(false)}
        ></Box>
      )}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: "rgba(255,255,255,1)",
          mixBlendMode: "overlay",
          opacity: 0.2,
          zIndex: -1,
        }}
      ></Box>
      <Grid
        container
        sx={{
          maxWidth: "1500px",
          height: "100%",
          mx: "auto",
          overflowX: "auto",
          overflowY: "hidden",
        }}
        ref={ref}
      >
        <Grid item xs={12} sm={10.5} md={11} lg={3.5} xl={4.25}>
          <Fade
            appear={inView}
            in={inView}
            timeout={1100}
            style={{ transitionDelay: "300ms" }}
          >
            <Box>
              <Typography
                variant="h2"
                align="left"
                fontWeight={400}
                fontSize={{ xs: 45, sm: 50, md: 60, lg: 80, xl: 80 }}
                letterSpacing={-0.1}
                lineHeight={{ xs: 1 }}
                textTransform="none"
                sx={{
                  textShadow: "1px 1px 7px rgba(10,10,10,.75)",
                }}
              >
                My{" "}
                <Box
                  component="br"
                  sx={{ display: { xs: "none", lg: "initial" } }}
                ></Box>
                Projects
              </Typography>
            </Box>
          </Fade>
          <Fade
            appear={inView}
            in={inView}
            timeout={1100}
            style={{ transitionDelay: "600ms" }}
          >
            <Box mt={{ xs: 5, sm: 6 }} ml={{ md: 0.5 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: 12, sm: 13, md: 14, lg: 14 },
                  fontWeight: 100,
                  opacity: 0.6,
                  letterSpacing: { xs: 1, md: 1.3 },
                  lineHeight: { xs: 1.5, md: 2 },
                  textShadow: "1px 1px 5px rgba(50,50,50,.5)",
                }}
              >
                I mainly use ReactJS & React-Native and utilize different full
                stack combinations to build my projects. I also implement
                various libraries on my projects to increase development
                efficiency and easier scalability.
              </Typography>
            </Box>
          </Fade>
        </Grid>
        <Grid
          item
          xs={12}
          mt={{ xs: 30, sm: 55, md: 65, lg: 10, xl: 12 }}
          sx={{ overflow: "hidden" }}
        >
          <Box
            sx={{
              opacity: 0,
              animation:
                inView && !isHovered
                  ? `${slideLeft} 1000ms ease forwards 400ms`
                  : `${slideRight} 800ms ease forwards`,
            }}
          >
            <ButtonBase
              onClick={() => !isHovered && navigate("/projects")}
              sx={{
                borderLeft: 2,
                fontSize: {
                  xs: "1rem",
                  sm: "1.3rem",
                  md: "1.4rem",
                  lg: "1.4rem",
                },
                lineHeight: 1.4,
                color: "white",
                borderColor: "primary.dark",
                px: 1.5,
                py: 0.25,
                fontWeight: 600,
                letterSpacing: { xs: 2.25, sm: 3 },
                opacity: 0.75,
                transition: "all 200ms ease-in-out",
                fontFamily: "Manrope",
                textTransform: "uppercase",
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                zIndex: 10,
                "&:hover": {
                  opacity: 1,
                  transform: "scale(1.02)",
                  borderColor: "primary.main",
                },
              }}
            >
              Explore My Projects
            </ButtonBase>
          </Box>
        </Grid>
        <ProjectsShowcase isHovered={isHovered} setIsHovered={setIsHovered} />
      </Grid>
    </Box>
  );
};

export default Projects;
