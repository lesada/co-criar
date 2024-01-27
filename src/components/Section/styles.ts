import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary[100]};
  width: fit-content;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.14px;
  text-transform: uppercase;
  line-height: 30px;
  margin-bottom: 48px;
`;
