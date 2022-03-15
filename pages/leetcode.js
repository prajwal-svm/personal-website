import React, { useState } from 'react'
import Head from 'next/head'
import {
    Heading,
    Flex,
    Stack,
    Container,
    useColorMode
} from '@chakra-ui/react'


import { getAllFilesFrontMatter } from '../lib/mdx'
import LeetCodePost from '../components/LeetCodePost'

import { SearchIcon } from '@chakra-ui/icons'

const headingColor = {
    light: 'gray.700',
    dark: 'gray.400'
}

export default function Blog({ posts }) {
    const { colorMode } = useColorMode()
    const [searchValue, setSearchValue] = useState('')

    const filteredBlogPosts = posts
        .sort(
            (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((frontMatter) =>
            frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <>
            <Head>
                <title>Leetcode - Prajwal S Venkatesh</title>
            </Head>
            <Container my="20">
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
                        {filteredBlogPosts.map((frontMatter) => <LeetCodePost key={frontMatter.title} {...frontMatter} />)}
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('leetcode')

    return { props: { posts } }
}