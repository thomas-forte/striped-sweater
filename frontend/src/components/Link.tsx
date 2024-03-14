import { DashboardLink } from "../api/api.types";

export interface LinkProps {
  link: DashboardLink;
  key: string;
}

export const Link = ({ link, key }: LinkProps) => (
  <li key={key}>
    <a className="text-blue-600" href={link.href}>
      {link.text}
    </a>
    -- {link.description}
  </li>
);
