import { Box, Heading, Text, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const IndexSpan = styled.span`
    color: #64ffda;
    font-weight: 700;
    font-size: 26px;
`

const StyledDiv = styled.div(props => `
    background: ${props.bgColor};
    padding-right: 16px;
    z-index: 5;
`)

const StyledHeading = styled(Heading)`
    display: flex;
    align-items: center;
    width: 100%;

    &::after {
        content: '';
        width: 100%;
        height: 1px;
        background: #233554;
        right: 0;
        margin-top: 10px;
        position: absolute
    }
`

const SectionHeader = ({ sectionIndex, sectionTitle }) => {

    const { colorMode } = useColorMode()

    return <Box w="100%" style={{ position: 'relative' }}>
        <StyledHeading as="h2" size="2xl">
            <StyledDiv bgColor={colorMode === 'light' ? 'white' : '#0a192f'}>
                <IndexSpan>
                    0{sectionIndex}.
                </IndexSpan>
                &nbsp;
                <Text as="span" color="#ccd6f6">{sectionTitle}</Text>
            </StyledDiv>
        </StyledHeading>
    </Box>
}

export default SectionHeader