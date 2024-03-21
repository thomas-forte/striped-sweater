import { PropsWithChildren } from "react";
import { SuperMarquee } from "../super-marquee/SuperMarquee";
import classNames from "classnames";

export interface FooterProps extends PropsWithChildren {
  marquee?: string;
  marqueeSpeed?: string;
}

export const Footer = ({ marquee, marqueeSpeed, children }: FooterProps) => (
  <footer
    className={classNames("bg-blue-900", {
      "border-t-2 border-gray-500": !marquee,
    })}
  >
    {marquee ? (
      <SuperMarquee text={marquee} speed={marqueeSpeed ?? "25s"} />
    ) : (
      <></>
    )}
    <div className="mx-auto max-w-7xl px-2 pt-2 pb-8 sm:px-6 lg:px-8">
      {children}
    </div>
  </footer>
);
