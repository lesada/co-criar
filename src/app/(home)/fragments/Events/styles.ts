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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 360px;
  align-items: flex-start;

  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  box-shadow: 0px 0px 16px 0px rgba(220, 220, 220, 0.8);
`;

export const CardImage = styled.div`
  overflow: hidden;
  border-radius: 8px;
  height: 184px;
  width: 100%;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CartTag = styled.span`
  border-radius: 16px;
  padding: 3px 22px 3px 21px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.DmSans.style.fontFamily};
`;

export const CardTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
  font-family: ${({ theme }) => theme.fonts.Poppins.style.fontFamily};
  line-height: 150%;
  color: ${({ theme }) => theme.colors.neutral[800]};
  margin: 16px 0;
`;

export const CardDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 200%;
  color: ${({ theme }) => theme.colors.neutral[700]};
  margin-bottom: 24px;
  letter-spacing: -0.36px;
  font-family: ${({ theme }) => theme.fonts.Inter.style.fontFamily};
`;

export const CardButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.secondary[500]};
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.colors.secondary[300]};
  width: 240px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.OpenSans.style.fontFamily};

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary[300]};
    color: ${({ theme }) => theme.colors.neutral[0]};
  }
`;
