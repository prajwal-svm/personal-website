import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useColorMode,
    Link,
    Icon
} from '@chakra-ui/react'
import { SiLeetcode } from "react-icons/si";

import Container from '../components/Container'
import BlogPost from '../components/BlogPost'

import { ExternalLinkIcon, SearchIcon } from '@chakra-ui/icons'

const headingColor = {
    light: 'gray.700',
    dark: 'gray.400'
}

export default function Blog({ posts }) {
    const { colorMode } = useColorMode()
    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.github.com/users/Prajwal-S-Venkatesh/gists')
            const result = await response.json() || {}
            const files = result.reduce((a, c) => {
                const f = Object.values(c.files).reduce((_a, _c) => {
                    if (!_c.filename.startsWith('LC-')) {
                        return a
                    }
                    return {
                        ...a,
                        [_c.filename]: _c.raw_url
                    }
                }, {})
                return { ...a, ...f }
            }, {})
            console.log(result)
            setData(files)
        })();
    }, [])

    console.log('data', data)
    return (
        <>
            <Head>
                <title>Leetcode Gists - Prajwal S Venkatesh</title>
            </Head>
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="start"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                    w='100%'
                    minH='calc(100vh - 340px)'
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        w='100%'
                        px={4}
                    >
                        <Text mb={8} as="p" fontSize="xl" color={headingColor[colorMode]}>
                            Solved <Icon as={SiLeetcode} /> Gists!
                        </Text>

                        <Flex flexDir='column'>
                            {
                                Object.keys(data)
                                    .sort((a, b) => a - b)
                                    .map(filename => <Link mt={8} key={filename} isExternal>
                                        {filename} <ExternalLinkIcon mx='2px' />
                                    </Link>)
                            }
                        </Flex>
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}
