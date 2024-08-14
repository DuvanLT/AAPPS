
import { useState } from "react";
import AppCategory from "./AppCategory";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  function Search(formData) {
    const query = formData.get("query");
    setSearchQuery(query);
  }


  return (
    <div>
        <section className="hero flex flex-col items-center justify-center max-w-[1200px] text-center m-auto">
        <h1 className="text-2xl sm:text-4xl md:text-5xl mb-10 font-bold font-spaceMono max-w-[1000px]">ALL APPS: <u>Todas tus Apps</u> Favoritas en un solo lugar</h1>
        <p className="text-md md:text-2xl font-roboto">Accede a más de 40 aplicaciones para descargar en la misma pagina en pocos clicks <br/> <span className="hidden md:block">Una herramienta útil al formatear tu dispositivo</span>  </p>
      <form onSubmit={(e) => { e.preventDefault(); Search(new FormData(e.target)); }}>
      <input
            type="text"
            name="query" 
            placeholder="Classroom" 
            className="md:w-[600px] rounded-3xl p-4 pl-10  relative text-zinc-500 border-solid border-2 border-black bg-black font-spaceMono font-bold mt-10" 
        />
      </form>
      <AppCategory category={["social media", "chatting"]} name={searchQuery.toLowerCase()} />
      </section>
    </div>
  );
}