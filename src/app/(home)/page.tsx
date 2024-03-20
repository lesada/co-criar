'use client';

import AboutUs from './fragments/AboutUs';
import Banner from './fragments/Banner';
import CallTo from './fragments/CallTo';
import Clients from './fragments/Clients';
import Events from './fragments/Events';
import Solutions from './fragments/Solutions';

export default function Home() {
  return (
    <>
      <Banner />
      <Solutions />
      <AboutUs />
      <Clients />
      <Events />
      <CallTo />
    </>
  );
}
