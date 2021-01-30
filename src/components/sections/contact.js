import React from 'react'
import styled from 'styled-components'
import {dummy, email} from '../links'

const styledContainer = styled.div`
    margin: 0 auto;
    max-width: 500;
    text-align: center;
    background-color: blue;

`;

const styledSectionContact = styled.div`
    background-color: #20242e;
    max-height: 500px;
    max-width: 500px;
    padding: 1.45rem;
`;
function Contact(){
    return <styledContainer>
        <styledSectionContact>
            <h1>Contact Section</h1>
            <a className="email-button" href={`mailto:${email}`}>Come say hi</a>
        </styledSectionContact>
    </styledContainer>

}

export default Contact;