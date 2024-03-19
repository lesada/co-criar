'use client';

import AboutUs from './fragments/AboutUs';
import Banner from './fragments/Banner';
import Solutions from './fragments/Solutions';

export default function Home() {
  return (
    <>
      <Banner />
      <Solutions />
      <AboutUs />
    </>
  );
}
