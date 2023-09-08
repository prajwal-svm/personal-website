import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
  color,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import StackWithTitleWrapper from "./StackWithTitleWrapper";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

const colorSecondary = {
  light: "#ccd6f6",
  dark: "purple.100",
};

const ProjectsData = [
  {
    isFeatured: true,
    title: "Wisdom",
    imgURI:
      "https://raw.githubusercontent.com/Prajwal-S-Venkatesh/wisdom-saas/main/img/dashboard.png",
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
    isFeatured: true,
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
    isFeatured: true,
    title: "Webfolio",
    imgURI:
      "https://raw.githubusercontent.com/Prajwal-S-Venkatesh/personal-website/main/assets/home_view.png",
    content: [
      "Personal website (a.k.a Webfolio) and blog built using NextJs",
      "Leverages ChakraUIs components and icons to present an exceptional UI",
      "Blog content rendered by NextMDX, Comments powered by Utterances and Hosted on Vercel with Github CI/CD",
    ],
    tags: ["Javascript", "ReactJs", "NextJs", "ChakraUI", "EmailJs"],
    githubURI: "https://github.com/Prajwal-S-Venkatesh/personal-website",
    liveURI: "https://prajwalsv.dev/",
  },
  {
    isFeatured: true,
    title: "Stripe Go API",
    imgURI:
      "https://www.menabytes.com/wp-content/uploads/2019/02/Stripe-Logo.png",
    content: [
      "Backend APIs for Stripe Payment Gateway Integration implemented in GoLang",
      "Currently supports 4 simple APIs",
      "Can create charge, capture the charge, create refund and get a list of all charges",
    ],
    tags: ["Go", "MakeFile", "Stripe-Go", "Mux", "Postman"],
    githubURI: "https://github.com/Prajwal-S-Venkatesh/stripe-go-api",
    liveURI: "https://github.com/Prajwal-S-Venkatesh/stripe-go-api",
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
    >
      <Grid w="100%" h="100%" templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]} gap={6}>
        {ProjectsData.map((project, index) => (
          <GridItem
            key={index}
            w="100%"
            minH={["450", "450", "400", "450"]}
            h="max-content"
            boxShadow="xl"
            rounded="md"
            backgroundImage={project.imgURI}
            backgroundPosition="center"
            backgroundSize="100% 100%"
            objectFit="center"
            position="relative"
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.05)",
              "&::after": {
                content: "''",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                bg: "#2563ebe0",
                zIndex: "1",
              },
              "&::before": {
                content: "''",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                border: "2px solid #2563eb",
                zIndex: "2",
              },
              "& *": {
                zIndex: "3",
                color: "gray.50",
              },
              "& h2": {
                textShadow: "0 0 2px #fff",
              }
            }}
          >
            <Box
              w="100%"
              h="100%"
              bg="#2563ebe0"
              position="absolute"
              zIndex="1"
            />
            <Box w="100%" h="100%" p="10" position="absolute" zIndex="2">
              {project.isFeatured && (
                <Text color={colorSecondary[colorMode]} fontSize="xs">
                  Featured Project
                </Text>
              )}
              <Heading color={colorSecondary[colorMode]} size="xl">
                {project.title}
              </Heading>

              <List spacing={2} mt={6} size="xs">
                {project.content.map((text) => (
                  <ListItem key={text} color={colorSecondary[colorMode]} display="flex">
                    <ListIcon
                      as={ChevronRightIcon}
                      color={"primaryDarkColor"}
                      w="5"
                      h="5"
                    />
                    <Text color={colorSecondary[colorMode]} fontSize="xs" ml="-2.5">
                      {text}
                    </Text>
                  </ListItem>
                ))}
              </List>

              <Box mt={4}>
                {project.tags.map((tag) => (
                  <Tag colorScheme={colorMode === 'light' ? "green" : "gray"} key={tag} mt={4} mr={4} size="sm">
                    <Text color={colorMode === 'light' ? "green" : colorSecondary[colorMode]} fontSize="xs">
                      {tag}
                    </Text>
                  </Tag>
                ))}
              </Box>

              <Flex
                alignItems="center"
                justifyContent="space-between"
                width="80px"
                my={6}
              >
                {project.githubURI && <Link href={project.githubURI} isExternal>
                  <Center>
                    <Icon
                      as={FaGithub}
                      mx="2px"
                      w={6}
                      h={6}
                      color={colorSecondary[colorMode]}
                      _hover={{
                        color: "gray.700",
                      }}
                    />
                  </Center>
                </Link>}
                <Link href={project.liveURI} isExternal>
                  <Center>
                    <ExternalLinkIcon
                      mx="2px"
                      w={6}
                      h={6}
                      color={colorSecondary[colorMode]}
                      _hover={{ color: "gray.700" }}
                    />
                  </Center>
                </Link>
              </Flex>
            </Box>
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
