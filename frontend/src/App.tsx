import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Group } from "./components/Group";
import { getDashboard } from "./api/api";
import { DashboardGroup } from "./api/api.types";
import { SuperMarquee } from "./components/SuperMarquee";
import { CalendarIcon, ClockIcon } from "@heroicons/react/20/solid";

export function App() {
  const [dashboard, setDashboard] = useState<DashboardGroup[]>([]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    getDashboard().then((groups) => setDashboard(groups));

    const visitsStorage = localStorage.getItem("visits");
    if (visitsStorage) {
      localStorage.setItem("visits", `${Number(visitsStorage) + 1}`);
    } else {
      localStorage.setItem("visits", "1");
    }
  }, []);

  const visits = localStorage.getItem("visits")
    ? Number(localStorage.getItem("visits"))
    : 1;
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const formattedTime = (dt: Date) => dt.toISOString().replace(/\.\d{3}/, "");

  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <SuperMarquee
          text="Fartacular is on the rise, BUY BUY BUY! Who needs inflation when you have farts, they are impervious to shrinkflation. Buy gold NO, Buy pure methane Fuck yes!"
          speed="25s"
        />
        <header>
          <div className="mx-auto max-w-7xl py-8 sm:px-6 lg:px-8">
            <div className="min-w-0 flex-1 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  {time.toDateString()}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <ClockIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  {time.toTimeString()}
                </div>
              </div>
            </div>
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
          <div>
            <span>Website Hits: {visits}</span>
          </div>
          <progress max={`${visits > 100 ? visits + 5 : 100}`} value={visits}>
            {`${visits}%`}
          </progress>

          <p>
            The time is now: <time dateTime={formattedTime(time)} />
            {formattedTime(time)}
          </p>
        </div>
      </div>
    </>
  );
}
