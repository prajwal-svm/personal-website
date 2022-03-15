import React from 'react'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Avatar,
    Container,
    Icon,
    IconButton,
    Link
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import BlogComments from '../components/BlogComments'
import { FaBackward } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { MdForward } from 'react-icons/md'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

const capitalize = (s) => s.split('-').reduce((a, c) => `${a} ${c[0].toUpperCase()}${c.slice(1)}`, '')

export default function LeetCodeLayout({ children, frontMatter }) {
    const { colorMode } = useColorMode()
    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const router = useRouter()
    const slug = router.asPath.replace('/leetcode', '')
    return (
        <Container my={10} w='100%' maxW='100%'>
            <Head>
                <title>{capitalize(slug.slice(1))} - Leetcode - Prajwal S Venkatesh</title>
            </Head>
            <Stack
                as="article"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
                maxWidth="960px"
                w="100%"
                px={2}
            >
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    maxWidth="960px"
                    w="100%"
                    mb={10}
                >
                    <IconButton
                        icon={<ArrowBackIcon />}
                        w={20}
                        h={10}
                        disabled={slug.slice(1) == '1'}
                        onClick={() => router.push(`/leetcode/${Math.max(+slug.slice(1) - 1, 1)}`)}
                    />
                    <Link href='/leetcode'>
                        <Icon as={SiLeetcode} w={20} h={10} />
                    </Link>
                    <IconButton
                        icon={<ArrowForwardIcon />}
                        w={20}
                        h={10}
                        onClick={() => router.push(`/leetcode/${+slug.slice(1) + 1}`)}
                    />


                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="960px"
                    w="100%"
                >
                    <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                        {frontMatter.title}
                    </Heading>

                    <Flex
                        justify="space-between"
                        align={['initial', 'center']}
                        direction={['column', 'row']}
                        mt={2}
                        w="100%"
                        mb={4}
                    >
                        <Flex align="center">
                            <Avatar
                                size="xs"
                                name="Prajwal S Venkatesh"
                                src={process.env.NEXT_PUBLIC_AVATAR}
                                mr={2}
                                border='1px solid teal'
                            />
                            <Text fontSize="sm" color={textColor[colorMode]}>
                                {frontMatter.by}
                                {'Prajwal S Venkatesh - '}
                                {format(parseISO(frontMatter.publishedAt), 'MMM dd, yyyy')}
                            </Text>
                        </Flex>
                        <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                            {frontMatter.readingTime.text}
                        </Text>
                    </Flex>
                </Flex>
                {children}
            </Stack>
        </Container>
    )
}

