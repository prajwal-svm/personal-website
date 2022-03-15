import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import LeetCodeLayout from '../../layouts/leetcode'
import MDXComponents from '../../components/MDXComponents'

export default function Blog({ mdxSource, frontMatter }) {
    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return <LeetCodeLayout frontMatter={frontMatter}>{content}</LeetCodeLayout>
}

export async function getStaticPaths() {
    const posts = await getFiles('leetcode')

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getFileBySlug('leetcode', params.slug)

    return { props: post }
}