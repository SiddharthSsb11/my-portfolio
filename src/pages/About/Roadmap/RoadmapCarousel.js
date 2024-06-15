import { useState } from "react";
import { Grid, Typography, Box, IconButton, Fade } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const roadmapItems = [
  {
    title: "I",
    description: ".",
  },
  {
    title: "II",
    description: "",
  },
  {
    title: "III",
    description: "",
  },
  {
    title: "IV",
    // description: ""
    description: "",
  },
  {
    title: "V",
    description: "",
  },
];

const navigatorStyles = {
  display: { xs: "none", sm: "initial" },
  transition: "all 300ms linear",
  backgroundColor: "transparent",
  svg: {
    transition: "all 120ms linear",
    filter: "drop-shadow(1px 1px 3px rgba(150,150,150,.15))",
  },
  "&:hover": {
    backgroundColor: "rgba(50,50,50,.25)",
    svg: {
      transform: "scale(1.2)",
      filter: "drop-shadow(1px 1px 3px rgba(50,50,50,.2))",
    },
  },
  "&:active": {
    svg: {
      transform: "scale(.95)",
    },
  },
};

const RoadmapCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (action) => {
    if (action === "prev" && currentIndex > 0)
      setCurrentIndex((prevState) => prevState - 1);
    if (action === "next" && currentIndex < roadmapItems.length - 1)
      setCurrentIndex((prevState) => prevState + 1);
  };
  return (
    <Box
      sx={{
        mt: { xs: 4, sm: 5, md: 5, lg: 6, xl: 8 },
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <IconButton
        onClick={() => handleClick("prev")}
        disabled={currentIndex === 0}
        color="primary"
        sx={
          currentIndex !== 0
            ? navigatorStyles
            : { display: { xs: "none", sm: "initial" } }
        }
      >
        <ArrowBackIosNewIcon fontSize="medium" />
      </IconButton>
      <Box
        sx={{
          width: "100%",
          px: { xs: 1, sm: 3, md: 3, lg: 8, xl: 12 },
        }}
      >
        <Carousel
          indicators={true}
          interval={8000}
          duration={500}
          navButtonsAlwaysInvisible={true}
          autoPlay={false}
          onChange={(i) => setCurrentIndex(i)}
          index={currentIndex}
        >
          {roadmapItems.map((item) => (
            <Grid container key={item.title}>
              <Grid item sm={11} md={10} lg={11} xl={10} mx="auto">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pt: 4,
                    pb: { xs: 4, sm: 5, md: 6, lg: 8 },
                    minHeight: { xs: 210, sm: 230, md: 180, lg: 230, xl: 190 },
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h2"
                      fontWeight={400}
                      fontSize={{ xs: 22, sm: 24, md: 26, lg: 28, xl: 30 }}
                      letterSpacing={{ xs: 0.5, xl: 1 }}
                      fontFamily="Noto Sans Lao"
                      lineHeight={{ xs: 1 }}
                      textTransform="none"
                      sx={{
                        textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                        transform: "skewX(-3deg)",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Box mt={{ xs: 3, sm: 5, md: 6, lg: 6 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        transition: "all 400ms ease-in-out",
                        fontSize: {
                          xs: 10.5,
                          sm: 12,
                          md: 12,
                          lg: 14,
                          xl: 14.5,
                        },
                        fontWeight: 300,
                        opacity: 0.65,
                        letterSpacing: 0.5,
                        lineHeight: 1.7,
                        textShadow: "1px 1px 7px rgba(75,75,75,.5)",
                        transform: "skewX(-3deg)",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Carousel>
      </Box>
      <IconButton
        onClick={() => handleClick("next")}
        disabled={currentIndex === roadmapItems.length - 1}
        color="primary"
        sx={navigatorStyles}
      >
        <ArrowForwardIosIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};

export default RoadmapCarousel;
