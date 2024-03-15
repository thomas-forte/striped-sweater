import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Group } from "./components/Group";
import { getDashboard } from "./api/api";
import { DashboardGroup } from "./api/api.types";

export function App() {
  const [dashboard, setDashboard] = useState<DashboardGroup[]>([]);
  const [time, setTime] = useState('');

  useEffect(() => {
    getDashboard().then((groups) => setDashboard(groups));

    const visitsStorage = localStorage.getItem("visits");
    if (visitsStorage) {
      localStorage.setItem("visits", `${Number(visitsStorage) + 1}`)
    } else {
      localStorage.setItem("visits", '1')
    }
  }, []);

  const visits = localStorage.getItem("visits") ? Number(localStorage.getItem("visits")) : 1;
  useEffect(() => {
    const intervalID = setInterval(() =>  {
      const currentTimeFormatted = new Date().toISOString().replace(/\.\d{3}/, '');
      setTime(currentTimeFormatted)
    }, 1000);
    return () => clearInterval(intervalID);
  }, [])

  
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <header>
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
            {/* @ts-ignore */}
            <marquee>Welcome to my dashboard</marquee>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {dashboard.length
              ? dashboard.map((group, i) => (
                  <Group group={group} key={"keypurnicus-" + i} />
                ))
              : "That one special sweater."}
          </div>
        </main>
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div><span>Website Hits: {visits}</span></div>
            <progress max={`${visits > 100 ? visits + 5 : 100}`} value={visits}> {`${visits}%`} </progress>

            <p>The time is now: <time dateTime={time}/>{time}</p>
          </div>
      </div>
    </>
  );
}
