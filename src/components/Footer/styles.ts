import styled from 'styled-components';

export const Background = styled.footer`
  display: flex;
  align-items: flex-start;
  padding: 48px;
  background-color: ${({ theme }) => theme.colors.primary[700]};
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 64px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  min-width: 144px;
  font-family: ${({ theme }) => theme.fonts.Inter.style.fontFamily};
`;

export const ListTitle = styled.h3`
  font-size: 18px;

  font-weight: 700;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.complementary.primary[100]};
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.primary[50]};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.neutral[0]};
  list-style: none;

  a {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 22px;
  height: 22px;
`;
