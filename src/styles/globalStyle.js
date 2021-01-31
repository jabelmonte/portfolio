import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --dark: #20242e;
        --text-color-base: #f2f7ff;
        --fs-xs: 12px;
        --fs-sm: 14px; 
        --fs-md: 16px;
        --fs-xl: 24px;
        --fs-highlight: 32px;
     }
     @font-face{
        font-family: "NexaLight";
        src: url('../fonts/Nexa\ Light.otf');
     }
    
     @font-face{
        font-family: "NexaBold";
        src: url('../fonts/Nexa\ Bold.otf');
     }
    
     html{
        box-sizing: border-box;
        width: 100%;
     }
    
     body{
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        background-color: var(--dark);
        color: var(--text-color-base);
        -webkit-font-smoothing: antialiased;
        font-family: "NexaLight";
        font-size: var(--fs-md);
        line-height: 1.2;
    
        @media (max-width: 480px){
            font-size: var(--fs-sm);
           }
     }
`