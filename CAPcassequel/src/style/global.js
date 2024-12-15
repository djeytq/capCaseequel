import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

p{
    text-align: justify;
    text-indent: 15px;
}

body{
    /* background: #b99177; */
    background: linear-gradient(#b99177, #FFF, #b99177, #fff, #cb8300);
}
`;