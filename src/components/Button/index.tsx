'use client';

import { Container } from './styles';

export type variant = 'primary' | 'secondary' | 'complementary';

type ButtonProps = {
  children: React.ReactNode;
  variant?: variant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ variant = 'primary', children, ...rest }: ButtonProps) {
  return (
    <Container $variant={variant} {...rest}>
      {children}
    </Container>
  );
}

export default Button;
