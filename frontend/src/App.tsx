import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Group } from "./components/Group";
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
              ? dashboard.map((group, i) => (
                  <Group group={group} key={"keypurnicus-" + i} />
                ))
              : "That one special sweater."}
          </div>
        </main>
      </div>
    </>
  );
}
