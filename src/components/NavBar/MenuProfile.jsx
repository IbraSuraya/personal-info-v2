import { classNames } from "@/Utilities/utils";
import { profileData } from "@/data/NavBarData";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import Image from "next/image";

export default function MenuProfile({}) {
  return (
    <>
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open Profile Menu</span>
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
            {profileData[0].body.map((item, index) => (
              <MenuItem key={index}>
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
    </>
  );
}
