import { NavBar, Hero, WhyChooseUs, Plans, Footer } from './components/';
import { UserButton } from "@clerk/nextjs";

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
      </main>
      <Footer />
    </>
  );
}
