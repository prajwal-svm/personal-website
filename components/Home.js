import React from 'react'
import { Box, Button, Flex, forwardRef, Heading, Icon, Stack, Text, useColorMode } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import { motion } from 'framer-motion'
import { BsMouse } from "react-icons/bs";

const MotionBox = motion(Box)

const headingColor = {
    light: 'gray.700',
    dark: 'gray.400'
}

const colorSecondary = {
    light: 'gray.600',
    dark: '#8892b0'
}

const Home = () => {
    const { colorMode } = useColorMode()

    const handleDownloadResume = () => window.open(process.env.NEXT_PUBLIC_RESUME, '_blank')

    return <Stack
        as='main'
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="60px auto 30px auto"
        maxW="750px"
        w="100%"
        px={2}
    >
        <Box w='100%' h="max(100vh - 155px, 590px)">
            <Flex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                maxWidth="750px"
            >
                <Heading color='teal.400' as="h5" size="lg" mb={3}>Hey 👋, my name is</Heading>
                <Heading as="h1" size="3xl" mb={4} color="#ccd6f6">Prajwal S Venkatesh.</Heading>
                <Heading as="h2" size="2xl" mb={6} color={headingColor[colorMode]} >I build stuff for the web.</Heading>
                <Text color={colorSecondary[colorMode]} fontSize='xl' mb={8}>
                    I&lsquo;m a software engineer specializing in building exceptional digital experiences ✨.
                    I&lsquo;m an inquisite, creative, brainstorming mastermind behind computer programs of all sorts 🤓.
                    Currently, I&lsquo;m working as a Mid Frontend Engineer at Certa 👨‍💻.</Text>
                <Button colorScheme='teal' variant='outline' size="lg" onClick={handleDownloadResume}>Download Resume</Button>
            </Flex>
            <MotionBox
                as="aside"
                animate={{
                    opacity: [0, 1],
                    marginTop: ['0', '100px'],
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
                display="flex"
            >
                <Box w="100%" display='flex' mt={10} alignItems='center'>
                    <NextLink href="/#about" passHref>
                        <Icon as={BsMouse} m="auto" w={10} h={10} color={headingColor[colorMode]} _hover={{ cursor: 'pointer' }} />
                    </NextLink>
                </Box>
            </MotionBox>
        </Box>

    </Stack>
}

export default Home