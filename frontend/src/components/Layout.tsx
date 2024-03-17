import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { SuperMarquee } from "./SuperMarquee";

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
    <div className="min-h-full">
      <Navbar />
      <SuperMarquee
        text="Fartacular is on the rise, BUY BUY BUY! Who needs inflation when you have farts, they are impervious to shrinkflation. Buy gold NO, Buy pure methane Fuck yes!"
        speed="25s"
      />
      <Outlet />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div>
          <span>Website Hits: {visits}</span>
        </div>
        <progress max={`${visits > 100 ? visits + 5 : 100}`} value={visits}>
          {`${visits}%`}
        </progress>
      </div>
    </div>
  );
}
