import { NavBar, Hero, WhyChooseUs, Plans, Footer } from './components/';
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <UserButton afterSignOutUrl="/" />
        <Hero />
        <WhyChooseUs />
        <Plans />
      </main>
      <Footer />
    </>
  );
}
