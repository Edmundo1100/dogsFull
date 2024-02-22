import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --background: #ffe9eb;
    --shape: #ffffff;
    --text-body: #14213D;
    --text-secundary: #817a7a;

    --action: #f1585a;
    --bordas: #dfdede;

     --red: #e52e4d;
    --green: #33cc95;
}

 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 } 

 html{
     @media (max-width: 1080px) {
         font-size: 93.75%;
     }
     @media (max-width: 720px) {
         font-size: 87.5%;
     }

 }

 body{
     background-color: var(--background);
     -webkit-font-smoothing: antialiased;
 }

// body , input , textarea, button {
//     font-family: 'Poppins', sans-serif;
//     font-weight: 400;
// }

 h1, h2 , h3 ,h4 , h5 , h6 , strong {
     font-weight: 600;
 }

 button{
    cursor: pointer;
}

 [disabled]{
     opacity: 0.6;
     cursor: not-allowed;
 }

 img {
  display: block;
  max-width: 100%;
}

.title{
    line-height: 1;
    font-size: 3rem;
    margin: 1rem;
    position: relative;
    z-index: 1;
}
.title::after{
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--action);
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.25rem;
    z-index: -1;
    
}

.animeLeft{
opacity: 0;
transform: translateX(-20px);
animation: animeLeft 0.4s forwards;
}
@keyframes animeLeft{
    to{
        opacity: 1;
        transform: initial;
    }
}

 `;
