import { Stack } from '@chakra-ui/react'
import React from 'react'
import SectionHeader from './SectionHeader'

const StackWithTitleWrapper = ({ as, id, hideTitle, sectionIndex, sectionTitle, children }) => {

    return <Stack
        as={as || 'section'}
        id={id}
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="60px auto 30px auto"
        maxWidth="750px"
        w="100%"
        pt="6rem"
        px={2}>
        {!hideTitle && <SectionHeader sectionIndex={sectionIndex} sectionTitle={sectionTitle} />}
        {children}
    </Stack>
}

export default StackWithTitleWrapper