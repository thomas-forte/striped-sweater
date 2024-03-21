import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "../tommystrap/nav/Navbar";
import { Footer } from "../tommystrap/footer/Footer";

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
        <div>
          <span>Website Hits: {visits}</span>
        </div>
        <progress max={`${visits > 100 ? visits + 5 : 100}`} value={visits}>
          {`${visits}%`}
        </progress>
      </Footer>
    </div>
  );
}
