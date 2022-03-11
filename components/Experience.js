import { Box, Grid, GridItem, Heading, Link, List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import StackWithTitleWrapper from './StackWithTitleWrapper'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { primaryDarkColor } from '../styles/theme'

const colorSecondary = {
    light: 'gray.600',
    dark: '#8892b0'
}

const titleColor = {
    light: 'gray.600',
    dark: '#ccd6f6'
}

const ExperienceData = [
    {
        key: '0',
        company: 'Certa',
        from: 'March 2022',
        to: 'Present',
        designation: 'Mid Frontend Engineer',
        roleDescription: [
            'Working on building a no-code platform',
            'Write modern, performant, maintainable code for a diverse array of client and internal projects',
            'Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, React, RTL',
            'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'],
        link: 'https://www.getcerta.com/',
        skills: ['JavaScript', 'TypeScript', 'ReactJs', 'React Testing Library']
    },
    {
        key: '1',
        company: 'GoGuardian',
        from: 'Aug 2020',
        to: 'March 2022',
        designation: 'Software Engineer',
        roleDescription: [
            'Develop and deliver core application features for Edulastic',
            'Work on application feature such as Question Types, Item Banks, Assignments, Assessements, Playlist, Subscription and many more...',
            'Extensive work on improving application load time and performance',
            'Write e2e tests for the features developed in each sprint cycle',
        ],
        link: 'https://www.goguardian.com/',
        skills: ['JavaScript', 'ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB', 'Firebase', 'Redis', 'Umzug']
    },
    {
        key: '2',
        company: 'Snapwiz',
        from: 'Aug 2019',
        to: 'Aug 2020',
        designation: 'Associate Software Engineer',
        roleDescription: [
            'Develop and deliver application features for Edulastic',
            'Work on application feature such as Question Types, Assignments & Assessements for various supported roles',
            'Work on resolving production and regression bugs from previous releases leveraging cloudwatch logs, oplogs & sentry',
            'Work on development of complex tasks involving integration of 3rd party feature support',
        ],
        link: 'https://edulastic.com/',
        skills: ['JavaScript', 'ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB']
    },
    {
        key: '3',
        company: 'Lycan 3D',
        from: 'Jan 2019',
        to: 'Feb 2019',
        designation: 'Fullstack Developer Intern',
        roleDescription: [
            'Work on solely designing, developing and deploying of an E-Commerce application for the company from ground up',
            'Work on frontend for building exceptional digital experiences where users could view a 3D models of mechanical parts',
            'Work on setting up backend service for persisting application data',
            'Integrate PayTM as payment gateway for purchase transactions pertaining to application',
        ],
        link: 'http://lycan3d.com/',
        skills: ['HTML5', 'CSS3', 'WebGL', 'JavaScript', 'PHP', 'AJAX', 'MySQL', 'MariaDB', 'Apache Server']
    },
    {
        key: '4',
        company: 'Netchronix',
        from: 'Aug 2018',
        to: 'Nov 2018',
        designation: 'Frontend Intern',
        roleDescription: [
            'Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript, and PHP',
            'Manually tested sites across various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
            'Designed logos, menu-cards, webpages for various clients such as MeltIn Cafe, JC Constructions, Talent Clouds and many more...'
        ],
        link: 'http://netchronix.com/',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'AJAX', 'Adobe Illustrator', 'Adobe Illustrator']
    },
]

const LeftPane = styled.div(({ active, colorMode }) => `
    height: 46px;
    text-align: left;
    padding-left: ${active ? '23px' : '24px'};
    font-size: 18px;
    border-radius: 0 8px 8px 0;
    margin-top: 2px;
    line-height: 46px;
    max-width: 180px;
    margin-left: ${active && '-3px'};
    background: ${active && 'rgba(255,255,255,0.16)'};
    border-left: ${active && `4px solid ${colorMode === 'light' ? 'gray' : primaryDarkColor}`};
    font-weight: ${active && '600'};

    &:hover{
        cursor: pointer;
        background: rgba(255,255,255,0.16);
        color: white;
        border-left: ${`4px solid ${colorMode === 'light' ? 'gray' : primaryDarkColor}`};
        padding-left: 23px;
        margin-left: -3px;
        transition: unset;

        p {
            color: ${!active && '#ccd6f6'};
        }
    }
`)

const Experience = ({ id, sectionIndex, sectionTitle }) => {

    const { colorMode } = useColorMode()
    const [active, setActive] = useState(ExperienceData[0])

    function ActiveContent({ active }) {
        return (
            <>
                <Heading as="h3" size="lg" color={titleColor[colorMode]}>
                    {active.designation}
                    <Text as='span' color={colorMode === 'light' ? 'gray.700' : 'primary'}>&nbsp;@&nbsp;</Text>
                    <Link color={colorMode === 'light' ? 'gray.700' : 'primary'} href={active.link}>
                        {active.company}
                    </Link>
                </Heading>
                <Text mb="4" px="1.5" color={colorSecondary[colorMode]}>{active.from} - {active.to}</Text>

                <List spacing={3}>
                    {
                        active.roleDescription.map((data, index) => <ListItem key={index} color={colorSecondary[colorMode]}>
                            <ListIcon as={CheckCircleIcon} color={colorMode === 'light' ? 'gray.700' : 'primary'} />
                            {data}
                        </ListItem>)
                    }

                </List>

                <Box mt={6}>
                    {
                        active.skills.map((skill, index) => <Tag key={index} mr={4} mt={4}>{skill}</Tag>)
                    }
                </Box>
            </>
        )
    }

    function DataTabs({ data, colorMode }) {
        return (
            <Tabs display={['block', 'block', 'block', 'none']} width='100%' colorScheme={colorMode === 'light' ? 'black' : 'teal'}>
                <TabList
                    height='20'
                    fontWeight={600}
                    display='flex'
                    flexDirection='row'
                    overflowX='scroll'
                    overflowY='hidden'
                >
                    {data.map((tab, index) => (
                        <Tab fontSize='xl' color w='100%' whiteSpace='nowrap' key={index}>
                            {tab.company}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels overflowY='scroll'>
                    {data.map((tab, index) => (
                        <TabPanel p={4} key={index}>
                            <ActiveContent active={tab} />
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        )
    }

    return <StackWithTitleWrapper id={id} sectionIndex={sectionIndex} sectionTitle={sectionTitle}>
        <Grid display={['none', 'none', 'none', 'grid']} width="100%" minH='500px' templateColumns='repeat(5, 1fr)' pt={12}>
            <GridItem
                colSpan={1}
                width="200px"
                height='fit-content'
                borderLeft={`2px solid ${colorMode === 'light' ? 'lightgray' : '#233554'}`}
            >
                {
                    ExperienceData.map((data) => <LeftPane key={data.key} onClick={() => setActive(data)} active={active.key === data.key} colorMode={colorMode}>
                        <Text color={active.key === data.key ? colorMode === 'light' ? 'gray.700' : 'primary' : colorSecondary[colorMode]}>{data.company}</Text>
                    </LeftPane>)
                }
            </GridItem>
            <GridItem colSpan={4} width="100%" minH='80px'>
                <ActiveContent active={active} />
            </GridItem>
        </Grid>


        <DataTabs data={ExperienceData} colorMode={colorMode} />

    </StackWithTitleWrapper >
}

export default Experience