import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral[0]};
  line-height: 150%;
  font-family: ${({ theme }) => theme.fonts.Inter.style.fontFamily};
`;

export const TextareaContainer = styled.textarea`
  padding: 16px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.secondary[500]};
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[800]};
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.Inter.style.fontFamily};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  resize: vertical;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary[700]};
    outline: 0;
  }
`;
