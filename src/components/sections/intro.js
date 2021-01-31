import React from 'react'
import styled from 'styled-components'

const StyledIntroContainer = styled.section `
    max-width: 800px;
`

function Intro(){
    return <StyledIntroContainer>
                <h1>Hi I'm </h1><br></br>
                <h1>John Aron Belmonte!</h1><br></br>
                <p>some subtext</p>
            </StyledIntroContainer>
}

export default Intro