import { PropsWithChildren } from 'react';

import ReactCarousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import { Container } from './styles';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Carousel({ children }: PropsWithChildren) {
  return (
    <Container>
      <ReactCarousel
        responsive={responsive}
        showDots
        arrows={false}
        infinite={false}
        autoPlaySpeed={1000}
        transitionDuration={500}
      >
        {children}
      </ReactCarousel>
    </Container>
  );
}

export default Carousel;
