
import { useState } from "react";
import AppCategory from "./AppCategory";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter,setFilter] = useState("todos")

  function handleFilter(event) {
    setFilter(event.target.value)
  }

  function Search(formData) {
    const query = formData.get("query");
    setSearchQuery(query);
  }


  return (
    <div>
        <section className="hero flex flex-col items-center justify-center max-w-[1200px] text-center m-auto mb-40">
        <h1 className="text-2xl sm:text-4xl md:text-5xl mb-10 font-bold font-spaceMono max-w-[1000px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">ALL APPS: Todas tus Apps Favoritas en un solo lugar</h1>
        <p className="text-md md:text-2xl font-roboto">Accede a más de 40 aplicaciones para descargar en la misma pagina en pocos clicks <br/> <span className="hidden md:block">Una herramienta útil al formatear tu dispositivo</span>  </p>
      <div className="flex flex-col items-center sm:flex-row sm:items-end">
      <form onSubmit={(e) => { e.preventDefault(); Search(new FormData(e.target)); }}>
      <input
            type="text"
            name="query" 
            placeholder="Classroom" 
            className="md:w-[600px] rounded-3xl p-4 pl-10  relative text-zinc-500 border-solid border-2 border-black bg-black font-spaceMono font-bold mt-10" 
        />
      </form>
       <select value={filter} onChange={handleFilter}  className="p-4 rounded-2xl mx-2 my-1.5 font-spaceMono font-bold bg-black text-white max-w-32 h-full">
        <option className=""selected value="todos" >Todos</option>
        <option value="movil">Movil</option>
      </select>
      </div>
   
      <AppCategory category={["social media", "chatting"]} name={searchQuery.toLowerCase()} filter={filter} />
      </section>
    </div>
  );
}