import { DashboardLink } from "../api/api.types";

export interface LinkProps {
  link: DashboardLink;
}

export const Link = ({ link }: LinkProps) => (
  <li>
    <a className="text-blue-600" href={link.href}>
      {link.text}
    </a>
    -- {link.description}
  </li>
);
