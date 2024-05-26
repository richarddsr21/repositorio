"use client";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ContactForm } from "./components/ContactForm";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <div className="w-full md:w-full h-screen">
      <ScrollToTop smooth top={700} className="flex items-center pl-1.5" />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}
