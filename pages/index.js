import React from "react";
import Head from "next/head";
import Container from "../components/Container";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function Index() {
  React.useEffect(() => {
    localStorage?.setItem("chakra-ui-color-mode", "dark");
  }, []);

  return (
    <Container>
      <Head>
        <title>Home - Prajwal S Venkateshmurthy</title>
      </Head>
      <Home />
      <AboutMe sectionIndex={1} id="about" sectionTitle="About Me" />
      <Experience
        sectionIndex={2}
        id="experience"
        sectionTitle="Where I've Worked"
      />
      <Work sectionIndex={3} id="work" sectionTitle="Some Things I've Built" />
      <Contact sectionIndex={4} id="contact" sectionTitle="Get In Touch" />
    </Container>
  );
}
