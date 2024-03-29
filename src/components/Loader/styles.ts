import styled, { css } from 'styled-components';

export const Container = styled.div<{ $fullScreen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${({ $fullScreen }) =>
    $fullScreen &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.neutral[0]};
      z-index: 100;
    `}
`;

export const Load = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${({ theme }) => theme.colors.primary[500]};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.primary[500]} transparent
      transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
