import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme["gray-800"]};
    color: ${({ theme }) => theme["gray-100"]};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;

  }

  :focus {
    outline: none;
    //To use the theme you must create 'type.d.ts' file with typing.
    box-shadow:0 0 0 0.2rem ${({ theme }) => theme["green-500"]}
  }
`;
