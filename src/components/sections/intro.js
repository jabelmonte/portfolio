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
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  padding-top: 10em;
  padding-bottom: 16em;
  margin: 0;
  display: block;
  justify-content: center;
  text-align: center;
  background-color: var(--text-color-primary);

  p {
      font-size: 1.2rem;
      font-family: 'NexaBold';
      color: var(--bg-color-primary);
   }
  
  h2 {
    color: var(--bg-color-primary);
  }
   @media (max-width: 1080px) {
     display: flex;
     flex-direction: column;
     justify-content: center;
     text-align: center;
     height: 600px;
     max-height: 60vh;
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
    max-height: 80vh;
    h2 {
       font-size: 2em;
     }
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
   }

   @media (max-width: 568px) {
    display: grid;
    grid-grid-template-columns: repeat(auto-fit, max-width);
    gap: 20px;
    margin-top: 10em;
    justify-content: center;
    text-align: center;
    h2 {
       font-size: 1.5em;
     }
    h3 {
      font-size: 1.5rem;
    }
    p {
      padding: 15px;
      font-size: 0.8rem;
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
