import React from "react";
import { DashboardGroup } from "../api/api.types";
import { Link } from "./Link";

export interface GroupProps {
  group: DashboardGroup;
}

export const Group = ({ group }: GroupProps) => (
  <div className="px-10 py-6 m-6 border rounded-lg bg-gray-200">
    <h2 className="text-xl font-bold text-gray-600 mb-3">{group.text}</h2>
    <ul className="list-disc">
      {group.links.map((link, i) => (
        <React.Fragment key={`${link} + ${i}`}>
          <Link link={link} />
        </React.Fragment>
      ))}
    </ul>
  </div>
);
