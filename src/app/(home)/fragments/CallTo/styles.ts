import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 80px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.secondary[400]};
  padding: 36px 120px;

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.tablet}) {
    padding: 36px 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-weight: 600;
  line-height: 120%;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.tablet}) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.h4`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.18px;
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
`;
