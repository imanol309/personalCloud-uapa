import { NavBar, Hero, WhyChooseUs, Plans, Testimonies, Footer } from './components/';

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <WhyChooseUs />
        <Plans />
        <Testimonies />
      </main>
      <Footer />
    </>
  );
}
