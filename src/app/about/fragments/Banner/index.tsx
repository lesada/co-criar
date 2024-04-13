import Image from 'next/image';

import Images from '@/assets/images';

import { Container } from './styles';

function Banner() {
  return (
    <Container>
      <Image src={Images.BannerAbout} alt="Banner" objectFit="cover" />
    </Container>
  );
}

export default Banner;
