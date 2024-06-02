import { classNames } from "@/Utilities/utils";
import { menuData, menuProjectData } from "@/data/NavBarData";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function MenuNavBar({
  onNavBar,
  onDropdownItem,
  currNav,
  isDropdownOpen,
  setIsDropdownOpen,
}) {
  return (
    <>
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
              onClick={(event) => onNavBar(event, item.href)}
              aria-current={currNav === item.href ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton
                className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm hover:bg-gray-700 hover:text-white"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Project
                <ChevronDownIcon
                  className="-mr-1 h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <Transition
              show={isDropdownOpen}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {menuProjectData.map((items) => (
                  <div className="py-1" key={items.header}>
                    <p className="mx-4 mt-1 font-bold text-xs underline">
                      {items.header}
                    </p>
                    {items.subMenu.map((item) => (
                      <MenuItem key={item.name}>
                        {({ focus }) => (
                          <a
                            href={`/Project/${item.href}`}
                            className={classNames(
                              focus
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                            onClick={(event) =>
                              onDropdownItem(event, `/Project/${item.href}`)
                            }
                          >
                            {item.name}
                          </a>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
}
