'use client';

import Image from 'next/image';
import Link from 'next/link';

import Icons from '@/assets/icons';
import { Logos } from '@/assets/logos';
import { ROUTES_PATHS } from '@/constants/routesPaths';

import Container from '../Container';

import {
  Background,
  Content,
  IconContainer,
  ImageContainer,
  List,
  ListItem,
  ListTitle,
} from './styles';

function Footer() {
  return (
    <Background>
      <Container>
        <Content>
          <ImageContainer>
            <Image src={Logos.CoCriarYellow} alt="" />
          </ImageContainer>
          <List>
            <ListTitle>Soluções</ListTitle>
            <ListItem>
              <Link href={ROUTES_PATHS.HOME}>Para sua empresa</Link>
            </ListItem>
            <ListItem>
              <Link href={ROUTES_PATHS.HOME}>Para você</Link>
            </ListItem>
            <ListItem>
              <Link href={ROUTES_PATHS.HOME}>Eventos</Link>
            </ListItem>
          </List>

          <List>
            <ListTitle>Sobre</ListTitle>
            <ListItem>
              <Link href={ROUTES_PATHS.HOME}>A Cocriar</Link>
            </ListItem>
            <ListItem>
              <Link href={ROUTES_PATHS.HOME}>Letiene Ferreira</Link>
            </ListItem>
          </List>

          <List>
            <ListTitle>Redes Sociais</ListTitle>
            <ListItem>
              <Link href="https://www.facebook.com/cocriardesenvolvimento?mibextid=ZbWKwL">
                <IconContainer>
                  <Icons.Facebook />
                </IconContainer>
                Facebook
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/cocriar_desenvolvimento">
                <IconContainer>
                  <Icons.Instagram />
                </IconContainer>
                Instagram
              </Link>
            </ListItem>
            <ListItem>
              <Link href={ROUTES_PATHS.HOME}>
                <IconContainer>
                  <Icons.WhatsApp />
                </IconContainer>
                WhatsApp
              </Link>
            </ListItem>
          </List>
        </Content>
      </Container>
    </Background>
  );
}

export default Footer;
