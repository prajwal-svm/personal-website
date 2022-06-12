import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { motion } from 'framer-motion'
import { BsMouse } from 'react-icons/bs'
import { HOME_DATA, RESUME_URI } from '../data/content'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

const MotionBox = motion(Box)

const Home = () => {
  const { colorMode } = useColorMode()

  const handleDownloadResume = () => {
    window.splitbee.track('Button Click', {
      type: 'Resume'
    })

    window.open(RESUME_URI, '_blank')
  }

  return (
    <Stack
      as='main'
      spacing={8}
      justifyContent='center'
      alignItems='flex-start'
      m='60px auto 30px auto'
      maxW='750px'
      w='100%'
      px={2}
    >
      <Box w='100%' h='max(100vh - 155px, 590px)'>
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='750px'
        >
          <Heading
            color={HOME_DATA.colorSwitch.titleA[colorMode]}
            as='h5'
            size='lg'
            mb={3}
          >
            {HOME_DATA.titleA}
          </Heading>
          <Heading
            as='h1'
            size='3xl'
            mb={4}
            color={HOME_DATA.colorSwitch.titleB[colorMode]}
          >
            {HOME_DATA.titleB}
          </Heading>
          <RoughNotationGroup>
            <Heading
              as='h2'
              size='2xl'
              mb={6}
              color={HOME_DATA.colorSwitch.titleC[colorMode]}
            >
              I build &nbsp;
              <RoughNotation
                type={colorMode === 'dark' ? 'underline' : 'highlight'}
                show
                color='#FDFFB6'
              >
                stuff
              </RoughNotation>
              &nbsp; for the&nbsp;
              <RoughNotation
                type='circle'
                show
                color='#FFAFCC'
                padding={[2, 6]}
              >
                web
              </RoughNotation>
              .
            </Heading>
            <Text
              color={HOME_DATA.colorSwitch.titleDescription[colorMode]}
              fontSize='xl'
              mb={8}
              lineHeight={9}
            >
              I'm a&nbsp;&nbsp;
              <RoughNotation
                padding={[2, 6]}
                type={colorMode === 'dark' ? 'underline' : 'highlight'}
                show
                color='#CAFFBF'
              >
                software engineer
              </RoughNotation>
              &nbsp; specializing in building user appealing and exceptional{' '}
              <RoughNotation
                padding={[2, 6]}
                type={colorMode === 'dark' ? 'underline' : 'highlight'}
                show
                color='#FFC6FF'
              >
                digital experiences.
              </RoughNotation>{' '}
              I'm an{' '}
              <RoughNotation
                padding={[2, 6]}
                type={colorMode === 'dark' ? 'underline' : 'highlight'}
                show
                color='#A0C4FF'
              >
                inquisite
              </RoughNotation>{' '}
              ,{' '}
              <RoughNotation
                padding={[2, 6]}
                type={colorMode === 'dark' ? 'underline' : 'highlight'}
                show
                color='#FFD6A5'
              >
                creative
              </RoughNotation>{' '}
              ,{' '}
              <RoughNotation
                padding={[2, 6]}
                type={colorMode === 'dark' ? 'underline' : 'highlight'}
                show
                color='#FFADAD'
              >
                brainstorming mastermind
              </RoughNotation>{' '}
              behind computer programs of all sorts. Currently, I'm working as a{' '}
              <RoughNotation
                padding={[2, 6]}
                type={colorMode === 'dark' ? 'underline' : 'highlight'}
                show
                color='#9BF6FF'
              >
                Mid Frontend Engineer
              </RoughNotation>{' '}
              at Certa.
            </Text>
          </RoughNotationGroup>

          <Button
            colorScheme={HOME_DATA.colorSwitch.ctaBtn[colorMode]}
            variant={HOME_DATA.colorSwitch.ctaVariant[colorMode]}
            size='lg'
            onClick={handleDownloadResume}
          >
            {HOME_DATA.ctaText}
          </Button>
        </Flex>
        <MotionBox
          as='aside'
          animate={{
            opacity: [0, 1],
            marginTop: ['0', '100px']
          }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            times: [0, 1],
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 1,
            opacity: 0,
            delay: 5
          }}
          display='flex'
        >
          <Box w='100%' display='flex' mt={10} alignItems='center'>
            <NextLink href='/#about' passHref>
              <Icon
                as={BsMouse}
                m='auto'
                w={10}
                h={10}
                color={HOME_DATA.colorSwitch.scrollMouseIcon[colorMode]}
                _hover={{ cursor: 'pointer' }}
              />
            </NextLink>
          </Box>
        </MotionBox>
      </Box>
    </Stack>
  )
}

export default Home
