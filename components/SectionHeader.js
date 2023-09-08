import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { primaryBackgroundColor, primaryDarkColor } from "../styles/theme";

const IndexSpan = styled.span(
  (props) => `
    color: ${props.color}; 
    font-weight: 700;
    font-size: 26px;
`
);

const StyledDiv = styled.div(
  (props) => `
    background: ${props.bgColor};
    padding-right: 16px;
    z-index: 5;
`
);

const StyledHeading = styled(Heading)`
  display: flex;
  align-items: center;
  width: 100%;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background: ${(props) => props.linebg};
    right: 0;
    margin-top: 10px;
    position: absolute;
  }
`;

const colorSecondary = {
  light: "gray.700",
  dark: "blue.50",
};

const SectionHeader = ({ sectionIndex, sectionTitle }) => {
  const { colorMode } = useColorMode();

  return (
    <Box w="100%" style={{ position: "relative" }}>
      <StyledHeading
        as="h2"
        size="2xl"
        linebg={colorMode === "light" ? "lightgray" : primaryDarkColor}
      >
        <StyledDiv
          bgColor={colorMode === "light" ? "white" : primaryBackgroundColor}
        >
          <IndexSpan color={primaryDarkColor}>0{sectionIndex}.</IndexSpan>
          &nbsp;
          <Text as="span" color={colorSecondary[colorMode]}>
            {sectionTitle}
          </Text>
        </StyledDiv>
      </StyledHeading>
    </Box>
  );
};

export default SectionHeader;
