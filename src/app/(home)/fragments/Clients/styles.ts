import styled from 'styled-components';

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: 500;
  line-height: 120%;
  font-size: 36px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 200%;
  letter-spacing: -0.36px;
  color: ${({ theme }) => theme.colors.neutral[800]};
  text-align: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border-radius: 8px;
  margin: 48px 12px;
`;

export const CardTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: 500;
  line-height: 130%;
  font-size: 20px;
`;

export const CardSubTitle = styled.h5`
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
  color: ${({ theme }) => theme.colors.neutral[600]};
  line-height: 150%;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 24px;
`;

export const CardText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 200%;
  color: ${({ theme }) => theme.colors.neutral[900]};
  text-align: justify;
`;
