import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import DocumentHead from "../../components/DocumentHead";
import Introduction from "./Introduction";

import Contact from "../Home/Contact/Contact";
import { Stack } from "@mui/material";
import Skills from "./Skills/Skills";
// import Roadmap from "./Roadmap/Roadmap";
import Process from "./Process/Process";

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <DocumentHead
        title="Siddharth Singh Bhadauriya | About"
        description="I am a Software Developer based in Delhi NCR, India"
        keyword="react, reactjs, redux, react native, mobx, javascript, typescript, node, software developer, expo, nodejs, mern, express, expressjs, mongodb, tailwind, material UI, chakra UI, stylesheet, developer, fullstack developer, full stack developer,"
      />
      <Stack>
        <Introduction />
        <Skills />
        <Process />
        {/*  <Roadmap /> */}
        <Contact />
      </Stack>
    </>
  );
};

export default About;
