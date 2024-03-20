import Carousel from '@/components/Carousel';
import Container from '@/components/Container';
import Section from '@/components/Section';

import {
  Background,
  Card,
  CardSubTitle,
  CardText,
  CardTitle,
  Description,
  Title,
} from './styles';

function Clients() {
  return (
    <Background>
      <Container>
        <Section tag="Depoimentos de Clientes">
          <Title>Empresas que confiam na Co-criar</Title>
          <Description>
            O que nossos parceiros dizem sobre a Cocriar
          </Description>
          <Carousel>
            <Card>
              <CardTitle>Fernanda Alvez</CardTitle>
              <CardSubTitle>CEO da Cia Evoluir</CardSubTitle>
              <CardText>
                It was a pleasure working with the Coca team. They understood
                the brief correctly and delivered great designs exceeding the
                expectations.
              </CardText>
            </Card>
          </Carousel>
        </Section>
      </Container>
    </Background>
  );
}

export default Clients;
