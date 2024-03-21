import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[100]};

  z-index: 5;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;

  margin-left: 66px;
`;

export const Item = styled.li<{ $detach?: boolean }>`
  list-style: none;
  min-width: 80px;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Inter';
  color: ${({ theme }) => theme.colors.neutral[600]};

  ${({ $detach }) =>
    $detach &&
    css`
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary[800]};
    `}
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

export const MobileMenu = styled(motion.div)`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
`;

export const MobileList = styled(List)`
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  margin-left: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  padding: 24px 0;
`;
