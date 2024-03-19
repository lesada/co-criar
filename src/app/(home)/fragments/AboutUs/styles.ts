import styled from 'styled-components';

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

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 64px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  position: relative;

  img {
    height: 100%;
  }
`;
