import React, { useState } from 'react'
import Head from 'next/head'
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useColorMode
} from '@chakra-ui/react'

import Container from '../components/Container'
import { getAllFilesFrontMatter } from '../lib/mdx'
import BlogPost from '../components/BlogPost'

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
                <title>Blog - Prajwal S Venkatesh</title>
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
                            Welcome to my blog! Here I post about design, tech, finance, life experiences &amp; much much more.
                            Make sure to visit my blog often, I&lsquo;ll soon be adding subscribe feature.
                        </Text>
                        <InputGroup mb={16} mr={4} w="100%">
                            <Input
                                aria-label={`Search ${posts.length} posts by title`}
                                placeholder={`Search ${posts.length} posts by title`}
                                borderColor="#233554" variant="outline" size='md' type='text'
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <InputRightElement>
                                <SearchIcon w={5} h={5} color={headingColor[colorMode]} />
                            </InputRightElement>
                        </InputGroup>
                        {!filteredBlogPosts.length && <Text width='100%'>
                            No posts found :(
                        </Text>}
                        {filteredBlogPosts.map((frontMatter) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')

    return { props: { posts } }
}