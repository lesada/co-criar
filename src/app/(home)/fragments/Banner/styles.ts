import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 640px;
  height: 100%;
  padding-top: 64px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 660px;
`;

export const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.18px;
  color: ${({ theme }) => theme.colors.complementary.secondary[900]};
  opacity: 0.8;
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
`;

export const Title = styled.h1`
  margin: 16px 0;
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
  font-weight: 600;
  letter-spacing: -1.2px;
  line-height: 140%;
`;

export const Description = styled.p`
  margin-bottom: 48px;
  line-height: 150%;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[800]};
  letter-spacing: -0.32px;
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
`;

export const ImageContainer = styled.div`
  flex: 1;

  margin: auto auto 0;
  height: 100%;
  max-height: 600px;
  min-width: min(440px, 100%);
  width: 100%;
  max-width: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.laptop}) {
    display: none;
  }
`;
