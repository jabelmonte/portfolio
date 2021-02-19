import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterWrapper>
            <p>Created with: React.js and Gatsby.js</p>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    width: 100%;
    height: 5em;
    background-color: var(--bg-color-primary);
    display: flex;
    justify-content: left;
    padding-left: 3em;
    text-align: center;
    font-family: 'NexaLight';
    font-weight: 700;
    font-stretch: ultra-condensed;
`
export default Footer