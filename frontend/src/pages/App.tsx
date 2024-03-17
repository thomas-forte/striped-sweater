import { ChangeEvent, useEffect, useState } from "react";
import { Group } from "../components/Group";
import { getDashboard } from "../api/api";
import { DashboardGroup } from "../api/api.types";
import {
  CalendarIcon,
  ClockIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Page } from "../components/Page";

export function App() {
  const [dashboard, setDashboard] = useState<DashboardGroup[]>([]);
  const [time, setTime] = useState(new Date());
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    getDashboard().then((groups) => setDashboard(groups));
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  // const formattedTime = (dt: Date) => dt.toISOString().replace(/\.\d{3}/, "");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target?.value ?? "";
    setSearchItem(searchTerm);
  };

  const cheapGreedyFilter = (group: DashboardGroup) =>
    group.text.toLowerCase().includes(searchItem) ||
    group.links.some((l) => l.text.toLowerCase().includes(searchItem));

  return (
    <Page
      pageName="Dashboard"
      subHeading={
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
      }
    >
      <div>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 flex-shrink-0 text-blue-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-full bg-gray-200 border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="One little turtle-neck"
            value={searchItem}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {dashboard.length
        ? dashboard
            .filter(cheapGreedyFilter)
            .map((group, i) => <Group group={group} key={"keypurnicus-" + i} />)
        : "That one special sweater."}
    </Page>
  );
}
