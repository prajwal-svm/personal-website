import React from "react";
import {
  useColorMode,
  Button,
  Flex,
  Box,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  keyframes
} from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import DarkModeSwitch from "./DarkModeSwitch";

import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaBusinessTime, FaHome, FaUser } from "react-icons/fa";
import { MdComputer, MdOutlineEmail, MdWeb } from "react-icons/md";
import Footer from "./Footer";
import { CONTAINER_DATA, RESUME_URI } from "../data/content";
import { primaryDarkColor } from "../styles/theme";

const LinksToIcon = {
  FaHome: <FaHome />,
  FaUser: <FaUser />,
  FaBusinessTime: <FaBusinessTime />,
  MdComputer: <MdComputer />,
  MdOutlineEmail: <MdOutlineEmail />,
  MdWeb: <MdWeb />,
};

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  transition: height 0.5s, line-height 0.5s;
`;

const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
`;


const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleDownloadResume = () => {
    window?.splitbee?.track?.("Button Click", {
      type: "Resume",
    });

    window.open(RESUME_URI, "_blank");
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxW={["100%", "100%", "100%", "100%", "calc(100vw - 80px)"]}
        w="100%"
        bg="transparent"
        as="nav"
        px={[0, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <NextLink href="/" passHref>
          <FlexBox
            w="80px"
            h="80px"
            alignItems="center"
            justifyContent="center"
            _hover={{ cursor: "pointer" }}
          >
            <Box position="absolute">
              <svg height="80" width="80" viewBox="0 0 56 56">
                <path
                  d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z"
                  fill={primaryDarkColor}
                ></path>
                <path
                  d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z"
                  fill={primaryDarkColor}
                ></path>
                <path
                  d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z"
                  fill={primaryDarkColor}
                ></path>
              </svg>
            </Box>
            <Avatar
              color="white"
              bg="none"
              size="lg"
              name={CONTAINER_DATA.avatar.name}
              src={CONTAINER_DATA.avatar.uri}
            />
          </FlexBox>
        </NextLink>

        <FlexBox display={["none", "none", "none", "none", "block"]}
          sx={{
            background: "#111928bf",
            padding: "12px 24px",
            borderRadius: "12px",
            border: "1px solid #ffffff20",
            backdropFilter: "blur(16px) saturate(180%)",
          }}
        >
          {CONTAINER_DATA.navLinks.map((link, index) => (
            <NextLink key={index} href={link.href} passHref>
              <Button
                // isActive={router.asPath === link.href}
                as="a"
                variant="ghost"
                color={CONTAINER_DATA.colorVariant.color[colorMode]}
                mx={1}
                p={[1, 2, 4]}
                _hover={{
                  backgroundColor:
                    CONTAINER_DATA.colorVariant.navHoverBg[colorMode],
                }}
              >
                {link.title}
              </Button>
            </NextLink>
          ))}
        </FlexBox>

        <FlexBox display="flex" gap={4}>
          <GradientButton
            display={["none", "none", "block", "Block", "block"]}
            onClick={handleDownloadResume}
          >RESUME</GradientButton>

          {/* <DarkModeSwitch /> */}
        </FlexBox>
        <Box display={["block", "block", "block", "block", "none"]}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="nav"
              icon={<HamburgerIcon />}
              variant="outline"
              color={CONTAINER_DATA.colorVariant.color[colorMode]}
            />
            <MenuList>
              {CONTAINER_DATA.navLinks.map((link, index) => (
                <NextLink key={index} href={link.href} passHref>
                  <MenuItem
                    icon={LinksToIcon[link.icon]}
                    color={CONTAINER_DATA.colorVariant.color[colorMode]}
                    bg="transparent"
                  >
                    {link.title}
                  </MenuItem>
                </NextLink>
              ))}
              {/* <MenuItem
                color={CONTAINER_DATA.colorVariant.color[colorMode]}
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
              >
                Toggle Theme
              </MenuItem> */}
            </MenuList>
          </Menu>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        color={CONTAINER_DATA.colorVariant.color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}

      >
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Container;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GradientButton = ({ children, ...props }) => {
  return (
    <Button
      bg="#004fff"
      borderRadius="50px"
      color="white"
      padding="14px 24px"
      width="120px"
      height="50px"
      boxShadow="0 2px 6px 0 rgb(38 99 235 / 30%)"
      _hover={{
        bg: '#007fff',
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
