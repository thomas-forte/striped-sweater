import { PropsWithChildren } from "react";
import classNames from "classnames";

export interface SectionProps extends PropsWithChildren {
  title?: string;
  outline?: boolean;
  shadow?: boolean;
}

export const Section = (props: SectionProps) => (
  <section
    className={classNames("bg-gray-100 rounded-lg mb-4 p-6", {
      "border border-gray-200": props.shadow,
      "shadow-md": props.shadow,
      "pt-3": props.title,
    })}
  >
    <h2 className="text-xl font-bold text-gray-600 mb-4">{props.title}</h2>
    {props.children}
  </section>
);
