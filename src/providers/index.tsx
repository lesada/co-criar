'use client';

import { GlobalStyle } from '@/theme/globals';
import theme from '@/theme/theme';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Providers;
