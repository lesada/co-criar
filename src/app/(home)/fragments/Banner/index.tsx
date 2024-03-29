import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Images from '@/assets/images';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { ROUTES_PATHS } from '@/constants/routesPaths';

import {
  Content,
  Description,
  ImageContainer,
  Subtitle,
  Title,
  Wrapper,
} from './styles';

function Banner() {
  const { push } = useRouter();

  return (
    <Container id="banner">
      <Section>
        <Wrapper>
          <Content>
            <Subtitle>Co-Criar Desenvolvimento</Subtitle>
            <Title>Desenvolvimento de pessoas e organizações</Title>
            <Description>
              A Co-criar leva seu propósito “movimentar positivamente a evolução
              de pessoas e organizações”, de forma coerente em suas abordagens
              de atuação.
            </Description>
            <Button onClick={() => push(ROUTES_PATHS.ABOUT)}>
              Agendar um horário
            </Button>
          </Content>

          <ImageContainer>
            <Image src={Images.Banner} alt="" />
          </ImageContainer>
        </Wrapper>
      </Section>
    </Container>
  );
}

export default Banner;
