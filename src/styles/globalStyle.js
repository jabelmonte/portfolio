import { createGlobalStyle } from "styled-components"
import NexaBold from "../fonts/Nexa-Bold.otf"
import NexaLight from "../fonts/Nexa-Light.otf"

export const GlobalStyle = createGlobalStyle`
   :root {
      --main-background-color: #20242e;
      --main-background-color-brighter: #22293b;
      --test-background-color: #3bad59;
      --text-color-base: #e1e5f5;
      --text-color-second-base: #72e8d8;
      --text-color-second-base-darker: #6db0a7;
      --text-color-second-base-fade: #24ad9b;
      --color-dark: #0f3352;
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
      background-color: var(--main-background-color);
      color: var(--text-color-base);
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
   
   h1, h2, h3, h4, h5, h6 {
      font-style: 'NexaBold';
      color: var(--text-color-base);
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
      color: var(--text-color-second-base);
      border: 3px solid var(--text-color-second-base);
      background-color: transparent;
      text-decoration: none;
   }
   .button:hover {
      color: var(--text-color-base);
      border-color: var(--text-color-base);
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
      color: var(--text-color-second-base);
      font-family: 'NexaBold';
      font-size: var(--fs-md);
   }
   .navButton:hover {
      color: var(--text-color-base);
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
      color: var(--text-color-second-base);
   }

   h1 span {
    background-color: var(--main-background-color);
    padding: 0 10px;
   }

   h2 {
      line-height: 0.1;
      font-size: var(--fs-highlight);
      font-family: 'NexaLight';
      color: var(--text-color-base);
   }
   h3 {
      line-height: 0.1;
      font-size: var(--fs-highlight);
      font-family: 'NexaBold';
      color: var(--text-color-second-base);
   }

   .projectThumbnail {
      display: block;
      width: 100%;
      height: 180px;
      object-fit: cover;
   }
`
