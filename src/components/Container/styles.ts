import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.metrics.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.metrics.padding.desktop};

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.tablet}) {
    padding: 24px ${({ theme }) => theme.metrics.padding.mobile};
  }
`;
