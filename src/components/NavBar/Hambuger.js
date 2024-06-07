import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Hambuger({ open, setIsSidebarOpen, isSidebarOpen }) {

  const handleClick = () => {
    setIsSidebarOpen(!open);
    // window.location.reload();
  };

  return (
    <Disclosure.Button
      className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      onClick={handleClick}
    >
      <span className="sr-only">Open main menu</span>
      {/* {console.log({isSidebarOpen})} */}
      {/* {open && isSidebarOpen ? ( */}
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
}
