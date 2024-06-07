import { classNames } from "@/Utilities/utils";
import { menuData } from "@/data/NavBarData";
import MenuProject from "./MenuProject";

export default function MenuNavBar({
  onNavBar,
  onDropdownItem,
  currNav,
  isDropdownOpen,
  setIsDropdownOpen,
  dropdownRef,
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
          <MenuProject
            setIsDropdownOpen={setIsDropdownOpen}
            isDropdownOpen={isDropdownOpen}
            onDropdownItem={onDropdownItem}
            dropdownRef={dropdownRef}
          />
        </div>
      </div>
    </>
  );
}
