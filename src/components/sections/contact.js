import React from "react"
import styled from "styled-components"
import { dummy, email } from "../links"

const StyledContactContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
`
function Contact() {
  return (
    <StyledContactContainer>
        <h1>Contact Section</h1>
        <a className="email-button" href={`mailto:${email}`}>
          Come say hi
        </a>
    </StyledContactContainer>
  )
}

export default Contact
