import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box,
    Avatar,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import DarkModeSwitch from './DarkModeSwitch'

// import { useRouter } from "next/router";
import { primaryDarkColor } from '../styles/theme'

const Links = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About',
        href: '/#about'
    },
    {
        title: 'Experience',
        href: '/#experience'
    },
    {
        title: 'Work',
        href: '/#work'
    },
    {
        title: 'Contact',
        href: '/#contact'
    },
    {
        title: 'Blog',
        href: '/blog'
    },
]

const Container = ({ children }) => {
    const { colorMode } = useColorMode()
    // const router = useRouter();

    const bgColor = {
        light: 'white',
        dark: '#0a192f'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

    const navHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
        `

    const FlexBox = styled(Box)`
            display: flex;
            align-items: center;
        `

    return (
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="800px"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <NextLink href="/" passHref>
                    <Avatar bg='primary' border={`2px solid ${colorMode === 'light' ? 'black' : primaryDarkColor}`} size='lg' name='Prajwal SV' src={process.env.NEXT_PUBLIC_AVATAR} />
                </NextLink>
                <FlexBox >
                    {
                        Links.map((link, index) => (<NextLink key={index} href={link.href} passHref>
                            <Button
                                // isActive={router.asPath === link.href}
                                as="a"
                                variant="ghost"
                                color={color[colorMode]}
                                mx={1}
                                p={[1, 2, 4]}
                                _hover={{ backgroundColor: navHoverBg[colorMode] }}
                            >
                                {link.title}
                            </Button>
                        </NextLink>))
                    }
                </FlexBox>
                <DarkModeSwitch />
            </StickyNav >
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container