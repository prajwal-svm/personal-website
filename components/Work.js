import { Box, Button, Center, Flex, Grid, GridItem, Heading, Icon, Link, List, ListIcon, ListItem, Tag, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import StackWithTitleWrapper from './StackWithTitleWrapper'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa'
import { primaryDarkColor } from '../styles/theme'

const colorSecondary = {
    light: '#ccd6f6',
    dark: '#ccd6f6'
}

const ProjectsData = [
    {
        isFeatured: true,
        title: 'Personal Blog',
        imgURI: 'https://mllj2j8xvfl0.i.optimole.com/Lsv2lkg.cHDL~36fa1/w:auto/h:auto/q:98/https://s15165.pcdn.co/wp-content/uploads/2018/05/blogger.jpg',
        content: [
            'Personal website and blog built using NextJs',
            'Leverages ChakraUIs components and icons to present an exceptional UI',
            'Hosted on Vercel with Github CI/CD'
        ],
        tags: ['Javascript', 'ReactJs', 'NextJs', 'ChakraUI', 'EmailJs'],
        githubURI: 'https://github.com/Prajwal-S-Venkatesh/personal-website',
        liveURI: 'https://prajwalsv.dev/'
    },
    {
        isFeatured: true,
        title: 'Stripe Go API',
        imgURI: 'https://www.menabytes.com/wp-content/uploads/2019/02/Stripe-Logo.png',
        content: [
            'Backend APIs for Stripe Payment Gateway Integration implemented in GoLang',
            'Currently supports 4 simple APIs',
            'Can create charge, capture the charge, create refund and get a list of all charges'
        ],
        tags: ['Go', 'MakeFile', 'Stripe-Go', 'Mux', 'Postman'],
        githubURI: 'https://github.com/Prajwal-S-Venkatesh/stripe-go-api',
        liveURI: 'https://github.com/Prajwal-S-Venkatesh/stripe-go-api'
    },
]


const Work = ({ id, sectionIndex, sectionTitle }) => {

    const { colorMode } = useColorMode()

    const handleViewMore = () => window.open('https://github.com/Prajwal-S-Venkatesh?tab=repositories', '_blank')

    return <StackWithTitleWrapper id={id} sectionIndex={sectionIndex} sectionTitle={sectionTitle}>
        <Grid w='100%' h='100%' templateColumns='repeat(1, 1fr)' gap={6}>
            {
                ProjectsData.map((project, index) => <GridItem
                    key={index}
                    w='100%'
                    minH={['600', '550', '450', '400']}
                    h='max-content'
                    boxShadow='xl'
                    rounded='md'
                    backgroundImage={project.imgURI}
                    backgroundPosition='center'
                    backgroundSize='contain'
                    position='relative'
                >
                    <Box w='100%' h='100%' bg='#0a192ff0' position='absolute' zIndex='1' />
                    <Box w='100%' h='100%' p='10' position='absolute' zIndex='2'>
                        {project.isFeatured && <Text color={colorMode === 'light' ? 'gray.400' : 'primary'} fontSize='md'>Featured Project</Text>}
                        <Heading color={colorSecondary[colorMode]}>{project.title}</Heading>

                        <List spacing={3} mt={8}>
                            {
                                project.content.map((text) => <ListItem key={text} color={colorSecondary[colorMode]}>
                                    <ListIcon as={ChevronRightIcon} color={colorMode === 'light' ? 'gray.400' : 'primary'} />
                                    {text}
                                </ListItem>)
                            }

                        </List>

                        <Box mt={4}>
                            {
                                project.tags.map(tag => <Tag colorScheme={colorMode === 'light' ? 'gray' : 'teal'} key={tag} mt={4} mr={4}>{tag}</Tag>)
                            }
                        </Box>

                        <Flex alignItems='center' justifyContent='space-between' width='80px' my={6}>
                            <Link href={project.githubURI} isExternal>
                                <Center>
                                    <Icon as={FaGithub} mx='2px' w={6} h={6} color={colorSecondary[colorMode]} _hover={{ color: colorMode === 'light' ? '#805ad5' : primaryDarkColor }} />
                                </Center>
                            </Link>
                            <Link href={project.liveURI} isExternal>
                                <Center>
                                    <ExternalLinkIcon mx='2px' w={6} h={6} color={colorSecondary[colorMode]} _hover={{ color: colorMode === 'light' ? '#805ad5' : primaryDarkColor }} />
                                </Center>
                            </Link>
                        </Flex>

                    </Box>
                </GridItem>)
            }


        </Grid>
        <Center w='100%'>
            <Button
                borderColor={colorMode === 'light' ? 'purple.500' : 'initial'}
                variant='link'
                color={colorMode === 'light' ? 'gray.700' : 'primary'}
                onClick={handleViewMore}
            >
                View More
            </Button>
        </Center>
    </StackWithTitleWrapper >
}

export default Work