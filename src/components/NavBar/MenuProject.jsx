import { classNames } from "@/Utilities/utils";
import { menuProjectData } from "@/data/NavBarData";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function MenuProject({
  setIsDropdownOpen,
  isDropdownOpen,
  onDropdownItem,
  dropdownRef,
}) {
  return (
    <Menu as="div" className="relative inline-block text-left" ref={dropdownRef}>
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
        <MenuItems className="absolute  z-10 mt-2 w-56 origin-top-right divide-y divide-gray-300 rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {menuProjectData.map((items, indexs) => (
            <div className="py-1" key={indexs}>
              <p className="mx-4 mt-1 font-bold text-xs underline">
                {items.header}
              </p>
              {items.subMenu.map((item, index) => (
                <MenuItem key={index}>
                  {({ focus }) => (
                    <a
                      href={`/Project/${item.href}`}
                      className={classNames(
                        focus ? "bg-gray-200 text-gray-900 font-medium transition-all" : "text-gray-700",
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
  );
}
