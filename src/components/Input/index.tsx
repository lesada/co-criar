import { Container, InputContainer, Label } from './styles';

type InputProps = {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ label, id, ...rest }: InputProps) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <InputContainer {...rest} />
    </Container>
  );
}

export default Input;
