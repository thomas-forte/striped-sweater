import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "@fontsource/fira-sans";
import "./index.css";

import { LeedleProvider } from "./context/LeedleContext";

import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { DiscordTools } from "./pages/DiscordTools";
import { GithubDash } from "./pages/GithubDash";

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
      {
        path: "github-dash",
        element: <GithubDash />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <LeedleProvider>
      <RouterProvider router={router} />
    </LeedleProvider>
  </React.StrictMode>,
);
