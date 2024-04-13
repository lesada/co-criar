import Container from '@/components/Container';
import Section from '@/components/Section';

import { Subtitle, Text, Title } from './styles';

function Enterprise() {
  return (
    <Container>
      <Section tag="Quem somos?" id="enterprise">
        <Title>A Co-criar</Title>
        <Subtitle>
          A Co-criar leva seu propósito “movimentar positivamente a evolução de
          pessoas e organizações”, de forma coerente em suas abordagens de
          atuação.
        </Subtitle>

        <Text>
          A Co-criar leva seu propósito “movimentar positivamente a evolução de
          pessoas e organizações”, de forma coerente em suas abordagens de
          atuação.
        </Text>
        <Text>
          Para isso, acreditamos que as melhores possibilidades de
          desenvolvimento são criadas através da colaboração e de permitir que
          as pessoas se encontrem, gerando novos saberes e novas soluções.
        </Text>
        <Text>
          Estimular a cocriação de alternativas contribui na resolução de
          situações complexas. Isso acontece, pois, ao incluir diferentes
          perspectivas, é possível ampliar a visão de realidade, considerando
          elementos diversos, os quais são gerados pelas pessoas através de
          complementariedade e valorização das competências e contribuições de
          cada um aos resultados do time e da organização.
        </Text>
        <Text>
          Buscamos, em nossas abordagens, integrar fundamentação consistente,
          técnicas sólidas e experimentação útil às necessidades
          organizacionais, com efetividade e impacto nos resultados e
          sustentabilidade do negócio. Ao encontro disso, o ponto de partida se
          dá na priorização de relacionamentos interpessoais apoiadores, conexão
          genuína, integridade e corresponsabilidade.
        </Text>
      </Section>
    </Container>
  );
}

export default Enterprise;
