import { Box, Heading, Text, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { primaryDarkColor } from '../styles/theme'

const IndexSpan = styled.span(props => `
    color: ${props.color}; 
    font-weight: 700;
    font-size: 26px;
`)

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
        background: ${props => props.lineBg};
        right: 0;
        margin-top: 10px;
        position: absolute
    }
`

const colorSecondary = {
    light: 'gray.700',
    dark: '#ccd6f6'
}

const SectionHeader = ({ sectionIndex, sectionTitle }) => {

    const { colorMode } = useColorMode()

    return <Box w="100%" style={{ position: 'relative' }}>
        <StyledHeading as="h2" size="2xl" lineBg={colorMode === 'light' ? 'lightgray' : '#233554'}>
            <StyledDiv bgColor={colorMode === 'light' ? 'white' : '#0a192f'}>
                <IndexSpan color={colorMode === 'light' ? 'darkgray' : primaryDarkColor}>
                    0{sectionIndex}.
                </IndexSpan>
                &nbsp;
                <Text as="span" color={colorSecondary[colorMode]}>{sectionTitle}</Text>
            </StyledDiv>
        </StyledHeading>
    </Box>
}

export default SectionHeader