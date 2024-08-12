import { useEffect, useState } from "react"

function AppCategory({ category }) {
  const [appsInfo, setAppsInfo] = useState([])

  useEffect(() => {
    fetch('/Apps')
      .then(response => response.json())
      .then(json => setAppsInfo(json));
  }, []);

  const filteredApps = appsInfo.filter(app => app.category === category).slice(0,10)

  const handleDownloadChange = (url) => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className="flex justify-between flex-wrap max-w-[1050px] m-auto">
      {filteredApps.map(app => (
        <div key={app.name} className="game w-[420px] mt-10 mx-4">
          <div className="flex gap-4 items-center">
            <picture className="logo max-w-12 md:max-w-16 rounded-sm">
              <img src={app.logo} alt={`${app.name} logo`} className="max-w-12 md:max-w-16 rounded-2xl" />
            </picture>
            <div className="text-app">
              <div>
                <h2 className="font-bold text-xl font-spaceMono font-bold uppercase">{app.name}</h2>
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
      ))}
    </div>
  );
}

export default AppCategory;
