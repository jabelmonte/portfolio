import React from "react"
import styled from "styled-components"

function Intro() {
  return (
    <IntroContainer>
      <IntroHeadings>
        <p>Hi i'm</p>
        <h2>JOHN ARON BELMONTE</h2>
        <h3>I build things of interest</h3>
      </IntroHeadings>
      <IntroTexts>
        <p>
        I'm a software engineer living in the
        <span className="importantText"> city of Quezon</span>,
        <br></br>
        I continue learning technologies that could benefit with the internet
      </p>
      </IntroTexts>
    </IntroContainer>
  )
}

const IntroContainer = styled.section`
  max-width: 100%;
  height: 80%vh;
  margin: 0 auto;
  border-width: 0;
  margin-top: 14em;
  margin-bottom: 16em;
  width: 100%;
  padding: 5px;
  display: block;
  justify-content: center;
  text-align: center;

  p {
      font-size: 1.2rem;
      font-family: 'NexaBold';
   }
   @media (max-width: 1080px) {
     display: flex;
     flex-direction: column;
     justify-content: center;
     text-align: center;
     padding: 2px;

     h2 {
       font-size: 3em;
     }
    h3 {
      font-size: 3rem;
    }

   }
   @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h2 {
       font-size: 2.5em;
     }
    h3 {
      font-size: 2rem;
    }
   }
`
const IntroHeadings = styled.div`
  margin: 0 auto;
  padding: 0;
`
const IntroTexts = styled.div`
  margin: 0 auto;
  padding: 0;
  font-size: 1px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 5px;
  }
`

export default Intro
