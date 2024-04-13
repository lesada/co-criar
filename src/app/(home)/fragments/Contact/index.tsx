import whatsAppApi from '@/api/whatsapp';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Input from '@/components/Input';
import Section from '@/components/Section';
import Textarea from '@/components/Textarea';

import {
  Background,
  Content,
  Description,
  Form,
  FormDescription,
  FormTitle,
  Info,
  Title,
  Wrapper,
} from './styles';

function Contact() {
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
    Celular: ${phone}
    `;

    window.open(whatsAppApi(whatsAppMessage), '_blank');
  };

  return (
    <Background>
      <Container>
        <Section>
          <Wrapper>
            <Content>
              <Title>Vamos juntos Co-criar inovação e desenvolvimento?</Title>
              <Description>
                Preencha o formulário ao lado e dê o primeiro passo no caminho
                do desenvolvimento pessoal e/ou corporativo. Em breve,
                entraremos em contato para marcar uma conversa personalizada.
              </Description>
              <Info>(51) 98438-6892</Info>
              <Info>
                Av Carlos Gomes, 111 11º andar/1101 Auxiliadora <br />
                Porto Alegre - RS - Brasil <br />
                90480-003
              </Info>
            </Content>
            <Form onSubmit={onSubmit}>
              <FormTitle>Entre em contato</FormTitle>
              <FormDescription>
                Dúvidas sobre nossos serviços e como podemos te ajudar? Entre em
                contato!
              </FormDescription>
              <Input id="name" name="name" label="Nome" required />
              <Input
                id="email"
                name="email"
                label="E-mail"
                type="email"
                required
              />
              <Input id="phone" name="phone" label="Celular" required />
              <Textarea
                id="message"
                name="message"
                label="Como podemos te ajudar?"
                rows={6}
                required
              />
              <Button type="submit">Enviar</Button>
            </Form>
          </Wrapper>
        </Section>
      </Container>
    </Background>
  );
}

export default Contact;
