import React from 'react'
import { Center, Link, Divider, Stack, Icon, Flex, useColorMode } from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const colorSecondary = {
    light: 'gray.700',
    dark: '#ccd6f6'
}

const Footer = () => {
    const { colorMode } = useColorMode()
    return <Stack
        as='footer'
        justifyContent="center"
        alignItems="center"
        m="auto"
        maxWidth="750px"
        w="100%"
        pt="1rem"
        px={2}
        pb={2}
    >
        <Divider mb={4} orientation='horizontal' borderColor={colorMode === 'light' ? 'lightgray' : '#233554'} />
        <Flex pb={2} w='320px' justifyContent="space-between" alignItems="center">
            <Link color={colorMode === 'light' ? 'gray.700' : '#ccd6f6'} href="https://www.instagram.com/prajwalsvenkatesh/" _visited={{ border: '1px solid yellow' }} isExternal>
                <Icon w={8} h={8} as={FaInstagram} color={colorMode === 'light' ? 'gray.700' : '#ccd6f6'} _hover={{ color: colorMode === 'light' ? 'gray' : 'white' }} />
            </Link>
            <Link color={colorMode === 'light' ? 'gray.700' : '#ccd6f6'} href="https://twitter.com/__Prajwal_SV__" isExternal>
                <Icon w={8} h={8} as={FaTwitter} color={colorMode === 'light' ? 'gray.700' : '#ccd6f6'} _hover={{ color: colorMode === 'light' ? 'gray' : 'white' }} />
            </Link>
            <Link color={colorMode === 'light' ? 'gray.700' : '#ccd6f6'} href="https://github.com/Prajwal-S-Venkatesh" isExternal>
                <Icon w={8} h={8} as={FaGithub} color={colorMode === 'light' ? 'gray.700' : '#ccd6f6'} _hover={{ color: colorMode === 'light' ? 'gray' : 'white' }} />
            </Link>
            <Link color={colorMode === 'light' ? 'gray.700' : '#ccd6f6'} href="https://www.linkedin.com/in/prajwal-s-venkatesh/" isExternal>
                <Icon w={8} h={8} as={FaLinkedinIn} color={colorMode === 'light' ? 'gray.700' : '#ccd6f6'} _hover={{ color: colorMode === 'light' ? 'gray' : 'white' }} />
            </Link>
            <Link color={colorMode === 'light' ? 'gray.700' : '#ccd6f6'} href="mailto:hey@prajwalsv.dev" isExternal>
                <Icon w={8} h={8} as={MdMailOutline} color={colorMode === 'light' ? 'gray.700' : '#ccd6f6'} _hover={{ color: colorMode === 'light' ? 'gray' : 'white' }} />
            </Link>
        </Flex>
        <Divider orientation='horizontal' borderColor={colorMode === 'light' ? 'lightgray' : '#233554'} />
        <Center display={['none', 'none', 'flex']} w="100%" pt={2} color={colorSecondary[colorMode]}>
            Made with ❤️ using &nbsp;
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" aria-label="NextJS" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title>NextJS</title><path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z"></path></svg>
            &nbsp; - &nbsp;Edit or Star this repo on &nbsp;
            <Link color={colorMode === 'light' ? 'gray.900' : 'primary'} href="https://github.com/Prajwal-S-Venkatesh/personal-website" fontWeight={600} isExternal>
                Github
            </Link>
        </Center>
        <Center w="100%" color={colorSecondary[colorMode]}>
            Copyright &copy; 2022 Prajwal S Venkatesh
        </Center>
    </Stack>
}

export default Footer