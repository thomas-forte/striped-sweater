import { HTMLAttributeAnchorTarget, PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {}

export const Button = ({ children }: ButtonProps) => (
  <button
    type="button"
    className="text-gray-200 text-sm px-2 py-1 flex rounded-xl hover:bg-blue-950"
  >
    {children}
  </button>
);

export interface ButtonHrefProps extends PropsWithChildren {
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

export const ButtonHref = ({ children, href, target }: ButtonHrefProps) => (
  <a
    className="text-gray-200 text-sm px-2 py-1 flex rounded-xl hover:bg-blue-950"
    href={href}
    target={target ?? "_blank"}
  >
    {children}
  </a>
);
