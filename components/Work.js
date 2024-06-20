import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Link,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import StackWithTitleWrapper from "./StackWithTitleWrapper";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import { primaryBackgroundColor, primaryDarkColor } from "../styles/theme";
import { skillIconMap } from "../data/content";

const colorSecondary = {
  light: "#ccd6f6",
  dark: "purple.100",
};

const ProjectsData = [
  {
    title: "Webfolio",
    imgURI:
      "https://i.ibb.co/YpHPwNK/192-168-141-4-3000-i-Pad-Pro.png",
    content: [
      "My portfolio website (Webfolio) integrated with blogging feature built using NextJs",
      "Leverages ChakraUIs components and icons to present an exceptional UI",
      "Blog content rendered by NextMDX, Comments powered by Utterances and Hosted on Vercel with Github CI/CD",
    ],
    tags: ["Javascript", "ReactJs", "NextJs", "ChakraUI", "EmailJs"],
    githubURI: "https://github.com/Prajwal-S-Venkatesh/personal-website",
    liveURI: "https://prajwalsv.dev/",
  },
  {
    title: "StartupSync",
    imgURI:
      "https://i.ibb.co/42yCR24/192-168-141-4-3001-i-Pad-Pro.png",
    content: [
      "A platform for finding and connecting with startups, sponsors and investors.",
    ],
    tags: ["Typescript", "NextJs", "OpenAI API", "Elastic Search", "SERP API", "Radix UI", "Leaflet", "PostgreSQL"],
    githubURI: "https://github.com/Prajwal-S-Venkatesh/StartupSync"
  },
  {
    title: "Wisdom",
    imgURI:
      "https://i.ibb.co/JxC96LT/wisdom-ai-prajwalsv-dev-i-Pad-Pro.png",
    content: [
      "A Saas based productive AI tool for productive content generation",
      "Support auth using Clerk, image/video/audio/code generation using gpt-3.5 model",
      "UI powered by shadcn and hosted on Vercel with Github CI/CD",
    ],
    tags: ["NextJs", "Clerk", "Shadcn UI", "GPT-3.5 turbo"],
    githubURI: "https://github.com/Prajwal-S-Venkatesh/wisdom-saas",
    liveURI: "https://wisdom-ai.prajwalsv.dev/",
  },
  {
    title: "Supply Stream",
    imgURI:
      "https://i.ibb.co/y58g6fr/192-168-141-4-3000-i-Pad-Pro-1.png",
    content: [
      "A simple platform that allows users to consume, upload, import, create and record media content.",
    ],
    tags: ["Javascript", "NodeJs", "Ejs", "Tailwind CSS", "Vimeo API"],
    githubURI: "https://github.com/Prajwal-S-Venkatesh/stripe-go-api",
  },
  {
    title: "CodeHQ",
    imgURI:
      "https://i.ibb.co/ZMSJYpd/codehq-pro.png",
    content: [
      "A minimal clone of stackblitz, which allows you to write code and run the server in the browser!",
      "Code editor powered by Codemirror and terminal powered by xterm.js",
      "Hosted on Raspberry Pi 4B with cloudflare tunnel",
    ],
    tags: ["Codemirror", "Vite", "xTerm", "Web Components"],
    liveURI: "https://codehq.pro/",
  },
  {
    title: "Play-On-Scroll",
    imgURI:
      "https://i.ibb.co/JQD98wZ/wsl-localhost-Ubuntu-home-psv-wsl2-codespace-apple-airpods-website-clone-index-html-i-Pad-Pro.png",
    content: [
      "Control the video playback speed based on the mouse scroll position on the website.",
    ],
    tags: ["HTML5", "CSS3", "Javascript"],
    githubURI: "https://github.com/Prajwal-S-Venkatesh/Play-On-Scroll"
  },

];

const Work = ({ id, sectionIndex, sectionTitle }) => {
  const { colorMode } = useColorMode();

  const handleViewMore = () =>
    window.open(
      "https://github.com/Prajwal-S-Venkatesh?tab=repositories",
      "_blank"
    );

  return (
    <StackWithTitleWrapper
      id={id}
      sectionIndex={sectionIndex}
      sectionTitle={sectionTitle}
      maxWidth={{
        base: "calc(100vw - 200px)",
        xs: "100%",
        sm: "100%",
      }}
      display={{
        base: "block",
        xs: "contents",
      }}
    >
      <Grid w="100%" h="100%" templateColumns={["1fr", "1fr", "1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap={6}>
        {ProjectsData.map((project, index) => (
          <GridItem
            key={index}
            border="1px solid #ffffff1a"
            boxShadow="0 0 #0000,0 0 #0000,0 8px 16px rgb(0 0 0/0.4)"
            p="24px"
            borderRadius="16px"
            w="100%"
            h="max-content"
            bg={primaryBackgroundColor}
          >
            <Box
              w="100%"
              sx={{
                height: {
                  xs: "280px",
                  sm: "250px",
                  md: "300px",
                  lg: "350px",
                  xl: "400px",
                }
              }}
              p="1"
              zIndex="2"
              overflow="hidden"
              borderRadius="16px"
              mb={2}
              bg="#13162d"
              bgImage='url("https://i.ibb.co/dB2V3vC/bg.png")'
              bgSize="cover"
              bgPos="center"
              bgRepeat="no-repeat"
              position="relative"
              display="flex"
              justifyContent="center"
            >
              <Image src={project.imgURI} alt={project.title} width={["250px", "280px", "340px", "340px", "280px", "280px", "380px"]} bottom={0} position="absolute" borderRadius="16px 16px 0 0" />
            </Box>

            <Text ml={1} mt={8} as="h1" color="#fff" fontSize="26px" fontWeight="bold">
              {project.title}
            </Text>
            <Text ml={1} color={colorSecondary[colorMode]} fontSize="20px" mt={2}>
              {project.content[0]}
            </Text>


            <Flex mt={4} justify="space-between">
              <Flex mt={4}>
                {project.tags.map((skill, index) => (
                  <Tooltip key={index} label={skill} aria-label={skill}>
                    <Image
                      key={index}
                      size="sm"
                      width={10}
                      height={10}
                      src={skillIconMap[skill]}
                      alt={skill}
                      sx={{
                        cursor: "pointer",
                        padding: "4px",
                        borderRadius: "50%",
                        marginLeft: "-5px",
                        border: "1px solid #ffffff50",
                        background: "#3e3f46",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    />
                  </Tooltip>
                ))}
              </Flex>

              <Flex
                alignItems="center"
                justifyContent="flex-end"
                width="80px"
                gap="6"
                my={6}
              >
                {project.githubURI &&
                  <Tooltip label="Github" aria-label="View on Github" hasArrow>
                    <Link href={project.githubURI} isExternal>
                      <Center>
                        <Icon
                          as={FaGithub}
                          mx="2px"
                          w={6}
                          h={6}
                          color={colorSecondary[colorMode]}
                          _hover={{
                            color: primaryDarkColor,
                          }}
                        />
                      </Center>
                    </Link>
                  </Tooltip>
                }
                {project.liveURI && <Link href={project.liveURI} isExternal>
                  <Center>
                    <ExternalLinkIcon
                      mx="2px"
                      w={6}
                      h={6}
                      color={colorSecondary[colorMode]}
                      _hover={{ color: primaryDarkColor }}
                    />
                  </Center>
                </Link>}
              </Flex>
            </Flex>


          </GridItem>
        ))}
      </Grid>

      <Center w="100%">
        <Button
          borderColor={colorMode === "light" ? "blue.500" : "initial"}
          variant="link"
          color={colorMode === "light" ? "gray.700" : "primary"}
          onClick={handleViewMore}
        >
          View More
        </Button>
      </Center>
    </StackWithTitleWrapper>
  );
};

export default Work;
