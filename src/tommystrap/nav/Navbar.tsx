import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { useLeedle } from "../../context/LeedleContext";

export interface NavbarLink {
  name: string;
  href: string;
}

const navigation: NavbarLink[] = [
  { name: "Dashboard", href: "/" },
  { name: "Discord", href: "/discord-tools" },
];

const leedleNavigation: NavbarLink[] = [
  { name: "Github", href: "/github-dash" },
];

export const Navbar = () => {
  const leedle = useLeedle();

  const mobileButton = (open: boolean) => {
    return open ? (
      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    ) : (
      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    );
  };

  const navItem = (item: NavbarLink) => (
    <NavLink
      key={item.name}
      to={item.href}
      className={({ isActive }) =>
        classNames("py-5 text-md font-medium", {
          "text-gray-900": isActive,
          "text-gray-400 hover:underline": !isActive,
        })
      }
    >
      {item.name}
    </NavLink>
  );

  const navMenuItem = (item: NavbarLink, close: () => void) => (
    <NavLink
      key={item.name}
      to={item.href}
      className={({ isActive }) =>
        classNames("block rounded-md px-3 py-2 font-medium", {
          "bg-gray-900": isActive,
          "hover:underline": !isActive,
        })
      }
      onClick={() => close()}
    >
      {item.name}
    </NavLink>
  );

  return (
    <Disclosure as="nav" className="sticky top-0 bg-gray-200 z-50">
      {({ open, close }) => (
        <>
          <div className="flex justify-between h-16">
            <div className="flex items-center bg-blue-900 md:rounded-br-2xl px-4 flex-grow md:flex-grow-0">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-auto"
                  src="/logo512.png"
                  alt="striped sweater"
                />
              </div>
              <h1 className="ml-3 text-xl sm:text-3xl font-light text-gray-200">
                Striped Sweater
              </h1>
              <div className="md:hidden flex-grow text-right">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 border-blue-900 hover:bg-gray-900 hover:border-gray-200 touch:border-grey-200">
                  {mobileButton(open)}
                </Disclosure.Button>
              </div>
            </div>
            <div className="hidden md:flex flex-grow bg-blue-900">
              <div className="rounded-tl-2xl bg-gray-200 w-full h-full"></div>
            </div>
            <div className="hidden md:flex items-baseline space-x-5 mr-4">
              {navigation.map((item) => navItem(item))}
              {leedle?.serverEnabled &&
                leedleNavigation.map((item) => navItem(item))}
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="bg-blue-900 text-gray-200 space-y-1 p-3">
              {navigation.map((item) => navMenuItem(item, close))}
              {leedle?.serverEnabled &&
                leedleNavigation.map((item) => navMenuItem(item, close))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
