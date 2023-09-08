import React from "react";
import Head from "next/head";
import Container from "../components/Container";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Contact from "../components/Contact";
import { Flex, Center, Spinner, useColorMode } from "@chakra-ui/react";
import { primaryBackgroundColor } from "../styles/theme";

export default function Index() {
  const [isLoading, setLoading] = React.useState(true);

  const { colorMode } = useColorMode();

  React.useEffect(() => {

    window.addEventListener("load", () => {
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

    if (colorMode && localStorage?.getItem("chakra-ui-color-mode")) {
      return setLoading(false);
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

  if (isLoading)
    return (
      <Flex color="white">
        <Center w="100vw" h="100vh" bg={primaryBackgroundColor}>
          <Spinner
            thickness="10px"
            speed="0.65s"
            emptyColor="gray.100"
            color="blue.500"
            size="xl"
          />
        </Center>
      </Flex>
    );

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
