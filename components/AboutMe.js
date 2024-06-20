import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  List,
  ListItem,
  ListIcon,
  Tag,
  Text,
  useColorMode,
  Tooltip,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import StackWithTitleWrapper from "./StackWithTitleWrapper";
import { primaryDarkColor } from "../styles/theme";
import { ABOUT_ME_DATA } from "../data/content";
import { StarIcon } from "@chakra-ui/icons";
import { primaryBackgroundColor } from "../styles/theme";

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 50%;

  img {
    z-index: 6;
    border-radius: 50%;
  }

  &::after {
    content: "";

    width: 260px;
    height: 260px;
    margin-top: 0px;
    margin-right: 72px;

    background: transparent;
    border: 10px double ${primaryDarkColor};
    right: 0;

    position: absolute;
    z-index: 2;
    transition: margin 0.5s ease-in-out, width 0.5s ease-in-out,
      height 0.5s ease-in-out;
    border-radius: 50%;
  }

  &:hover {
    &::after {
      width: 280px;
      height: 280px;
      margin-right: 62px;
    }
  }
`;

const AboutMe = ({ id, sectionIndex, sectionTitle }) => {
  const { colorMode } = useColorMode();

  return (
    <StackWithTitleWrapper
      id={id}
      sectionIndex={sectionIndex}
      sectionTitle={sectionTitle}
      bg={`radial-gradient(circle, ${primaryBackgroundColor}99 80%, transparent 100%)`}
      maxWidth="1024px"
    >
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={[5, 5, 5, 3]}>
          <Text
            color={ABOUT_ME_DATA.colorSwitch.text[colorMode]}
            fontSize="xl"
            mb={2}
            textAlign="justify"
          >
            {ABOUT_ME_DATA.textA}
          </Text>
          <Text
            color={ABOUT_ME_DATA.colorSwitch.text[colorMode]}
            fontSize="xl"
            mt={5}
            display={["block", "block", "block", "none"]}
          >
            As the digital landscape continues to evolve, I remain committed to
            pushing boundaries, ever eager to learn, adapt, and innovate!
          </Text>
        </GridItem>
        <GridItem
          display={["none", "none", "none", "flex"]}
          colSpan={[0, 0, 0, 2]}
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Tooltip
            label="Go where your curiosity takes you :)"
            fontSize="lg"
            hasArrow
            closeDelay={500}
          >
            <StyledBox pr="10px">
              <Image
                boxSize="250px"
                src={ABOUT_ME_DATA.img.uri}
                alt={ABOUT_ME_DATA.img.alt}
              />
            </StyledBox>
          </Tooltip>
        </GridItem>
        <GridItem
        display={["none", "none", "none", "block"]}
        colSpan={5}>
          <Text
            color={ABOUT_ME_DATA.colorSwitch.text[colorMode]}
            fontSize="xl"
            mt={5}
          >
            As the digital landscape continues to evolve, I remain committed to
            pushing boundaries, ever eager to learn, adapt, and innovate!
          </Text>
        </GridItem>
      </Grid>

    </StackWithTitleWrapper>
  );
};

export default AboutMe;
