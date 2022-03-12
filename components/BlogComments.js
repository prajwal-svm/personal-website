import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react'

const BlogComments = () => {
    const commentBox = useRef();

    useEffect(() => {
        const scriptEl = document.createElement("script");
        const scriptAttrs = {
            "issue-term": "title",
            src: "https://utteranc.es/client.js",
            crossorigin: "anonymous",
            async: true,
            repo: "Prajwal-S-Venkatesh/personal-website",
            theme: "dark-blue"
        }
        for (const [key, value] of Object.entries(scriptAttrs)) {
            scriptEl.setAttribute(key, value)
        }
        commentBox.current.appendChild(scriptEl)
    }, [])


    return (
        <Box w='100%' pt={20} id="comments">
            <div ref={commentBox}></div>
        </Box>
    )
}

export default BlogComments