import React from "react";
import {
  Grid,
  Box,
  Typography,
  Tooltip,
  IconButton,
  Fade,
} from "@mui/material";
import { keyframes } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import SkillIconImageItem from "../../../components/SkillIconImageItem";
import skills from "../../../constants/skills";

const skillIconStyles = {
  width: "fit-content",
  py: { xs: 1, sm: 1, md: 1, lg: 2, xl: 3 },
  height: "100%",
  userSelect: "none",
  opacity: 0.45,
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

const urlButtonStyles = {
  width: "fit-content",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  gap: { xs: 0.75, sm: 0.75, lg: 1.5 },
  justifyContent: "left",
  borderLeft: 2,
  borderColor: "rgba(175,175,175,.75)",
  py: { xs: 0.25, md: 0.5 },
  px: { xs: 1, lg: 2 },
  transition: "all 250ms ease-in-out",
  letterSpacing: { xs: 1.2, sm: 1.5, md: 1.75, lg: 2.5 },
  opacity: { xs: 0.9, lg: 0.85 },
  fontSize: { xs: 13.5, sm: 15.5, md: 16.5, lg: 17 },
  fontWeight: 600,
  textTransform: "uppercase",
  transform: "skewX(-6deg)",
  "&:hover": {
    opacity: 1,
    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    transform: "scale(1.025) skewX(-6deg) translateX(3px)",
    borderColor: "primary.dark",
    letterSpacing: { xs: 1.5, sm: 1.75, md: 2, lg: 2.75 },
  },
};

const slideRight = keyframes`
  0% {
    transform: translateX(-2em) scale(.95);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`;

const ProjectUrlAndTechStack = ({ technologies, url, githubUrl, platform }) => {
  const projectTechnologies = skills.filter((item) =>
    technologies.includes(item.name)
  );

  return (
    <Grid container sx={{ justifyContent: "space-between" }}>
      <Grid item xs={12} order={{ xs: 2, sm: 1 }} mt={{ xs: 12, sm: 0 }}>
        <Fade
          appear={true}
          in={true}
          timeout={1200}
          style={{ transitionDelay: "1100ms" }}
        >
          <Box>
            <Typography
              variant="h4"
              align="right"
              fontWeight={300}
              fontSize={{ xs: 18, sm: 20, md: 21, lg: 24, xl: 25 }}
              letterSpacing={{ xs: 0.5, xl: 1 }}
              lineHeight={{ xs: 1 }}
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              }}
            >
              Main Tech Stack
            </Typography>
          </Box>
        </Fade>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5.5}
        md={4}
        lg={6}
        xl={5.5}
        sx={{
          display: "flex",
          gap: { xs: 1.15, sm: 1.75, md: 2, lg: 3 },
          flexDirection: "column",
          mt: { sm: 1.5, md: 1.5, lg: 3, xl: 6 },
        }}
        order={{ xs: 1, sm: 1 }}
      >
        {url && (
          <Box
            sx={{
              opacity: 0,
              animation: `${slideRight} 800ms ease forwards 1100ms`,
            }}
          >
            <IconButton
              size="small"
              href={url}
              target="_blank"
              sx={urlButtonStyles}
              disableRipple
            >
              <PublicIcon
                color="primary"
                sx={{ fontSize: { xs: 19, sm: 22, md: 22, lg: 23 } }}
              />
              <Box component="span">
                {platform === "web" ? "Web Demo" : "Install Apk"}
              </Box>
            </IconButton>
          </Box>
        )}
        <Box
          sx={{
            opacity: 0,
            animation: `${slideRight} 800ms ease forwards 1300ms`,
          }}
        >
          <IconButton
            size="small"
            href={githubUrl}
            target="_blank"
            sx={urlButtonStyles}
            disableRipple
          >
            <GitHubIcon
              color="primary"
              sx={{ fontSize: { xs: 19, sm: 22, md: 22, lg: 23 } }}
            />
            <Box component="span">Git Repo</Box>
          </IconButton>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6.5}
        md={7}
        lg={5}
        xl={5}
        align="right"
        order={{ xs: 3, sm: 3 }}
      >
        <Grid
          container
          sx={{
            mt: { xs: 1.5, sm: 1.75, md: 2, lg: 2, xl: 2.5 },
            justifyContent: "end",
          }}
        >
          {projectTechnologies.map((item, index) => (
            <Grid item xs={2.4} sm={2.4} md={2.4} key={item.name} align="right">
              <Fade
                appear={true}
                in={true}
                timeout={1100}
                style={{ transitionDelay: `${index * 150 + 1800}ms` }}
              >
                <Box>
                  <Tooltip
                    title={
                      <Typography
                        variant="body1"
                        fontSize={12}
                        fontWeight={300}
                        letterSpacing={0.4}
                        px={0.25}
                      >
                        {item.name}
                      </Typography>
                    }
                    arrow
                    placement="bottom"
                    enterDelay={500}
                    enterNextDelay={250}
                  >
                    <Box sx={skillIconStyles} variant="outlined">
                      <Box
                        height={{ xs: 20, sm: 24, md: 26, lg: 28, xl: 30 }}
                        width="auto"
                      >
                        <SkillIconImageItem
                          src={item.monoUrl}
                          duration={500}
                          objectFit="scale-down"
                          sx={{ filter: "invert(1) brightness(1.1)" }}
                        />
                      </Box>
                    </Box>
                  </Tooltip>
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectUrlAndTechStack;
