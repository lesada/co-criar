import Image from 'next/image';

import Images from '@/assets/images';
import Button from '@/components/Button';
import Container from '@/components/Container';

import {
  Content,
  Description,
  ImageContainer,
  Subtitle,
  Title,
  Wrapper,
} from './styles';

function Banner() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Subtitle>Co-Criar Desenvolvimento</Subtitle>
          <Title>
            Desenvolvimento Pessoal e Profissional para evoluir e crescer
          </Title>
          <Description>
            A Co-criar leva seu propósito “movimentar positivamente a evolução
            de pessoas e organizações”, de forma coerente em suas abordagens de
            atuação.
          </Description>
          <Button>Agendar um horário</Button>
        </Content>

        <ImageContainer>
          <Image src={Images.Banner} alt="" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
}

export default Banner;
