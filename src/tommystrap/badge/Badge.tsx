import classNames from "classnames";

export enum BadgeColor {
  yellow = "bg-yellow-400",
}

export interface BadgeProps {
  text: string;
  color: BadgeColor;
}

export const Badge = ({ text, color }: BadgeProps) => (
  <span
    className={classNames("rounded-md px-1 text-xs mr-2 select-none", color)}
  >
    {text}
  </span>
);
