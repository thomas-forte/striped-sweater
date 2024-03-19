import { PropsWithChildren, ReactNode } from "react";

export interface GroupProps extends PropsWithChildren {
  pageName: string;
  subHeading?: ReactNode;
}

export const Page = ({ pageName, subHeading, children }: GroupProps) => (
  <>
    <header>
      <div className="mx-auto max-w-7xl py-8 sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {pageName}
          </h1>
          {subHeading}
        </div>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
    </main>
  </>
);
