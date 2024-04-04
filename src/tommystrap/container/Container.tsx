import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => (
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">{children}</div>
);
