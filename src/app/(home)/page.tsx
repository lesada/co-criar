'use client';

import AboutUs from './fragments/AboutUs';
import Banner from './fragments/Banner';
import Blog from './fragments/Blog';
import CallTo from './fragments/CallTo';
import Clients from './fragments/Clients';
import Contact from './fragments/Contact';
import Events from './fragments/Events';
import Solutions from './fragments/Solutions';

export default function Home() {
  return (
    <main>
      <Banner />
      <Solutions />
      <AboutUs />
      <Clients />
      <Events />
      <CallTo />
      <Blog />
      <Contact />
    </main>
  );
}
