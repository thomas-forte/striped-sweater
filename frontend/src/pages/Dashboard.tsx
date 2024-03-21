import { ChangeEvent, useEffect, useState } from "react";
import { Group } from "../components/Group";
import { Weather, getDashboard, getWeather } from "../api/api";
import { DashboardGroup } from "../api/api.types";
import {
  CalendarIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  CloudIcon,
} from "@heroicons/react/20/solid";
import { Page } from "../tommystrap/page/Page";
import { InputGroup } from "../tommystrap/input-group/InputGroup";

export const Dashboard = () => {
  const [dashboard, setDashboard] = useState<DashboardGroup[]>([]);
  const [weather, setWeather] = useState<Weather>();
  const [time, setTime] = useState(new Date());
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    getDashboard().then((groups) => setDashboard(groups));
    getWeather().then((data) => setWeather(data));
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target?.value ?? "";
    setSearchItem(searchTerm);
  };

  return (
    <Page
      name="Dashboard"
      subHeading={
        <div className="pt-2 text-gray-400 font-mono text-sm flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="flex items-center">
            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0" />
            {time.toDateString()}
          </div>
          <div className="flex items-center">
            <ClockIcon className="mr-1.5 h-5 w-5 flex-shrink-0" />
            {time.toTimeString().substring(0, 17)}
          </div>
          <div className="flex items-center">
            <CloudIcon className="mr-1.5 h-5 w-5 flex-shrink-0" />
            {weather?.current_condition?.length ? (
              `${weather.current_condition[0]?.temp_F}℉ ${weather.current_condition[0]?.weatherDesc?.map((v) => v.value)}`
            ) : (
              <></>
            )}
          </div>
        </div>
      }
    >
      <div className="mb-3">
        <InputGroup
          Icon={MagnifyingGlassIcon}
          value={searchItem}
          name="search"
          onChange={handleInputChange}
          autoFocus
        ></InputGroup>
      </div>
      {dashboard.map((group) => (
        <Group group={group} key={group.text} searchFilter={searchItem} />
      ))}
    </Page>
  );
};
