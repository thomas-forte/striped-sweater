import { PropsWithChildren, ReactNode } from "react";

export interface GroupProps extends PropsWithChildren {
  name: string;
  subHeading?: ReactNode;
}

export const Page = ({ name, subHeading, children }: GroupProps) => (
  <>
    <header>
      <div className="mx-auto max-w-7xl px-2 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {name}
        </h1>
        {subHeading}
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">{children}</div>
    </main>
  </>
);
