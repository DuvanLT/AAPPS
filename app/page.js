'use client'

import Title from "@/components/Title";
import AppCategory from "@/components/AppCategory"; 
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Title titulo="COMUNICACION" />
      <AppCategory category="chatting" /> 
      <Title titulo="PROGRAMACION" />
      <AppCategory category="code" />
      <Title titulo="REDES SOCIALES" />
      <AppCategory category="social media" />
      <Title titulo="HERRAMIENTAS" />
      <AppCategory category="Tools" />
      <Title titulo="EDUCACION" />
      <AppCategory category="Education" />
      <Title titulo="NAVEGADORES" />
      <AppCategory category="Browser" />
      <Footer />
    </div>
  );
}
