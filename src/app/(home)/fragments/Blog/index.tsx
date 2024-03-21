import Card from '@/components/Card';
import Container from '@/components/Container';
import GoTo from '@/components/GoTo';
import Section from '@/components/Section';
import { ROUTES_PATHS } from '@/constants/routesPaths';

import { items } from './constants';

import { Wrapper } from './styles';

function Blog() {
  return (
    <Container>
      <Section tag="Blog Co-Criar">
        <Wrapper>
          {items.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              tag="Tecnologia"
            />
          ))}
        </Wrapper>
        <GoTo link={ROUTES_PATHS.BLOG}>Ver Mais Artigos</GoTo>
      </Section>
    </Container>
  );
}

export default Blog;
