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
    margin-right: 17px;

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
      margin-right: 8px;
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
    >
      <Grid
        templateRows="repeat(2, 1fr)"
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
        </GridItem>
        <GridItem
          display={["none", "none", "none", "flex"]}
          colSpan={[0, 0, 0, 2]}
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Tooltip
            label="Not all clouds in the sky come to bring darkness, some come to make your sunset more beautiful! :)"
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
        <GridItem colSpan={5}>
          <Text
            color={ABOUT_ME_DATA.colorSwitch.text[colorMode]}
            fontSize="xl"
            mb={3}
          >
            {ABOUT_ME_DATA.textB}
          </Text>
          <List spacing={3}>
            {ABOUT_ME_DATA.skills.map((skill, index) => (
              <ListItem
                key={index}
                display="flex"
                alignItems="flex-start"
                flexWrap="nowrap"
              >
                <ListIcon
                  mt={1.5}
                  key={index}
                  as={StarIcon}
                  color={primaryDarkColor}
                />
                <Text
                  fontSize="lg"
                  color={ABOUT_ME_DATA.colorSwitch.text[colorMode]}
                >
                  <Text as="span" fontWeight={600}>
                    {skill.title} -{" "}
                  </Text>
                  {skill.list.map((item, i) => (
                    <Tag key={i} mx="1" mt="1" colorScheme="gray">
                      {item}
                    </Tag>
                  ))}
                </Text>
              </ListItem>
            ))}
          </List>
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
