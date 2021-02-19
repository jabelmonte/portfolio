import { createGlobalStyle } from "styled-components"
import NexaBold from "../fonts/Nexa-Bold.otf"
import NexaLight from "../fonts/Nexa-Light.otf"

export const GlobalStyle = createGlobalStyle`
   :root {
      --bg-color-primary: #022449;
      --bg-color-secondary: #55bdca;
      --bg-color-tertiary: #96ffff;
      --text-color-primary: #c8eff4;
      --text-color-secondary: #f27d42;
      --text-color-tertiary: #f27d42;
      --fs-xs: 12px;
      --fs-sm: 14px; 
      --fs-md: 16px;
      --fs-xl: 24px;
      --fs-xxl: 36px;
      --fs-highlight: 72px;
   }
   @font-face {
      font-family: 'NexaLight';
      src: url(${NexaLight}) format('opentype');
      font-style: normal;
      font-weight: 300;
   }

   @font-face {
      font-family: 'NexaBold';
      src: url(${NexaBold}) format('opentype');
      font-style: normal;
   }
   
   html{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
   }
  
   body {
      padding: 0;
      margin: 0;
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
      background-color: var(--bg-color-primary);
      color: var(--text-color-primary);
      -webkit-font-smoothing: antialiased;
      font-size: var(--fs-md);
      line-height: 1.2;
   
      @media (max-width: 480px){
          font-size: var(--fs-sm);
      }
   }

   section {
      padding: 0;
      margin: 0 auto;
      max-width: 900px;
   }

   p {
      font-style: 'NexaLight';
      font-size: var(--fs-md);
      font-weight: 300;
      letter-spacing: 0.01em;
   }
   #footer p{
      margin-bottom: 0;
   }
   h1, h2, h3, h4, h5, h6 {
      font-style: 'NexaBold';
      color: var(--text-color-primary);
   }

   .descriptiveText {
      font-size: 1.2rem;
      font-family: 'NexaLight';
   }
   //resume and mailto buttons
   .button {
      height: 3em;
      width: 100%;
      padding: 5px;
      outline: none;
      border-radius: 6%;
      font-family: 'NexaLight';
      font-size: var(--fs-md);
      font-weight: 700;
      color: var(--text-color-primary);
      border: 3px solid transparent;
      /* background-color: transparent; */
      background-color: var(--text-color-tertiary);
      text-decoration: none;
   }
   .button:hover {
      color: var(--text-color-primary);
      border-color: var(--bg-color-primary);
      border-radius: 6%;
   }
   .button:focus
   .button:after {
      padding: none;
      border: none;
      background: none;
      outline: none;
   }
   //nav bar anchor links
   .navButton {
      height: 3em;
      width: 5em;
      padding: none;
      border: none;
      outline: none;
      background: none;
      color: var(--bg-color-primary);
      font-family: 'NexaBold';
      font-size: var(--fs-md);
   }
   .navButton:hover {
      color: var(--bg-color-tertiary);
   }
   .navButton:focus,
   .navButton:after {
      padding: none;
      border: none;
      background: none;
      outline: none;
   }
   .anchor,
   .anchor:before {
      display: block;
      position: relative;
      top: -150px;
      visibility: hidden;  
   }
   .importantText {
      color: var(--text-color-secondary);
      font-weight: 700;
   }

   h1 span {
    background-color: var(--bg-color-primary);
    padding: 0 10px;
   }

   h2 {
      line-height: 0.1;
      font-size: var(--fs-highlight);
      font-family: 'NexaLight';
      color: var(--text-color-primary);
   }
   h3 {
      line-height: 0.1;
      font-size: var(--fs-highlight);
      font-family: 'NexaBold';
      color: var(--text-color-secondary);
   }

   .projectThumbnail {
      display: block;
      width: 100%;
      height: 180px;
      object-fit: cover;
   }
`
