import React from "react"
import styled from "styled-components"
import { email } from "../links"

function Contact({contact}) {
  return (
    <StyledContactContainer>
        <h1 className="anchor" id={'contact'}>.</h1>
        <Line><h1><span>Hit me up!</span></h1></Line>
        <StyledContactText>
          <p>I'm currently 
            <span className="importantText"> open for work! </span>
            If you want to get in touch, or just want to say hi, feel free to reach out!
          </p>
        </StyledContactText>
        <a className="button" style={{ textDecoration: 'none'}} href={`mailto:${email}`}>
          Come say hi
        </a>
    </StyledContactContainer>
  )
}

const StyledContactContainer = styled.section`
  max-width: 900px;
  height: 420px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 80px;
  padding: 5px;
  text-align: center;
  font-family: 'NexaLight';
`
const StyledContactText = styled.div`
  margin: 0 auto;
  max-width: 50%;
  height: 50%;
  width: 100%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
`
const Line = styled.h1`
  h1{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid var(--text-color-primary);
    line-height: 0.01px;
    margin: 10px 0 20px;
  }
`

export default Contact
