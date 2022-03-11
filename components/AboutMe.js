import { Box, Grid, GridItem, Image, List, ListIcon, ListItem, Text, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import StackWithTitleWrapper from './StackWithTitleWrapper'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { primaryDarkColor } from '../styles/theme'


const colorSecondary = {
    light: 'gray.600',
    dark: '#8892b0'
}

const Skills = [
    'Programming Languages - JavaScript, TypeScript, Python, C++, Go',
    'Frontend - ReactJS, NextJS',
    'Backend - NodeJS, ExpressJS',
    'Databases - SQL, MongoDB, Redis, Elastic Search',
    'Build Tools - Webpack, Snowpack, Gulp',
    'Testing - Jest, React Testing Library, Cypress',
    'Cloud - AWS (EC2, S3, Cloudwatch, SQS, SNS)',
    'CI/CD - Jenkins CI, Docker',
]

const StyledBox = styled(Box)`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
        z-index: 6;
    }

    &::after {
        content: '';
        width: 250px;
        height: 250px;
        background: transparent;
        border: ${props => props.colorMode === 'light' ? '10px double gray' : `10px double ${primaryDarkColor}`};
        right: 0;
        margin-top: 40px;
        margin-right: 0px;
        position: absolute;
        z-index: 2;
        transition: margin 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out;
    }

    &:hover{
        &::after {
            width: 260px;
            height: 260px;
            margin-top: 0px;
            margin-right: 17px;
        }
    }
`

const AboutMe = ({ id, sectionIndex, sectionTitle }) => {

    const { colorMode } = useColorMode()

    return <StackWithTitleWrapper id={id} sectionIndex={sectionIndex} sectionTitle={sectionTitle}>

        <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
        >
            <GridItem colSpan={[5, 5, 5, 3]} >
                <Text color={colorSecondary[colorMode]} fontSize='xl' mb={2} textAlign='justify'>
                    Hey there! I&lsquo;m a Software Engineer based out of Bengaluru, India, with ~3 years of experience in building scalable applications with exceptional digital experiences.
                    I&lsquo;m an effective and driven software engineering professional,
                    offering a wealth of expertise. I am an analytical thinker with a proven track record of delivering
                    excellent results.
                    I&lsquo;m highly skilled in building an end-to-end MERN stack solution for your company!
                    I&lsquo;m currently working at Certa as a Mid Frontend Engineer,
                    I&lsquo;ve been fascinated about Open Source Projects since the inception of my coding journey.
                </Text>
            </GridItem>
            <GridItem display={['none', 'none', 'none', 'flex']} colSpan={[0, 0, 0, 2]} alignItems='center' justifyContent='center' position='relative'>
                <StyledBox pr="10px" colorMode={colorMode}>
                    <Image boxSize='250px' src={process.env.NEXT_PUBLIC_ABOUT_IMAGE} alt='Prajwal S Venktesh' />
                </StyledBox>
            </GridItem>
            <GridItem colSpan={5}>
                <Text color={colorSecondary[colorMode]} fontSize='xl' mb={3}>Here are a few technologies I&lsquo;ve been working with recently (and in the past):</Text>
                <List spacing={3}>
                    {
                        Skills.map((skill, index) => <ListItem key={index} display="flex" alignItems='center' flexWrap='nowrap'>
                            <ListIcon as={ArrowForwardIcon} color={colorMode === 'light' ? 'gray.700' : primaryDarkColor} />
                            <Text fontSize='lg' color={colorSecondary[colorMode]}>{skill}</Text>
                        </ListItem>)
                    }
                </List>
            </GridItem>
        </Grid>

    </StackWithTitleWrapper>
}

export default AboutMe