import styled from 'styled-components';

export const Container = styled.div`
  .react-multi-carousel-dot {
    button {
      width: 72px;
      height: 6px;
      border-radius: 0;
      border: 0;
      background-color: ${({ theme }) => theme.colors.neutral[0]};
    }
  }

  .react-multi-carousel-dot--active {
    button {
      background-color: ${({ theme }) => theme.colors.primary[500]};
    }
  }
`;
