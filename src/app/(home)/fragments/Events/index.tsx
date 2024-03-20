import Card from '@/components/Card';
import Container from '@/components/Container';
import Section from '@/components/Section';

import { items } from './constants';

import { Title, Wrapper } from './styles';

function Events() {
  return (
    <Container>
      <Section tag="Depoimentos de Clientes">
        <Title>Próximos eventos</Title>
        <Wrapper>
          {items.map((item) => (
            <Card
              key={item.title}
              tag="Eventos"
              title={item.title}
              description={item.description}
              image={item.image}
              button={item.button}
            />
          ))}
        </Wrapper>
      </Section>
    </Container>
  );
}

export default Events;
