import Image from 'next/image';

import Images from '@/assets/images';
import Container from '@/components/Container';
import Section from '@/components/Section';

import {
  Card,
  CardButton,
  CardDescription,
  CardImage,
  CardTitle,
  CartTag,
  Title,
  Wrapper,
} from './styles';

function Events() {
  return (
    <Container>
      <Section tag="Depoimentos de Clientes">
        <Title>Próximos eventos</Title>
        <Wrapper>
          <Card>
            <CardImage>
              <Image src={Images.AboutUs} alt="" />
            </CardImage>
            <CartTag>Eventos</CartTag>
            <CardTitle>A importância da comunicação</CardTitle>
            <CardDescription>
              Turma confirmada! <br />O Enjoy foi elaborado a partir da
              integração das experiências econhecimentos profissionais da
              facilitadora Letiene Ferreira, fundamentando-o em abordagens...
            </CardDescription>
            <CardButton>Saiba mais</CardButton>
          </Card>
        </Wrapper>
      </Section>
    </Container>
  );
}

export default Events;
