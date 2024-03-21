import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "@fontsource/fira-sans";
import "./index.css";

import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { DiscordTools } from "./pages/DiscordTools";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "discord-tools",
        element: <DiscordTools />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
