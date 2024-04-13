import Image from 'next/image';

import Images from '@/assets/images';
import Container from '@/components/Container';
import Section from '@/components/Section';

import { Content, ImageContainer, Text, Title, Wrapper } from './styles';

function Me() {
  return (
    <Container>
      <Section tag="Fundadora da Co-criar" id="me">
        <Wrapper>
          <Content>
            <Title>Sobre a Letiene Ferreira</Title>

            <Text>Fundadora da Co-criar e facilitadora organizacional.</Text>
            <Text>
              Mestre em Psicologia e Saúde (UFCSPA), pesquisando sobre
              Psicologia Organizacional Positiva e Liderança Engajadora;
              Pós-graduação em Liderança de Negócios e Pessoas (ESPM),
              Especialização em Educação Permanente em Saúde (UFRGS) e Graduação
              em Psicologia (PUCRS).
            </Text>
            <Text>
              Formação em Coaching e Mentoring pelo Institutho dy Crescere
              Personas; Especialização em Neurocoaching
              (Neuroleadership/Fellipelli); Seminário Avançado em Liderança e
              Cultura (Rosemary Napper/UK); Coaching de Times (Georgina
              Woudstra/UK); Desenvolvimento de Facilitadores, Educadores e
              Treinadores (Rosemary Napper/UK); Coaching Executivo pela Academy
              of Executive Coaching; Qualificação MBTI Integrado Step I e II
              (Fellipelli).
            </Text>
            <Text>
              Cocoordenadora do MBA em Liderança e Comportamento Organizacional
              8ª Edição e Professora na Especialização em Psicologia
              Organizacional e do Trabalho na IMED Passo Fundo. Facilitadora
              parceira de programas de Desenvolvimento Organizacional no ICP.
              Pesquisadora colaboradora do Núcleo de Estudos em Psicologia
              Positiva Organizacional e do Trabalho da UFCSPA.
            </Text>
          </Content>
          <ImageContainer>
            <Image src={Images.AboutUs} alt="Letiene Ferreira" />
          </ImageContainer>
        </Wrapper>
      </Section>
    </Container>
  );
}

export default Me;
