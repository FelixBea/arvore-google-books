import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
}

main {
    section {
        padding-left: 20px;
        padding-right: 20px;
    }
}
`;
