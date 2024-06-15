import { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Typography, Box, Grid, Tooltip, Fade } from "@mui/material";
import SkillIconImageItem from "../../../../components/SkillIconImageItem";
import skills from "../../../../constants/skills";

const boxStyles = {
  width: "fit-content",
  py: { sm: 0.75, md: 0.75, lg: 1, xl: 1 },
  height: "100%",
  userSelect: "none",
  opacity: { xs: 0.8, md: 0.45 },
  background: "none",
  transition: "all 250ms ease-in-out",
  fontFamily: "Manrope",
  "&:hover": {
    opacity: 1,
    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    transform: "scale(1.025)",
    borderColor: "primary.main",
  },
};

const chunkArray = (arr, chunkSize) => {
  return arr.reduce((all, one, i) => {
    const ch = Math.floor(i / chunkSize);
    all[ch] = [].concat(all[ch] || [], one);
    return all;
  }, []);
};

const SkillsCarousel = ({ isVisible }) => {
  const [skillsList, setSkillsList] = useState([]);
  const expertiseSkills = skills.slice(0, 20);
  // console.log({ expertiseSkills });
  useEffect(() => {
    setSkillsList(chunkArray(expertiseSkills, 10));
  }, []);

  return (
    <Box mr={{ lg: 4, xl: 4 }}>
      <Carousel
        indicators={true}
        interval={8000}
        duration={800}
        navButtonsAlwaysInvisible={true}
      >
        {skillsList.map((item, index) => (
          <Grid container key={index} pr={{ md: 2 }}>
            {item.map((_item, _index) => (
              <Fade
                appear={isVisible}
                in={isVisible}
                timeout={600}
                style={{ transitionDelay: `${_index * 200 + 1100}ms` }}
                key={_item.name}
              >
                <Grid item xs={2.4} sm={2.1} md={2.4} align="left" my={1.75}>
                  <Tooltip
                    title={
                      <Typography
                        variant="body1"
                        fontSize={12}
                        fontWeight={300}
                        letterSpacing={0.4}
                        px={0.25}
                      >
                        {_item.name}
                      </Typography>
                    }
                    arrow
                    placement="right"
                    enterDelay={50}
                    enterNextDelay={150}
                  >
                    <Box sx={boxStyles}>
                      <Box
                        height={{ xs: 25, sm: 40, md: 45, lg: 50, xl: 55 }}
                        width="auto"
                      >
                        <SkillIconImageItem
                          src={_item.monoUrl}
                          duration={500}
                          objectFit="scale-down"
                          sx={{ filter: "invert(1) brightness(1.1)" }}
                        />
                      </Box>
                    </Box>
                  </Tooltip>
                </Grid>
              </Fade>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
};

export default SkillsCarousel;
