import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Testimonial } from "./components/Testimonial";
import { OurProcess } from "./components/WhatWeDo";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurProcess />
      <Projects />
      <Testimonial />
      <Contact />
    </main>
  );
}
