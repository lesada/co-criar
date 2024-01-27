import { Description, Icon, Title, Wrapper } from './styles';

type ItemProps = {
  variant: 'primary' | 'secondary';
  detach?: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
};

function Item({ variant, detach, icon, title, description }: ItemProps) {
  return (
    <Wrapper $variant={variant} $detach={detach}>
      <Icon $variant={variant}>{icon}</Icon>
      <Title $detach={detach}>{title}</Title>
      <Description $detach={detach}>{description}</Description>
    </Wrapper>
  );
}

export default Item;
