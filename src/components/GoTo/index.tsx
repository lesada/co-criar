import Icons from '@/assets/icons';

import { Container } from './styles';

type GoToProps = {
  children: React.ReactNode;
  link: string;
};

function GoTo({ children, link }: GoToProps) {
  return (
    <Container href={link}>
      {children}
      <Icons.ArrowRight />
    </Container>
  );
}

export default GoTo;
