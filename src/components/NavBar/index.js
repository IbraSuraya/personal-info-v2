"use client";

import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SideBar from "./Sidebar";
import MenuSearch from "./MenuSearch";
import MenuNotification from "./MenuNotification";
import MenuProfile from "./MenuProfile";
import LogoNav from "./LogoNav";
import MenuNavBar from "./MenuNavBar";
import Hambuger from "./Hambuger";

export default function NavBar() {
  const router = useRouter();
  const dropdownRef = useRef(null);
  const [currNav, setCurrNav] = useState(router.pathname);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setCurrNav(router.pathname);
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleNavBar = (event, href) => {
    event.preventDefault();
    setCurrNav(href);
    setIsSidebarOpen(false);
    router.push(`${href}`);
  };

  const handleDropdownItemClick = (event, href) => {
    event.preventDefault();
    setCurrNav(href);
    setIsDropdownOpen(false);
    setIsSidebarOpen(false);
    router.push(href);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
      {({ open }) => (
        <header>
          {/* Main */}
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button - Hambuger */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Hambuger
                  open={open}
                  setIsSidebarOpen={setIsSidebarOpen}
                  isSidebarOpen={isSidebarOpen}
                />
              </div>

              {/* NavBar Left Side */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* Logo */}
                <LogoNav />

                {/* NavBar */}
                <MenuNavBar
                  onNavBar={handleNavBar}
                  onDropdownItem={handleDropdownItemClick}
                  currNav={currNav}
                  isDropdownOpen={isDropdownOpen}
                  setIsDropdownOpen={setIsDropdownOpen}
                  dropdownRef={dropdownRef}
                />
              </div>

              {/* NavBar Right SIde */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Icon Search */}
                <MenuSearch />

                {/* Icon Notifications */}
                <MenuNotification />

                {/* Profile dropdown */}
                <MenuProfile />
              </div>
            </div>
          </div>

          {/* Sub Main */}
          <SideBar
            router={router}
            setCurrNav={setCurrNav}
            onNavBar={handleNavBar}
            onDropdownItem={handleDropdownItemClick}
            currNav={currNav}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </header>
      )}
    </Disclosure>
  );
}
