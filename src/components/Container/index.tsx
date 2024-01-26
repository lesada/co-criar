import { PropsWithChildren } from 'react';
import { Wrapper } from './styles';

function Container({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
