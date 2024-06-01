"use client";

import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { menuData, profileData } from "@/data/NavBarData";
import { classNames } from "@/Utilities/utils";
import Image from "next/image";
import SideBar from "./Sidebar";
import MenuSearch from "./MenuSearch";
import MenuNotification from "./MenuNotification";

export default function NavBar() {
  const router = useRouter();
  const [currNav, setCurrNav] = useState(router.pathname);

  const handleNavBar = (event, href) => {
    event.preventDefault();
    setCurrNav(href);
    router.push(`${href}`);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
      {({ open }) => (
        <header>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button - Hambuger */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* Logo */}
                <div className="flex flex-shrink-0 md:flex-row flex-col items-center">
                  <Image
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300"
                    width={20}
                    height={20}
                    priority
                    alt="logo-personal-info"
                  />
                  <h1 className="text-gray-300 ml-1 font-bold italic">
                    personalInfo
                  </h1>
                </div>
                {/* NavBar */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {menuData.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          currNav === item.href
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        onClick={(event) => handleNavBar(event, item.href)}
                        aria-current={
                          currNav === item.href ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm   hover:bg-gray-700 hover:text-white">
                          Project
                          <ChevronDownIcon
                            className="-mr-1 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </MenuButton>
                      </div>

                      <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <p className="mx-4 mt-1 font-bold text-xs underline">
                              API
                            </p>
                            <MenuItem>
                              {({ focus }) => (
                                <a
                                  href="/Project/API/Anime"
                                  className={classNames(
                                    focus
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                  onClick={(event) =>
                                    handleNavBar(event, item.href)
                                  }
                                >
                                  Anime - Jikan
                                </a>
                              )}
                            </MenuItem>
                            <MenuItem>
                              {({ focus }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    focus
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Default
                                </a>
                              )}
                            </MenuItem>
                          </div>
                          <div className="py-1">
                            <p className="mx-4 mt-1 font-bold text-xs underline">
                              Default
                            </p>
                            <MenuItem>
                              {({ focus }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    focus
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Default
                                </a>
                              )}
                            </MenuItem>
                            <MenuItem>
                              {({ focus }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    focus
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Default
                                </a>
                              )}
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              {/* Icon & Profile */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Icon Search */}
                <MenuSearch/>

                {/* Icon Notifications */}
                <MenuNotification/>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="photo-profile"
                        width={20}
                        height={20}
                        priority
                      />
                    </MenuButton>
                  </div>

                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {profileData.map((item) => (
                        <MenuItem key={item.name}>
                          {({ focus }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <SideBar onNavBar={handleNavBar} />
        </header>
      )}
    </Disclosure>
  );
}
