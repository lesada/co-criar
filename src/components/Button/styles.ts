import styled, { css } from 'styled-components';

import { variant } from '.';

export const Wrapper = styled.button<{
  $variant?: variant;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 52px;
  width: fit-content;
  min-width: 240px;
  padding: 16px 32px;

  border-radius: 24px;

  font-size: 16px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.OpenSans.style.fontFamily};

  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary[800]};
          color: ${theme.colors.neutral[0]};

          &:hover {
            background-color: ${theme.colors.primary[500]};
          }

          &:focus {
            background-color: ${theme.colors.primary[900]};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary[600]};
          color: ${theme.colors.neutral[0]};

          &:hover {
            background-color: ${theme.colors.secondary[300]};
          }

          &:focus {
            background-color: ${theme.colors.secondary[700]};
          }
        `;
      case 'complementary':
        return css``;
    }
  }}
`;
