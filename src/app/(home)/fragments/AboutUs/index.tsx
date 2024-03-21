import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Images from '@/assets/images';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { ROUTES_PATHS } from '@/constants/routesPaths';

import { Content, Description, ImageContainer, Title, Wrapper } from './styles';

function AboutUs() {
  const { push } = useRouter();

  return (
    <Container>
      <Section tag="A Co-criar">
        <Wrapper>
          <Content>
            <Title>Nosso proposito é movimentar e evoluir</Title>
            <Description>
              A Co-criar leva seu propósito “movimentar positivamente a evolução
              de pessoas e organizações”, de forma coerente em suas abordagens
              de atuação. <br />
              Para isso, acreditamos que as melhores possibilidades de
              desenvolvimento são criadas através da colaboração e de permitir
              que as pessoas se encontrem, gerando novos saberes e novas
              soluções. <br />
              Estimular a cocriação de alternativas contribui na resolução de
              situações complexas.
            </Description>
            <Button onClick={() => push(ROUTES_PATHS.ABOUT)}>Saiba mais</Button>
          </Content>

          <ImageContainer>
            <Image src={Images.AboutUs} alt="" />
          </ImageContainer>
        </Wrapper>
      </Section>
    </Container>
  );
}

export default AboutUs;
