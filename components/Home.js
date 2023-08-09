import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { motion } from "framer-motion";
import { BsMouse } from "react-icons/bs";
import { HOME_DATA, RESUME_URI } from "../data/content";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const MotionBox = motion(Box);

const Home = () => {
  const { colorMode } = useColorMode();

  const handleDownloadResume = () => {
    window.splitbee.track("Button Click", {
      type: "Resume",
    });

    window.open(RESUME_URI, "_blank");
  };

  return (
    <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="60px auto 30px auto"
      maxW="750px"
      w="100%"
      px={2}
    >
      <Box w="100%" h="max(100vh - 155px, 590px)">
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="750px"
        >
          <Heading
            color={HOME_DATA.colorSwitch.titleA[colorMode]}
            as="h5"
            size="lg"
            mb={3}
          >
            {HOME_DATA.titleA}
          </Heading>
          <Heading
            as="h1"
            size="3xl"
            mb={4}
            color={HOME_DATA.colorSwitch.titleB[colorMode]}
          >
            {HOME_DATA.titleB}
          </Heading>
          <RoughNotationGroup>
            <Heading
              as="h2"
              size="xl"
              mb={6}
              color={HOME_DATA.colorSwitch.titleC[colorMode]}
            >
              Weaving the web, one pixel at a time...
            </Heading>
            <Text
              color={HOME_DATA.colorSwitch.titleDescription[colorMode]}
              fontSize="xl"
              mb={8}
              lineHeight={9}
            >
              Originally from Bengaluru, now a Chicago resident. I have a
              passion for molding pixels into perfection. I&apos;ve been
              reshaping online landscapes for over three years. Beyond the codes
              and clouds, I&apos;m navigating the academic corridors at Illinois
              Tech, delving into the frontiers of software development in my
              master&apos;s quest.
            </Text>
          </RoughNotationGroup>

          <Button
            colorScheme={HOME_DATA.colorSwitch.ctaBtn[colorMode]}
            variant={HOME_DATA.colorSwitch.ctaVariant[colorMode]}
            size="lg"
            onClick={handleDownloadResume}
          >
            {HOME_DATA.ctaText}
          </Button>
        </Flex>
        <MotionBox
          as="aside"
          animate={{
            opacity: [0, 1],
            marginTop: ["0", "100px"],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 1],
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            opacity: 0,
            delay: 5,
          }}
          display="flex"
        >
          <Box w="100%" display="flex" mt={10} alignItems="center">
            <NextLink href="/#about" passHref>
              <Icon
                as={BsMouse}
                m="auto"
                w={10}
                h={10}
                color={HOME_DATA.colorSwitch.scrollMouseIcon[colorMode]}
                _hover={{ cursor: "pointer" }}
              />
            </NextLink>
          </Box>
        </MotionBox>
      </Box>
    </Stack>
  );
};

export default Home;
