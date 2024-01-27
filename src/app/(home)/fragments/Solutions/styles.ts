import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: 500;
  line-height: 120%;
  font-size: 36px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 200%;
  letter-spacing: -0.36px;
  color: ${({ theme }) => theme.colors.neutral[800]};
  margin-bottom: 48px;
`;

export const Subtitle = styled.h4`
  color: ${({ theme }) => theme.colors.neutral[1000]};
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 24px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 48px;
`;
