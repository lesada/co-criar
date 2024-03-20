'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.Inter.style.fontFamily};
  }


  button {
    cursor: pointer;
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
