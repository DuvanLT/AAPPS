'use client'

import Title from "@/components/Title";
import AppCategory from "@/components/AppCategory"; 
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Title titulo="COMUNICACION" />
      <AppCategory category="chatting" /> 
      <Title titulo="REDES SOCIALES" />
      <AppCategory category="social media" />
    </div>
  );
}
