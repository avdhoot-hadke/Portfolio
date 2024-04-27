import Image from "next/image";
import Navbar from "./ui/navbar";
import Hero from "./ui/hero";
import Skill from "./ui/skills";
import Projects from "./ui/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" px-2 lg:px-12">
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </>
  );
}
