import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { Projects } from "@/components/sections/Projects/Projects";
import { Contact } from "@/components/sections/Contact/Contact";
import { Social } from "@/components/sections/Social/Social";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  return (
    <HomeClient>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Social />
    </HomeClient>
  );
}
