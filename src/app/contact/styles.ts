import styled, { css } from 'styled-components';

const Container = css`
  flex: 1 1 360px;

  padding: ${({ theme }) => theme.metrics.padding.desktop};

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.metrics.padding.mobile};
  }
`;

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Items = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;

  background-color: ${({ theme }) => theme.colors.secondary[300]};

  ${Container}
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border-radius: 50%;
  width: 56px;
  height: 56px;
  padding: 16px;
`;

export const ItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary[900]};
  font-family: ${({ theme }) => theme.fonts.Inter.style.fontFamily};
  letter-spacing: -0.36px;
  margin-bottom: 16px;
`;

export const ItemSubtitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-family: ${({ theme }) => theme.fonts.Inter.style.fontFamily};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  background-color: ${({ theme }) => theme.colors.secondary[500]};
  ${Container}

  > div, input {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-family: ${({ theme }) => theme.fonts.Inter.style.fontFamily};
`;
