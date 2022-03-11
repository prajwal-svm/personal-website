import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import DarkModeSwitch from './DarkModeSwitch'

// import { useRouter } from "next/router";
import { primaryDarkColor } from '../styles/theme'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaBusinessTime, FaHome, FaUser } from 'react-icons/fa'
import { MdComputer, MdOutlineEmail, MdWeb } from 'react-icons/md'
import Footer from './Footer'

const Links = [
    {
        title: 'Home',
        href: '/',
        icon: <FaHome />
    },
    {
        title: 'About',
        href: '/#about',
        icon: <FaUser />
    },
    {
        title: 'Experience',
        href: '/#experience',
        icon: <FaBusinessTime />
    },
    {
        title: 'Work',
        href: '/#work',
        icon: <MdComputer />
    },
    {
        title: 'Contact',
        href: '/#contact',
        icon: <MdOutlineEmail />
    },
    {
        title: 'Blog',
        href: '/blog',
        icon: <MdWeb />
    },
]

const Container = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode()
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
                px={[0, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <NextLink href="/" passHref>
                    <Avatar bg='primary' border={`2px solid ${colorMode === 'light' ? 'black' : primaryDarkColor}`} size='lg' name='Prajwal SV' src={process.env.NEXT_PUBLIC_AVATAR} />
                </NextLink>
                <FlexBox display={['none', 'none', 'none', 'block']}>
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

                <Box display={['block', 'block', 'block', 'none']}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='nav'
                            icon={<HamburgerIcon />}
                            variant='outline'
                            color={color[colorMode]}
                        />
                        <MenuList>
                            {Links.map((link, index) => (<NextLink key={index} href={link.href} passHref>
                                <MenuItem icon={link.icon} color={color[colorMode]}>
                                    {link.title}
                                </MenuItem>
                            </NextLink>))}
                            <MenuItem
                                color={color[colorMode]}
                                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                                onClick={toggleColorMode}
                            >
                                Toggle Theme
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
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
            <Footer />
        </>
    )
}

export default Container