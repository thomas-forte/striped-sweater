import { useState } from "react";
import classNames from "classnames";

import "@fontsource/dotgothic16/400.css";
import styles from "./SuperMarquee.module.css";

export interface SuperMarqueeProps {
  text?: string;
  speed?: string;
  stopOnHover?: boolean;
  sideBorders?: boolean;
  width?: string;
}

export const SuperMarquee = ({
  text,
  speed,
  stopOnHover,
  sideBorders,
  width,
}: SuperMarqueeProps) => {
  const [easterEggMode, setEasterEggMode] = useState(false);

  return (
    <div
      className={classNames(
        "text-green-400 border-y-4 border-gray-400 bg-black",
        styles.marquee,
        {
          [styles.easterEggMode]: easterEggMode,
          "border-x-4": sideBorders,
          "min-w-100": !width,
        },
      )}
      style={{ width: width ?? "unset" }}
      onDoubleClick={() => setEasterEggMode(!easterEggMode)}
    >
      <span
        className={classNames("text-2xl tracking-wider mb-1", {
          [styles.stopOnHover]: stopOnHover,
        })}
        style={{ animationDuration: speed ?? "15s" }}
      >
        {text || "Super Marquee!"}
      </span>
    </div>
  );
};
