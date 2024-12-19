import { useEffect, useState } from "react";

function AppCategory({ category, name, filter }) {
  const [appsInfo, setAppsInfo] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true); 
    fetch('/Apps')
      .then(response => response.json())
      .then(json => {
        setAppsInfo(json);
        setLoading(false);
      });
  }, []);
  let filteredApps
  if(filter === "movil"){
    filteredApps = appsInfo.filter(app => app.category.includes(category) || app.android || app.apple_ios).slice(0, 10);
  }else{
    filteredApps = appsInfo.filter(app => app.category.includes(category)).slice(0, 10);
  }

  const searching = appsInfo.filter(app => app.name.toLowerCase().includes(name));

  const appsToDisplay = name ? searching : filteredApps ;

  const handleDownloadChange = (url) => {
    if (url) {
      window.location.href = url;
    }
  };
  return (
    <div className="flex justify-between flex-wrap max-w-[1050px] m-auto">
      {filter === "movil" && (
        <h1 className="w-full text-3xl mt-10 font-spaceMono font-bold text-blue-600 underline">TODAS LAS APPS MOVILES</h1>
      )}
      {loading ? ( 
        <>
        <div className="flex flex-col lg:flex-row flex-wrap gap-4 justify-between lg:min-w[900px] max-w-[1050px] m-auto ">
          <div className="min-w-[240px] max-w-[620px] h-[120px] bg-gray-700 rounded-lg animate-pulse my-4">
          </div>
            <div className="min-w-[240px] max-w-[620px] h-[120px] bg-gray-700 rounded-lg animate-pulse my-4">
          </div>
          <div className="min-w-[240px] max-w-[620px] h-[120px] bg-gray-700 rounded-lg animate-pulse my-4">
          </div>
        </div>
         </>
      ) : appsToDisplay.length > 0 ? (
        appsToDisplay.map(app => (
          <div key={app.name} className="app min-w-[240px] max-w-[420px] mt-10 mx-4 text-start">
            <div className="flex gap-4 items-center">
              <picture className="logo max-w-12 md:max-w-16 rounded-sm">
                <img src={app.logo} alt={`${app.name} logo`} className="max-w-12 md:max-w-16 rounded-2xl" />
              </picture>
              <div className="text-app">
                <div>
                  <h2 className="font-bold text-xl font-spaceMono font-bold uppercase bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">{app.name}</h2>
                  <p className="text-[14px] md:text-sm font-Roboto font-medium hidden md:block ">{app.description}</p>
                </div>
              </div>
            </div>
            <p className="text-[14px] md:text-sm font-Roboto font-medium block md:hidden">{app.description}</p>
            <div className="bottom flex justify-between mt-2">
              <select name="select" className="bg-black text-white font-Roboto font-bold text-[12px] md:px-2 pr-6 md:pr-14 py-1 rounded-sm" onChange={(e) => handleDownloadChange(e.target.value)}>
                <option value="" disabled selected>Descargar</option>
                {app.windows && <option value={app.windows}>Windows</option>}
                {app.macOS && <option value={app.macOS}>Mac</option>}
                {app.linux && <option value={app.linux}>Linux</option>}
                {app.linux_deb && <option value={app.linux_deb}>Linux Deb</option>}
                {app.linuxtar && <option value={app.linuxtar}>Linux Tar</option>}
                {app.android && <option value={app.android}>Android</option>}
                {app.apple_ios && <option value={app.apple_ios}>iOS</option>}
              </select>
              <span className="text-[13px] font-semibold text-gray-500">{app.downloads}</span>
            </div>
          </div>
        ))
      ) : (
        <span className={`${name ? "block" : "hidden"} text-red-500 font-bold m-10`}>Lo sentimos esta App no está disponible</span>
      )}
    </div>
  );
}

export default AppCategory;
