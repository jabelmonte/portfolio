import React from 'react'
import Styled from 'styled-components'

const styledAboutContainer = Styled.div`
    background-color: #20242e
    max-width: 500px;
`

function About(){
    return <styledAboutContainer>
                <h1>About Section</h1>
            </styledAboutContainer>
}

export default About