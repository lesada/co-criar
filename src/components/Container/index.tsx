import { Wrapper } from './styles';

function Container({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}

export default Container;
