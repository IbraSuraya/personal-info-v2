import { classNames } from "@/Utilities/utils";
import { menuData } from "@/data/NavBarData";
import {
  Disclosure,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function SideBar({ onNavBar }) {
  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {menuData.map((item) => (
          <Disclosure.Button
            key={item.name}
            href={item.href}
            className={classNames(
              item.currentNav === item.href
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
            onClick={(event) => onNavBar(event, item.href)}
            aria-current={item.currentNav === item.href ? "page" : undefined}
          >
            {item.name}
          </Disclosure.Button>
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
            <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <p className="mx-4 mt-1 font-bold text-xs underline">API</p>
                <MenuItem>
                  {({ focus }) => (
                    <a
                      href="/Project/API/Anime"
                      className={classNames(
                        focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={(event) => onNavBar(event, item.href)}
                    >
                      Anime - Jikan
                    </a>
                  )}
                </MenuItem>
              </div>
              <div className="py-1">
                <p className="mx-4 mt-1 font-bold text-xs underline">Default</p>
                <MenuItem>
                  {({ focus }) => (
                    <a
                      href="/Project/Default"
                      className={classNames(
                        focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
    </DisclosurePanel>
  );
}
