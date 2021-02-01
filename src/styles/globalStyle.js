import { createGlobalStyle } from "styled-components"
import NexaBold from '../fonts/Nexa-Bold.otf'
import NexaLight from '../fonts/Nexa-Light.otf'

export const GlobalStyle = createGlobalStyle`
   :root {
      --main-background-color: #20242e;
      --test-background-color: #3bad59;
      --text-color-base: #e1e5f5;
      --text-color-second-base: #72e8d8;
      --fs-xs: 12px;
      --fs-sm: 14px; 
      --fs-md: 16px;
      --fs-xl: 24px;
      --fs-xxl: 36px;
      --fs-highlight: 32px;
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
   }
  
   body {
      padding: 40;
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
      font-size: 1.2rem;
      font-family: 'NexaBold';
   }
   
   .descriptiveText {
      font-size: 1.2rem;
      font-family: 'NexaLight';
   }
`