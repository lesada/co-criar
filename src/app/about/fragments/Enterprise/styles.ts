import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: 48px;
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};

  &::after {
    content: '';
    display: block;
    width: 180px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.secondary[600]};
    margin-top: 8px;
    border-radius: 8px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: 48px;
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-family: ${({ theme }) => theme.fonts.Inter.style.fontFamily};
  line-height: 36px; /* 200% */
  letter-spacing: -0.36px;
`;
