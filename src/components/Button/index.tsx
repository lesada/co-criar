'use client';

import { Wrapper } from './styles';

export type variant = 'primary' | 'secondary' | 'complementary';

type ButtonProps = {
  children: React.ReactNode;
  variant?: variant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ variant = 'primary', children, ...rest }: ButtonProps) {
  return (
    <Wrapper $variant={variant} {...rest}>
      {children}
    </Wrapper>
  );
}

export default Button;
