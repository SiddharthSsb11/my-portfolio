import { useRef } from "react";
import DocumentHead from "../../components/DocumentHead";
import { Stack, Box } from "@mui/material";
import SubIntroduction from "./SubIntroduction";
import Landing from "./Landing/Landing";
import Projects from "./Projects/Projects";
import About from "./About/About";

import "./Home.css";

const Home = () => {
  const subIntroRef = useRef();
  // console.log("--projects---", projects);
  return (
    <Stack>
      <DocumentHead
        title="Siddharth Singh Bhadoriya | Home"
        description="I am a Software Developer based in Delhi NCR, India"
        keyword="react, reactjs, redux, react native, mobx, javascript, typescript, node, software developer, expo, nodejs, mern, express, expressjs, mongodb, tailwind, material UI, chakra UI, stylesheet, developer, fullstack developer, full stack developer,"
      />
      <Landing subIntroRef={subIntroRef} />
      <Box sx={{ mb: { xs: 8, sm: 12, md: 14, lg: 18 } }}></Box>
      <Box ref={subIntroRef}>
        <SubIntroduction />
      </Box>
      <Projects />
      <About />
    </Stack>
  );
};

export default Home;
