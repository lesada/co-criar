import styled from 'styled-components';

export const Wrapper = styled.div<{
  $variant: 'primary' | 'secondary';
  $detach?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1;

  min-height: 306px;
  height: 100%;
  padding: 24px 16px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === 'primary'
        ? theme.colors.complementary.secondary[300]
        : theme.colors.secondary[200]};

  background-color: ${({ theme, $variant, $detach }) => {
    if ($detach) {
      return $variant === 'primary'
        ? theme.colors.complementary.secondary[800]
        : theme.colors.secondary[300];
    }

    return theme.colors.neutral[0];
  }};
`;

export const Icon = styled.div<{ $variant: 'primary' | 'secondary' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 56px;
  height: 56px;

  padding: 8px;

  background-color: ${({ theme, $variant }) =>
    $variant === 'primary'
      ? theme.colors.complementary.secondary[900]
      : theme.colors.secondary[600]};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h3<{ $detach?: boolean }>`
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
  color: ${({ theme, $detach }) =>
    $detach ? theme.colors.neutral[0] : theme.colors.neutral[700]};
`;

export const Description = styled.p<{ $detach?: boolean }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: ${({ theme, $detach }) =>
    $detach ? theme.colors.neutral[0] : theme.colors.neutral[600]};
`;
