'use client';

import whatsAppApi from '@/api/whatsapp';
import Icons from '@/assets/icons';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';

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
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const whatsAppMessage = `${message} \n \n
    Nome: ${name}\n \n
    E-mail: ${email}\n \n
    Celular: ${phone}\n \n
    Mensagem: ${message}
    `;

    window.open(whatsAppApi(whatsAppMessage), '_blank');
  };

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
      <Form onSubmit={onSubmit}>
        <Title>Agende um horário</Title>
        <Subtitle>
          Preencha o formulário abaixo. Um de nossos especialistas entrará em
          contato para agendar um horário.
        </Subtitle>
        <Input label="Nome" id="name" />
        <Input label="Email" id="email" type="email" />
        <Input label="Celular" id="cellphone" />
        <Textarea label="Como podemos ajudar?" id="message" />
        <Button type="submit">Solicitar cotação</Button>
      </Form>
    </Wrapper>
  );
}

export default About;
