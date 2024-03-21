import { Container, Label, TextareaContainer } from './styles';

type TextareaProps = {
  id: string;
  label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function Textarea({ label, id, ...rest }: TextareaProps) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <TextareaContainer {...rest} />
    </Container>
  );
}

export default Textarea;
