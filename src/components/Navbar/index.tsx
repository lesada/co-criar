'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import Icons from '@/assets/icons';
import { Logos } from '@/assets/logos';
import { ROUTES_PATHS } from '@/constants/routesPaths';

import Button from '../Button';
import Container from '../Container';
import Loader from '../Loader';

import { Item, List, Menu, MobileList, MobileMenu, Wrapper } from './styles';

function Navbar() {
  const { push } = useRouter();
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  const variants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  };

  if (windowWidth === 0) return <Loader fullScreen />;

  return (
    <Wrapper>
      <Container>
        <Menu>
          <Image
            src={Logos.CoCriarMin}
            alt="Logo da empresa Co-Criar"
            width={120}
            priority
          />
          {windowWidth > 1024 ? (
            <>
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

              <Button
                variant="secondary"
                onClick={() => push(ROUTES_PATHS.ABOUT)}
              >
                Agendar um horário
              </Button>
            </>
          ) : (
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icons.HamburgerMenu />
            </button>
          )}
        </Menu>
      </Container>
      <AnimatePresence>
        {windowWidth <= 1024 && isMenuOpen && (
          <MobileMenu
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            <Container>
              <MobileList>
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
              </MobileList>
            </Container>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Navbar;
