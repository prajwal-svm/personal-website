import React from 'react'
import NextLink from 'next/link'
import { useColorMode, Heading, Text, Flex, Box, Link, Tag } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'

const LeetCodePost = ({ title, difficulty, publishedAt, summary, slug }) => {
    const { colorMode } = useColorMode()
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const DifficultyColor = {
        'Easy': 'teal',
        'Medium': 'yellow',
        'Hard': 'red',
    }

    return (
        <NextLink borderRadius={10} href={`leetcode/${slug}`} passHref>
            <Link w="100%" borderRadius={10} p={4} _hover={{ textDecoration: 'none', background: 'rgba(255,255,255,0.03)' }}>
                <Box mb={2} display="block" width="100%" borderRadius={10}>
                    <Flex
                        mb='2'
                        width="100%"
                        align="flex-start"
                        justifyContent="space-between"
                        flexDirection={['column', 'column', 'row']}
                    >
                        <Flex align="flex-start" justifyContent="start" width="100%">
                            <Heading size="md" as="h3" mb={1} fontWeight="medium">
                                {title}
                            </Heading>
                            {difficulty && <Tag mx={4} size="sm" colorScheme={DifficultyColor[difficulty]} width="max-content">
                                {difficulty}
                            </Tag>}
                        </Flex>


                    </Flex>
                    <Text color={secondaryTextColor[colorMode]}>{summary}</Text>

                </Box>
            </Link>
        </NextLink>
    )
}

export default LeetCodePost