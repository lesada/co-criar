import Image, { StaticImageData } from 'next/image';

import {
  Button,
  Container,
  Description,
  ImageContainer,
  Tag,
  Title,
} from './styles';

type CardProps = {
  tag: string;
  title: string;
  description: string;
  image: StaticImageData;
  button?: {
    label: string;
    href: string;
  };
};

function Card({ tag, title, description, image, button }: CardProps) {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt="" />
      </ImageContainer>
      <Tag>{tag}</Tag>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {button && <Button href={button.href}>{button.label}</Button>}
    </Container>
  );
}

export default Card;
