import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
*{
    margin: 0;
    padding:  0;
    box-sizing: border-box;
    border: none;
}
body{
    font-family: "Space Mono", monospace;
    max-width: 100%;
    min-height: 100vh;
    background-color: #f6f8ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;

export default GlobalStyles;
