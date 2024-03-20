import styled from 'styled-components';

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: 500;
  line-height: 120%;
  font-size: 36px;
  margin-bottom: 48px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 32px;
  flex-wrap: wrap;
`;
