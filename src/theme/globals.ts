'use client';

import { DM_Sans } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';


const DmSans = DM_Sans({
  subsets: ['latin'],
});

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${DmSans.style.fontFamily}
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
