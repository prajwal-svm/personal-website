import React from "react";
import Head from "next/head";
import Container from "../components/Container";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Contact from "../components/Contact";
import { Flex, Center, Spinner, useColorMode } from "@chakra-ui/react";
import { primaryBackgroundColor } from "../styles/theme";

export default function Index() {
  const [isLoading, setLoading] = React.useState(true);
  const [isDarkMode, setDarkMode] = React.useState(false);

  const { colorMode } = useColorMode();

  React.useEffect(() => {

    window.addEventListener("load", () => {
      setLoading(false);

      const sections = document.querySelectorAll("section");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show-section");
            } else {
              entry.target.classList.remove("show-section");
            }
          });
        },
        {
          threshold: 0.25,
          rootMargin: '0px 0px 0px 0px'
        }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });

    });

    if (
      localStorage?.getItem("chakra-ui-color-mode") === 'light'
    ) {
      localStorage?.setItem("chakra-ui-color-mode", "dark");
      window.location.reload();
    }

    if (colorMode && localStorage?.getItem("chakra-ui-color-mode")) {
      return setDarkMode(false);
    }
    if (
      colorMode === "dark" &&
      localStorage?.getItem("chakra-ui-color-mode") === null
    ) {
      localStorage?.setItem("chakra-ui-color-mode", "dark");
      window.location.reload();
    } 

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    }

  }, []);

  if (isLoading || isDarkMode) {
    return (
      <Flex color="white">
        <Center w="100vw" h="100vh" bg={primaryBackgroundColor}>
          <div className="spinner">
            <div></div>
            <div></div>
          </div>
        </Center>
      </Flex>
    );
  }

  return (
    <Container>
      <Head>
        <title>Home - Prajwal Murthy</title>
      </Head>
      <Home />
      <Skills id="skills" sectionTitle="Skills" />
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
