import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, ButtonBase } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@mui/system";
import { useSwipeable } from "react-swipeable";
import Image from "mui-image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import generateRandomNumbers from "../../../utils/generateRandomNumbers";
import projects from "../../../constants/projects";

const previewBoxStyles = {
  height: { xs: 165, sm: 300, md: 350, lg: 360, xl: 410 },
  width: { xs: 130, sm: 260, md: 300, lg: 310, xl: 360 },
  borderColor: "rgba(250,250,250,.4)",
  boxShadow:
    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  transform: "skewX(-7deg)",
};

const slideLeft = keyframes`
  0% {
    transform: translateX(3em);
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
    opacity: 0;
  }
  100% {
    transform: translateX(1.5em);
    opacity: 1;
  }
`;

const ProjectsShowcase = ({ isHovered, setIsHovered }) => {
  console.log("--projects---", projects);
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -35% 0px",
    delay: 250,
  });

  const [previewProjects, setPreviewProjects] = useState([]);

  //set interval on mount
  useEffect(() => {
    if (projects.length !== 0 && inView) {
      setPreviewProjects(generateProjectPreviews());
      return () => setPreviewProjects([]);
    }
  }, [inView]);

  const generateProjectPreviews = () => {
    const arr = generateRandomNumbers(projects.length, 3);
    return arr.map((item) => projects[item]);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsHovered(true),
    onSwipedRight: () => setIsHovered(true),
  });

  return (
    <Box
      sx={{
        height: { lg: "100%" },
        position: "absolute",
        width: { xs: "150%", md: "110%", lg: "auto" },
        top: 0,
        left: { xs: 0, md: "initial" },
        right: { xs: 0, md: "initial" },
        transform: {
          xs: "translateX(2em)",
          md: "translateX(10em)",
          lg: "translateX(29em)",
          xl: "translateX(40em)",
        },
        pt: { xs: 32, sm: 36, md: 40, lg: 14, xl: 18 },
        mb: { xs: 0, sm: 0, md: 11, lg: 0 },
        pb: { lg: 14, xl: 18 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      ref={ref}
    >
      <Grid container gap={{ xs: 2.5, sm: 4, md: 4, lg: 5, xl: 7 }}>
        {previewProjects.length !== 0 &&
          previewProjects.map((item) => (
            <Box
              sx={{
                opacity: 0,
                animation: inView
                  ? `${slideLeft} 1100ms ease forwards 1100ms`
                  : "none",
              }}
              key={item.title}
            >
              <Grid item sx={previewBoxStyles}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100%",
                    background: item.palette.primary,
                    overflow: "hidden",
                    opacity: 0.85,
                    px: { xs: 1, sm: 2, md: 3, lg: 4 },
                    py: { xs: 1.5, sm: 2, md: 3 },
                    opacity: isHovered ? 0.25 : 1,
                    transition: "opacity 1s ease",
                  }}
                >
                  <Box
                    sx={{
                      transform: "skewX(1deg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "space-between", sm: "center" },
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        mb: { xs: 1.5, sm: 3, md: 3, lg: 4 },
                        p: { xs: 1, sm: 2, md: 3 },
                        maxHeight: "55%",
                        maxWidth: "80%",
                        textAlign: "left",
                      }}
                    >
                      <Image
                        src={
                          item.isLightMode
                            ? item.secondaryLogo.url
                            : item.logo.url
                        }
                        alt={
                          item.isLightMode
                            ? item.secondaryLogo.name
                            : item.logo.name
                        }
                        fit="scale-down"
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          letterSpacing: { xs: 1, sm: 1.5, md: 2.5 },
                          lineHeight: 1.1,
                          mb: 1,
                          color: item.isLightMode ? "black" : "white",
                          fontSize: {
                            xs: ".8rem",
                            sm: "1rem",
                            md: "1.15rem",
                            lg: "1.25rem",
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: 10, sm: 11, md: 12, lg: 12 },
                          fontWeight: 100,
                          opacity: 0.8,
                          letterSpacing: { xs: 1, md: 1.3 },
                          lineHeight: { xs: 1.05, md: 1.25 },
                          textShadow: item.isLightMode
                            ? "1px 1px 2px rgba(10,10,10,.2)"
                            : "1px 1px 3px rgba(30,30,30,.5)",
                          color: item.isLightMode ? "black" : "white",
                          display: { xs: "none", sm: "block" },
                        }}
                        align="left"
                      >
                        {item.briefDescription}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Box>
          ))}

        {/* hover button */}
        {inView && (
          <Box
            sx={{
              height: "100%",
              width: { xs: "145%", sm: "125%", md: "115%", lg: "100%" },
              position: "absolute",
              transform: "skewX(-7deg)",
              top: 0,
              right: { xs: 0, md: 20 },
              pt: { xs: 32, sm: 36, md: 40, lg: 14, xl: 18 },
              mb: { xs: 0, sm: 0, md: 11, lg: 0 },
              pb: { lg: 14, xl: 18 },
              // background: 'red',
              zIndex: 10,
            }}
          >
            <Box
              onMouseOver={() => setIsHovered(true)}
              // onMouseOver={() => setIsHovered(true)}
              onClick={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              {...handlers}
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: isHovered ? "blur(5px)" : "",
                transition: "backdrop-filter 200ms ease",
              }}
            >
              {isHovered && (
                <Box
                  sx={{
                    opacity: 0,
                    animation: inView
                      ? `${slideRight} 800ms ease forwards 0ms`
                      : "none",
                  }}
                >
                  <ButtonBase
                    onClick={() => navigate("/projects")}
                    sx={{
                      border: 2,
                      fontSize: {
                        xs: "1.1rem",
                        sm: "1.7rem",
                        md: "1.75rem",
                        lg: "1.8rem",
                      },
                      lineHeight: 1.4,
                      color: "white",
                      borderColor: "rgba(255,255,255,.5)",
                      px: { xs: 2.75, sm: 3.25, md: 3.5 },
                      py: { xs: 0.85, sm: 1, md: 1.25 },
                      fontWeight: 600,
                      letterSpacing: { xs: 2.5, sm: 3 },
                      transition:
                        "transform 200ms ease-in-out, border 200ms ease-in-out",
                      fontFamily: "Manrope",
                      textTransform: "uppercase",
                      textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                      display: "flex",
                      zIndex: 20,
                      gap: 1.25,
                      "&:hover": {
                        opacity: 1,
                        transform: "scale(1.02)",
                        borderColor: "rgba(255,255,255,1)",
                      },
                    }}
                  >
                    Explore My Projects{" "}
                    <ArrowForwardIosIcon
                      style={{
                        align: "center",
                        fontSize: "inherit",
                        padding: "1px 0",
                      }}
                      color="primary"
                    />
                  </ButtonBase>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default ProjectsShowcase;
