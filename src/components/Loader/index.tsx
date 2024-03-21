'use client';

import { Container, Load } from './styles';

function Loader({ fullScreen }: { fullScreen?: boolean }) {
  return (
    <Container $fullScreen={fullScreen}>
      <Load>
        <div></div>
        <div></div>
        <div></div>
      </Load>
    </Container>
  );
}

export default Loader;
