import Card from '@/components/Card';
import Container from '@/components/Container';
import GoTo from '@/components/GoTo';
import Section from '@/components/Section';
import { ROUTES_PATHS } from '@/constants/routesPaths';

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
        <GoTo link={ROUTES_PATHS.EVENTS}>Ver Mais Eventos</GoTo>
      </Section>
    </Container>
  );
}

export default Events;
