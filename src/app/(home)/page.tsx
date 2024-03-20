'use client';

import AboutUs from './fragments/AboutUs';
import Banner from './fragments/Banner';
import Clients from './fragments/Clients';
import Solutions from './fragments/Solutions';

export default function Home() {
  return (
    <>
      <Banner />
      <Solutions />
      <AboutUs />
      <Clients />
    </>
  );
}
