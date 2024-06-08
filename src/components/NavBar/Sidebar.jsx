import { classNames } from "@/Utilities/utils";
import { menuData } from "@/data/NavBarData";
import {
  Disclosure,
  DisclosurePanel,
} from "@headlessui/react";
import MenuProject from "./MenuProject";
import { useEffect, useRef } from "react";

export default function SideBar({
  onNavBar,
  onDropdownItem,
  currNav,
  isDropdownOpen,
  setIsDropdownOpen,
  isSidebarOpen,
  setIsSidebarOpen,
}) {

  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        event.target.getAttribute("id") !== "sidebar-toggle"
      ) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef, setIsSidebarOpen]);

  const handleClick = (event, href) => {
    onNavBar(event, href);
    setIsSidebarOpen(false);
  };

  return (
    isSidebarOpen && (
      <DisclosurePanel className="sm:hidden">
        <div ref={sidebarRef} className="space-y-1 px-2 pb-3 pt-2">
          {menuData.map((item, index) => (
            <Disclosure.Button
              key={index}
              href={item.href}
              className={classNames(
                currNav === item.href
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              onClick={(event) => handleClick(event, item.href)}
              aria-current={currNav === item.href ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
          <MenuProject setIsDropdownOpen={setIsDropdownOpen} isDropdownOpen={isDropdownOpen} onDropdownItem={onDropdownItem}/>
        </div>
      </DisclosurePanel>
    )
  );
}
