'use client';

import { Logos } from '@/assets/Logos';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import { Container, Item, List } from './styles';

function Navbar() {
  return (
    <Container>
      <Image
        src={Logos.CoCriarMin}
        alt="Logo da empresa Co-Criar"
        width={120}
        height={50}
      />
      <List>
        <Item $detach>
          <Link href="/#">Home</Link>
        </Item>
        <Item>
          <Link href="/#sobre">Sobre</Link>
        </Item>
        <Item>
          <Link href="/#servicos">Serviços</Link>
        </Item>
        <Item>
          <Link href="/#eventos">Eventos</Link>
        </Item>
        <Item>
          <Link href="/#contato">Contato</Link>
        </Item>
        <Item>
          <Link href="/#blog">Blog</Link>
        </Item>
      </List>
      <Button variant="secondary">Agendar um horário</Button>
    </Container>
  );
}

export default Navbar;
