import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.primary[500]};
  font-family: ${({ theme }) => theme.fonts.DmSans.style.fontFamily};
  margin-left: auto;
`;
