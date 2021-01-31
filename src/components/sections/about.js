import React from 'react'
import Styled from 'styled-components'

const StyledAboutContainer = Styled.section`
    max-width: 900px;
    background-color: var(--test-background-color);
`

function About(){
    return <StyledAboutContainer>
                <h1>About Section</h1>
            </StyledAboutContainer>
}

export default About