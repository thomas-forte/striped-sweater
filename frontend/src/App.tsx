import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { getDashboard } from "./api/api";
import { DashboardGroup } from "./api/api.types";

export function App() {
  const [dashboard, setDashboard] = useState<DashboardGroup[]>([]);

  useEffect(() => {
    getDashboard().then((groups) => setDashboard(groups));
  }, []);

  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <header>
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {dashboard.length
              ? dashboard.map((g: any, i: number) => (
                  <div
                    key={"keypurnicus-" + i}
                    className="px-10 py-6 m-6 border rounded-lg bg-gray-200"
                  >
                    <h2 className="text-xl font-bold text-gray-600 mb-3">
                      {g.text}
                    </h2>
                    <ul className="list-disc">
                      {g.links.map((l: any, i: number) => (
                        <li key={"kedorian-" + i}>
                          <a className="text-blue-600" href={l.href}>
                            {l.text}
                          </a>{" "}
                          -- {l.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : "That one special sweater."}
          </div>
        </main>
      </div>
    </>
  );
}
