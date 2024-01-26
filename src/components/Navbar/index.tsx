'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Logos } from '@/assets/logos';
import { ROUTES_PATHS } from '@/constants/routesPaths';

import Button from '../Button';

import { Container, Item, List } from './styles';

function Navbar() {
  const pathname = usePathname();

  return (
    <Container>
      <Image
        src={Logos.CoCriarMin}
        alt="Logo da empresa Co-Criar"
        width={120}
        priority
      />
      <List>
        <Item $detach={pathname === ROUTES_PATHS.HOME}>
          <Link href={ROUTES_PATHS.HOME}>Home</Link>
        </Item>
        <Item $detach={pathname === ROUTES_PATHS.ABOUT}>
          <Link href={ROUTES_PATHS.ABOUT}>Sobre</Link>
        </Item>
        <Item $detach={pathname === ROUTES_PATHS.SERVICES}>
          <Link href={ROUTES_PATHS.SERVICES}>Serviços</Link>
        </Item>
        <Item $detach={pathname.includes(ROUTES_PATHS.EVENTS)}>
          <Link href={ROUTES_PATHS.EVENTS}>Eventos</Link>
        </Item>
        <Item $detach={pathname === ROUTES_PATHS.CONTACT}>
          <Link href={ROUTES_PATHS.CONTACT}>Contato</Link>
        </Item>
        <Item $detach={pathname.includes(ROUTES_PATHS.BLOG)}>
          <Link href={ROUTES_PATHS.BLOG}>Blog</Link>
        </Item>
      </List>
      <Button variant="secondary">Agendar um horário</Button>
    </Container>
  );
}

export default Navbar;
