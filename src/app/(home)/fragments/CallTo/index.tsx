import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { ROUTES_PATHS } from '@/constants/routesPaths';

import { Background, Content, Subtitle, Title } from './styles';

function CallTo() {
  const { push } = useRouter();

  return (
    <Container>
      <Section>
        <Background>
          <Content>
            <Title>Sua jornada de desenvolvimento começa agora!</Title>
            <Subtitle>
              Podemos ajudar você e sua empresa a crescer através de soluções e
              metodologias
            </Subtitle>
          </Content>
          <Button
            variant="complementary"
            onClick={() => push(ROUTES_PATHS.CONTACT)}
          >
            Agendar um horário
          </Button>
        </Background>
      </Section>
    </Container>
  );
}

export default CallTo;
