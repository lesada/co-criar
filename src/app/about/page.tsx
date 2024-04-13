'use client';

import Icons from '@/assets/icons';
import Button from '@/components/Button';
import Input from '@/components/Input';

import {
  Form,
  Icon,
  Item,
  ItemSubtitle,
  ItemTitle,
  Items,
  Subtitle,
  Title,
  Wrapper,
} from './styles';

function About() {
  return (
    <Wrapper>
      <Items>
        <Item>
          <Icon>
            <Icons.RocketMin />
          </Icon>
          <div>
            <ItemTitle>Profissionais Especialistas</ItemTitle>
            <ItemSubtitle>
              Lorem ipsum sit porttitor erat tortor curabitur aliquam varius
              nisi, vehicula nisi nullam molestie mollis ante eros ornare metus
            </ItemSubtitle>
          </div>
        </Item>
        <Item>
          <Icon>
            <Icons.RocketMin />
          </Icon>
          <div>
            <ItemTitle>Profissionais Especialistas</ItemTitle>
            <ItemSubtitle>
              Lorem ipsum sit porttitor erat tortor curabitur aliquam varius
              nisi, vehicula nisi nullam molestie mollis ante eros ornare metus
            </ItemSubtitle>
          </div>
        </Item>
        <Item>
          <Icon>
            <Icons.RocketMin />
          </Icon>
          <div>
            <ItemTitle>Profissionais Especialistas</ItemTitle>
            <ItemSubtitle>
              Lorem ipsum sit porttitor erat tortor curabitur aliquam varius
              nisi, vehicula nisi nullam molestie mollis ante eros ornare metus
            </ItemSubtitle>
          </div>
        </Item>
      </Items>
      <Form>
        <Title>Agende um horário</Title>
        <Subtitle>
          Preencha o formulário abaixo. Um de nossos especialistas entrará em
          contato para agendar um horário.
        </Subtitle>
        <Input label="Nome" id="name" />
        <Input label="Email" id="email" />
        <Input label="Celular" id="cellphone" />
        <Input label="Empresa" id="enterprise" />
        <Input label="Como podemos ajudar?" id="message" />
        <Button>Solicitar cotação</Button>
      </Form>
    </Wrapper>
  );
}

export default About;
