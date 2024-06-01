import { Menu, MenuButton, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

export default function MenuSearch({}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const popupRef = useRef(null);
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    const searchValue = searchInputRef.current.value;
    if (searchValue.trim() !== '') {
      alert('Pencarian berhasil: ' + searchValue);
      setSearchQuery("");
      setIsPopupOpen(false); // Menutup popup setelah berhasil melakukan pencarian
    } else {
      alert('Masukkan kata kunci untuk melakukan pencarian.');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleIconClick = (event) => {
    event.stopPropagation();
    setIsPopupOpen(!isPopupOpen);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <Menu as="div" className="mx-2">
      <div>
        <MenuButton
          type="button"
          className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
          onClick={handleIconClick}
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Bar Searching</span>
          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
        </MenuButton>
      </div>

      {isPopupOpen && (
        <Transition
          show={isPopupOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div ref={popupRef} className="absolute right-0 mt-1 w-80 ">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                ref={searchInputRef}
                className="block w-full rounded-md border-0 py-2 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Search Anything ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={handleKeyDown}
              />
              {searchQuery && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </Transition>
      )}
    </Menu>
  );
}
