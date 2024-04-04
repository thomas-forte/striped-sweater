import { Outlet } from "react-router-dom";
import { Footer } from "../tommystrap/footer/Footer";
import { Navbar } from "../tommystrap/nav/Navbar";

export const Layout = () => (
  <div className="min-h-full flex flex-col">
    <Navbar />
    <Outlet />
    <div className="flex-grow"></div>
    <Footer />
  </div>
);
