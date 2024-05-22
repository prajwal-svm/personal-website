import React from "react";
import {
    Box,
    Image,
    Tooltip,
    Heading,
    Divider,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { primaryDarkColor, primaryBackgroundColor } from "../styles/theme";
import Masonry from "react-masonry-css";
import { skills, skillsCategory as groupedSkills, skillIconMap } from "../data/content";

const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap || 0}px;
  flex-wrap: wrap;
`;

const Skills = ({ id }) => {

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };

    return (
        <Box
            id={id}
            bg={`radial-gradient(circle, ${primaryBackgroundColor}99 100%, transparent 100%)`}
            maxWidth="calc(100vw - 200px)"
            mx="auto"
            className="shooting-stars"

        >
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {Object.keys(groupedSkills).map((category, index) => (
                    <Box
                        key={index}
                        p={4}
                        borderWidth={1}
                        borderRadius="lg"
                        overflow="hidden"
                        bg="#111928bf"
                        backdropBlur={20}
                        sx={{
                            "&:hover": {
                                transform: "scale(1.05)",
                            }
                        }}
                        mb={4}
                    >
                        <Heading as="h3" size="md" mb={4} color="white" textAlign="center" sx={{
                            textTransform: "capitalize",
                            textShadow: "1px 1px 2px #000000"
                        }}>
                            {category}
                        </Heading>
                        <Divider borderColor="#ffffff20" my="4" />
                        <FlexBox gap={30} >
                            {groupedSkills[category].map((skill, idx) => (
                                <Tooltip
                                    key={idx}
                                    label={skill}
                                    fontSize="lg"
                                    hasArrow
                                >
                                    <Image
                                        boxSize="60px"
                                        src={skillIconMap[skill]}
                                        alt={skill}
                                        sx={{
                                            cursor: "pointer",
                                            "&:hover": {
                                                transform: "scale(1.5)",
                                            }
                                        }}
                                    />
                                </Tooltip>
                            ))}
                        </FlexBox>
                    </Box>
                ))}
            </Masonry>
        </Box>
    );
};

export default Skills;
