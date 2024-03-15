import { useState } from "react";
import "@fontsource/dotgothic16/400.css";
import styles from "./SuperMarquee.module.css";

export interface SuperMarqueeProps {
  text?: string;
  speed?: string;
  stopOnHover?: boolean;
}

export const SuperMarquee = ({
  text,
  speed,
  stopOnHover,
}: SuperMarqueeProps) => {
  const [easterEggMode, setEasterEggMode] = useState(false);

  return (
    <div
      className={
        (easterEggMode ? styles.easterEggMode : "") +
        " " +
        styles.marquee +
        " text-green-400 min-w-100 border-y-4 border-gray-400 bg-black"
      }
      onDoubleClick={() => setEasterEggMode(!easterEggMode)}
    >
      <span
        className={
          (stopOnHover ? styles.stopOnHover : "") +
          " text-2xl tracking-wider mb-1"
        }
        style={{ animationDuration: speed ?? "15s" }}
      >
        {text || "Welcome to my dashboard!"}
      </span>
    </div>
  );
};
