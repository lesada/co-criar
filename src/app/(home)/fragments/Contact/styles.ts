import styled from 'styled-components';

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary[200]};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 64px;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1 1 440px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary[900]};
  line-height: 56px;
  letter-spacing: -1.2px;
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[800]};
  line-height: 36px;
  letter-spacing: -0.36px;
  font-family: ${({ theme }) => theme.fonts.Inter.style.fontFamily};
`;

export const Info = styled(Description)`
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 440px;
  padding: 32px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.secondary[500]};

  button {
    margin: 32px auto 0;
  }
`;

export const FormTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[0]};
  line-height: 36px;
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
`;

export const FormDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[0]};
  line-height: 36px;
  letter-spacing: -0.36px;
  font-family: ${({ theme }) => theme.fonts.Inter.style.fontFamily};
`;
