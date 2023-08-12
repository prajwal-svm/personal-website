import {
  Box,
  Grid,
  GridItem,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import StackWithTitleWrapper from "./StackWithTitleWrapper";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { primaryDarkColor } from "../styles/theme";
import { EXPERIENCE_DATA } from "../data/content";

const LeftPane = styled.div(
  ({ active, colorMode }) => `
    height: 46px;
    text-align: left;
    padding-left: ${active ? "23px" : "24px"};
    font-size: 18px;
    border-radius: 0 8px 8px 0;
    margin-top: 2px;
    line-height: 46px;
    max-width: 180px;
    margin-left: ${active && "-3px"};
    background: ${active && "rgba(255,255,255,0.16)"};
    border-left: ${
      active && `4px solid ${colorMode === "light" ? "gray" : primaryDarkColor}`
    };
    font-weight: ${active && "600"};

    &:hover{
        cursor: pointer;
        background: rgba(255,255,255,0.16);
        color: white;
        border-left: ${`4px solid ${
          colorMode === "light" ? "gray" : primaryDarkColor
        }`};
        padding-left: 23px;
        margin-left: -3px;
        transition: unset;

        p {
            color: ${!active && primaryDarkColor};
        }
    }
`
);

const Experience = ({ id, sectionIndex, sectionTitle }) => {
  const { colorMode } = useColorMode();
  const [active, setActive] = useState(EXPERIENCE_DATA.data[0]);

  function ActiveContent({ active }) {
    return (
      <>
        <Heading
          as="h3"
          size="lg"
          color={EXPERIENCE_DATA.colorVariant.titleColor[colorMode]}
        >
          {active.designation}
          <Text
            as="span"
            color={colorMode === "light" ? "gray.700" : "blue.50"}
          >
            &nbsp;@&nbsp;
          </Text>
          <Link
            color={colorMode === "light" ? "gray.700" : "blue.50"}
            href={active.link}
          >
            {active.company}
          </Link>
        </Heading>
        <Text
          mb="4"
          px="1.5"
          color={EXPERIENCE_DATA.colorVariant.colorSecondaryDuration[colorMode]}
        >
          {active.from} - {active.to}
        </Text>

        <List spacing={3}>
          {active.roleDescription.map((data, index) => (
            <ListItem
              key={index}
              color={EXPERIENCE_DATA.colorVariant.colorSecondary[colorMode]}
            >
              <ListIcon as={CheckCircleIcon} color={primaryDarkColor} />
              {data}
            </ListItem>
          ))}
        </List>

        <Box mt={6}>
          {active.skills.map((skill, index) => (
            <Tag key={index} mr={4} mt={4} colorScheme="gray">
              {skill}
            </Tag>
          ))}
        </Box>
      </>
    );
  }

  function DataTabs({ data, colorMode }) {
    return (
      <Tabs
        display={["block", "block", "block", "none"]}
        width="100%"
        colorScheme={primaryDarkColor}
      >
        <TabList
          height="20"
          fontWeight={600}
          display="flex"
          flexDirection="row"
          overflowX="scroll"
          overflowY="hidden"
        >
          {data.map((tab, index) => (
            <Tab
              fontSize="xl"
              color={tab.key === active.key ? "primary" : "blue.0"}
              w="100%"
              whiteSpace="nowrap"
              key={data.key || index}
              onClick={() => setActive(EXPERIENCE_DATA.data[index])}
              active={active.key === data.key}
              colorMode="dark"
            >
              {tab.company}
            </Tab>
          ))}
        </TabList>
        <TabPanels overflowY="scroll">
          {data.map((tab, index) => (
            <TabPanel p={4} key={index}>
              <ActiveContent active={active} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  }

  return (
    <StackWithTitleWrapper
      id={id}
      sectionIndex={sectionIndex}
      sectionTitle={sectionTitle}
    >
      <Grid
        display={["none", "none", "none", "grid"]}
        width="100%"
        minH="500px"
        templateColumns="repeat(5, 1fr)"
        pt={12}
      >
        <GridItem
          colSpan={1}
          width="200px"
          height="fit-content"
          borderLeft={`2px solid ${"#1e293b"}`}
        >
          {EXPERIENCE_DATA.data.map((data) => (
            <LeftPane
              key={data.key}
              onClick={() => setActive(data)}
              active={active.key === data.key}
              colorMode="dark"
            >
              <Text
                color={
                  active.key === data.key
                    ? "primary"
                    : EXPERIENCE_DATA.colorVariant.colorSecondary[colorMode]
                }
              >
                {data.company}
              </Text>
            </LeftPane>
          ))}
        </GridItem>
        <GridItem colSpan={4} width="100%" minH="80px">
          <ActiveContent active={active} />
        </GridItem>
      </Grid>

      <DataTabs data={EXPERIENCE_DATA.data} colorMode={colorMode} />
    </StackWithTitleWrapper>
  );
};

export default Experience;
