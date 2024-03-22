import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "../tommystrap/nav/Navbar";
import { Footer } from "../tommystrap/footer/Footer";
import githubIcon from "../images/github-mark-white.svg";

export function Layout() {
  const visits = localStorage.getItem("visits")
    ? Number(localStorage.getItem("visits"))
    : 1;

  useEffect(() => {
    const visitsStorage = localStorage.getItem("visits");
    if (visitsStorage) {
      localStorage.setItem("visits", `${Number(visitsStorage) + 1}`);
    } else {
      localStorage.setItem("visits", "1");
    }
  }, []);

  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <Outlet />
      <div className="flex-grow"></div>
      <Footer marquee="Fartacular is on the rise, BUY BUY BUY! Who needs inflation when you have farts, they are impervious to shrinkflation. Buy gold NO, Buy pure methane Fuck yes!">
        <div className="flex justify-between items-center">
          <div>
            <div>
              <span>Website Hits: {visits}</span>
            </div>
            <progress max={`${visits > 100 ? visits + 5 : 100}`} value={visits}>
              {`${(visits / (visits > 100 ? visits + 5 : 100)) * 100}%`}
            </progress>
          </div>
          <div>
            <a
              className="text-gray-200 text-sm p-2 flex rounded-md hover:underline hover:bg-blue-800"
              href="https://github.com/thomas-forte/striped-sweater"
            >
              Made with &lt;3 on
              <img className="ml-2 h-5 w-5" src={githubIcon} alt="github" />
            </a>
          </div>
        </div>
      </Footer>
    </div>
  );
}
