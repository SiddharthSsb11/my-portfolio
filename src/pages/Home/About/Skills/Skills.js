import React from "react";
import SkillsDescription from "./SkillsDescription";
import SkillsCarousel from "./SkillsCarousel";
import { Grid, Box, Typography, Divider, Fade } from "@mui/material";
import { keyframes } from "@mui/system";

const Skills = ({ isVisible }) => {
  return (
    <Grid
      container
      sx={{
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "flex-start",
        maxWidth: "1500px",
        mx: "auto",
      }}
    >
      <Grid
        item
        xs={8}
        mt={{ xs: 8, sm: 12 }}
        mb={{ xs: 8, sm: 12 }}
        sx={{ display: { xs: "initial", md: "none" } }}
      >
        <Divider />
      </Grid>
      <Grid item xs={12} sx={{ display: { xs: "initial", md: "none" } }}>
        <Fade
          appear={isVisible}
          in={isVisible}
          timeout={1100}
          style={{ transitionDelay: "1300ms" }}
        >
          <Box mb={5}>
            <Typography
              variant="h2"
              fontWeight={400}
              fontSize={{ xs: 25, sm: 35 }}
              letterSpacing={0.75}
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              }}
            >
              My Expertise
            </Typography>
          </Box>
        </Fade>
        <Fade
          appear={isVisible}
          in={isVisible}
          timeout={1100}
          style={{ transitionDelay: "1550ms" }}
        >
          <Box
            ml="auto"
            sx={{ maxWidth: "100%", display: { xs: "initial", md: "none" } }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: 10.5, sm: 13 },
                fontWeight: 100,
                opacity: 0.5,
                letterSpacing: 1.25,
                lineHeight: 1.6,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
              }}
            >
              My skillset is heavily focused on web & mobile applications. I
              also do have ample array of knowledge in frontend and backend
              software development, languages and libraries, frameworks,
              databases and best code practices.
            </Typography>
          </Box>
        </Fade>
      </Grid>

      <Grid item xs={12} md={7} lg={7} mt={{ xs: 4, md: 6 }}>
        {isVisible && <SkillsCarousel isVisible={isVisible} />}
      </Grid>
      <Grid item md={5} lg={5} sx={{ display: { xs: "none", md: "initial" } }}>
        <SkillsDescription isVisible={isVisible} />
      </Grid>
    </Grid>
  );
};

export default Skills;
