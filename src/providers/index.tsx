'use client';

import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/theme/globals';
import theme from '@/theme/theme';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

function Providers({ children }: PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default Providers;
