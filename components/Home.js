import React from "react";
import {
  Box,
  Link,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Divider,
  useColorMode,
  Tag,
  keyframes
} from "@chakra-ui/react";
import NextLink from "next/link";

import { motion } from "framer-motion";
import { BsMouse } from "react-icons/bs";
import { HOME_DATA, RESUME_URI } from "../data/content";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaCodepen } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FOOTER } from "../data/content";
import { primaryBackgroundColor } from "../styles/theme";

const LinksToIcon = {
  FaInstagram: FaInstagram,
  FaTwitter: FaTwitter,
  FaGithub: FaGithub,
  FaLinkedinIn: FaLinkedinIn,
  MdMailOutline: MdMailOutline,
  FaCodepen: FaCodepen,
};

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
      as="section"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="60px auto 30px auto"
      maxW="calc(100vw - 80px)"
      w="100%"
      className="section"
      bg={`radial-gradient(circle, ${primaryBackgroundColor}99 80%, transparent 100%)`}
    >
      <Box w="100%" h={{
        xs: "850px",
        sm: "max(100vh - 155px, 600px)",
      }}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <RainbowTag>Software Engineer</RainbowTag>

          <Heading
            as="h1"
            fontSize={['3xl', '4xl', '5xl', '6xl']}
            mb={4}
            color={HOME_DATA.colorSwitch.titleB[colorMode]}
            width={{
              xs: "100%",
              sm: "auto",
            }}
            align={{
              xs: "justify",
              sm: "center"
            }}
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
              Weaving innovation into every pixel...
            </Heading>
            <Text
              color={HOME_DATA.colorSwitch.titleDescription[colorMode]}
              fontSize="xl"
              mb={8}
              lineHeight={9}
              maxW={{
                xs: "100%",
                sm: "800px"
              }}
              align={{
                xs: "justify",
                sm: "center"
              }}
            >

              Prajwal is a  <RoughNotation type="underline" show="true" >
                skilled software engineer
              </RoughNotation>
              &nbsp; with a passion for building high-quality web applications. He has a proven ability to seamlessly transition between frontend and backend development, bringing projects to life from &nbsp;
              <RoughNotation type="underline" show="true" >
                concept to completion.
              </RoughNotation>
              &nbsp;
              His expertise spans a range of technologies, enabling him to build robust and
              &nbsp;
              <RoughNotation type="underline" show="true" >
                user-centric solutions
              </RoughNotation> &nbsp; for both web and mobile platforms.
            </Text>
          </RoughNotationGroup>

          <Divider
            orientation="horizontal"
            borderColor={FOOTER.colorSwitch.divider[colorMode]}
            maxW="800px"
          />

          <Flex pb={2} mt={8} w="320px" justifyContent="space-between" alignItems="center" gap={6}>
            {FOOTER.socialMediaHandles.map((item, index) => (
              <Link
                key={index}
                color={FOOTER.colorSwitch.link[colorMode]}
                href={item.href}
                // sx={{
                //   border: '1px solid #fff',
                //   borderRadius: '12px',
                //   padding: '10px',
                //   width: '60px',
                //   height: '60px',
                //   display: 'flex',
                //   justifyContent: 'center',
                //   alignItems: 'center',
                // }}
                isExternal
              >
                <Icon
                  w={8}
                  h={8}
                  as={LinksToIcon[item.icon]}
                  color={FOOTER.colorSwitch.link[colorMode]}
                  _hover={{ color: FOOTER.colorSwitch.linkHover[colorMode] }}
                />
              </Link>
            ))}
          </Flex>

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
          display={{
            xs: "none",
            sm: "flex"
          }}
        >
          <Box w="100%" display="flex" mt={10} alignItems="center" justifyContent="center" h={20}>
            <NextLink href="/#about" passHref>
              <a>
                <BsMouse
                  m="auto"
                  w={20}
                  h={20}
                  color={HOME_DATA.colorSwitch.scrollMouseIcon[colorMode]}
                  _hover={{ cursor: "pointer" }}
                />
              </a>
            </NextLink>
          </Box>
        </MotionBox>
      </Box>
    </Stack>
  );
};

export default Home;

const rotateGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const RainbowTag = ({ children, ...props }) => {
  return (
    <Box
      p="2px"
      borderRadius="full"
      bg="linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red, orange, yellow, green, blue, indigo, violet)"
      bgSize="200% 200%"
      animation={`${rotateGradient} 10s linear infinite`}
      display={
        [
          "none",
          "none",
          "inline-block",
          "inline-block",
          "inline-block",
        ]
      }
      mb={4}
      mr={
        {
          xs: "auto",
          sm: 0,
          md: 0,
          lg: 0,
          xl: 0,
          "2xl": 0,
        }
      }
    >
      <Tag
        bg="black"
        color="white"
        px={4}
        py={2}
        borderRadius="full"
        fontSize="sm"
        {...props}
      >
        {children}
      </Tag>
    </Box>
  );
};