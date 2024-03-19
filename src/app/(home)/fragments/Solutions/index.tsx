import { Fragment } from 'react';

import Container from '@/components/Container';
import Section from '@/components/Section';

import { solutions } from './constants';
import Item from './Item';

import { Description, List, Subtitle, Title, Wrapper } from './styles';

function Solutions() {
  return (
    <Container>
      <Section tag="Soluções Co-criar">
        <Wrapper>
          <Title>Soluções e possibilidades</Title>
          <Description>
            Os serviços estão disponíveis em formato presencial e em ambientes
            virtuais (on-line e ao vivo). Sinta-se à vontade para nos contatar e
            obter as informações necessárias para seguir em desenvolvimento
            conosco.
          </Description>
          {solutions.map((solution) => (
            <Fragment key={solution.title}>
              <Subtitle>{solution.title}</Subtitle>
              <List>
                {solution.items.map((item) => (
                  <Item
                    description={item.description}
                    icon={<item.icon />}
                    key={item.title}
                    title={item.title}
                    variant={solution.variant}
                    detach={item.detach}
                  />
                ))}
              </List>
            </Fragment>
          ))}
        </Wrapper>
      </Section>
    </Container>
  );
}

export default Solutions;
