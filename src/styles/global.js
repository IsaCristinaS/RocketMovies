import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800} ;
    color: ${({ theme }) => theme.COLORS.FONTWHITE};

    -webkit-font-smoothing: antialiased;
}

body, button {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    outline: none;
}

input, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    outline: none;
}

h1 {
    font-weight: 400;
}

a {
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);
}

`;
