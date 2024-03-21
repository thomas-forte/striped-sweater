import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { DashboardLink } from "../api/api.types";

export interface LinkProps {
  link: DashboardLink;
}

export const Link = ({ link }: LinkProps) => (
  <a
    className="flex items-center hover:bg-gray-200 rounded-md text-blue-600 px-2"
    href={link.href}
  >
    <ArrowRightIcon className="h-3 w-3 inline mr-1 text-yellow-400" />
    {link.text}
    <small className="ml-1 italic text-gray-500">-- {link.description}</small>
  </a>
);
