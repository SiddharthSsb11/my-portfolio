import { Grid, Typography, Box } from "@mui/material";
import TechSkills from "./SkillsGridItems/TechSkills";
import Certifications from "./SkillsGridItems/Certifications";
import OtherSkills from "./SkillsGridItems/OtherSkills";
import skills from "../../../constants/skills";

const baseTextStyles = {
  fontSize: { xs: 11, sm: 14.5, md: 15, lg: 15, xl: 15 },
  fontWeight: 300,
  opacity: 0.55,
  letterSpacing: 0.4,
  textShadow: "1px 1px 5px rgba(10,10,10,.75)",
};

const Skills = () => {
  const devSkillsList = skills.filter((item) => item.type === "dev");
  const toolSkillsList = skills.filter((item) => item.type === "tool");

  return (
    <Box
      sx={{
        position: "relative",
        px: { xs: 2.5, sm: 3, md: 4, lg: 5.5, xl: 4.5 },
        pt: { xs: 8, sm: 12, md: 14, lg: 15 },
        pb: { xs: 3, sm: 4, md: 4, lg: 6 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
          maxWidth: "1500px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background: "rgba(15,15,15,.5)",
            zIndex: -1,
          }}
        ></Box>
        <Grid item xs={12}>
          {devSkillsList.length !== 0 && (
            <TechSkills
              skills={devSkillsList}
              title="Software Development"
              description={
                <Typography sx={baseTextStyles}>
                  My expertise lies in building robust applications using
                  ReactJS and React-Native on the client-side, while leveraging
                  ExpressJS and NodeJS on the server-side. I am proficient in
                  database implementations, particularly MongoDB, and
                  well-versed in related libraries and technologies..
                </Typography>
              }
              isMain={true}
            />
          )}
          {toolSkillsList.length !== 0 && (
            <TechSkills
              skills={toolSkillsList}
              title="Tools & Platforms"
              description={
                <Typography sx={baseTextStyles}>
                  With several years of experience in the tech industry, I've
                  honed my ability to interact and collaborate effectively with
                  diverse teams. Alongside my proficiency in numerous
                  industry-standard tools, I've gained valuable insights and
                  hands-on experience in leveraging them to achieve project
                  goals.
                </Typography>
              }
              isMain={true}
            />
          )}
          <Certifications />
          <OtherSkills />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
