export default function Hero() {
    return(
        <>
        <section className="hero flex flex-col items-center justify-center max-w-[1200px] text-center m-auto">
            <h1 className="text-2xl sm:text-3xl md:text-5xl mb-10 font-bold font-spaceMono max-w-[1000px]">ALL APPS: <u>Todas tus Apps</u> Favoritas en un solo lugar</h1>
            <p className="text-xl md:text-2xl font-roboto">Accede a más de 40 aplicaciones para descargar en la misma pagina en pocos clicks <br/> Una herramienta útil al formatear tu dispositivo  </p>
            <input
            type="text" 
            placeholder="Busca una app" 
            className="md:w-[600px] rounded-3xl p-4 pl-10 mb-24 relative text-zinc-500 border-solid border-2 border-black bg-black font-spaceMono font-bold mt-10" 
        />
        </section>
        
        </>
    )
}