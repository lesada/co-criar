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
            <Form>
              <FormTitle>Entre em contato</FormTitle>
              <FormDescription>
                Dúvidas sobre nossos serviços e como podemos te ajudar? Entre em
                contato!
              </FormDescription>
              <Input id="name" label="Nome" />
              <Input id="email" label="E-mail" />
              <Input id="phone" label="Celular" />
              <Textarea id="message" label="Como podemos te ajudar?" rows={6} />
              <Button>Enviar</Button>
            </Form>
          </Wrapper>
        </Section>
      </Container>
    </Background>
  );
}

export default Contact;
