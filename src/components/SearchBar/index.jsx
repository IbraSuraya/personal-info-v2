"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SearchBar({ allCategories }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [searchQuery, setSearchQuery] = useState("");
  const searchBarRef = useRef(null);
  const searchInputRef = useRef();
  const router = useRouter();

  const handleSearch = () => {
    const keyword = searchInputRef.current.value;
    if (!keyword) return;
    router.push(`/Project/API/Anime/Search/${keyword}`);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleInputChange = () => {
    if (dropdownOpen) {
      setDropdownOpen(false);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form
      ref={searchBarRef}
      className="lg:max-w-4xl md:max-w-lg mx-auto px-2 py-4 "
    >
      <div className="flex relative">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Searching ..
        </label>
        <button
          id="dropdown-button"
          type="button"
          onClick={toggleDropdown}
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-6 text-sm font-medium text-center text-gray-300 bg-gray-800 border border-gray-500 rounded-l-lg hover:bg-gray-700 hover:text-gray-100"
        >
          {selectedCategory}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <div
            id="dropdown"
            className="absolute left-0 mt-1 bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-40"
          >
            <ul
              className="py-2 text-sm text-gray-200 "
              aria-labelledby="dropdown-button"
            >
              {allCategories.map((category, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect(category.name)}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-600"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm font-medium text-gray-900 bg-gray-100 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:outline-none"
            placeholder="Search ..."
            required
            ref={searchInputRef}
            onClick={handleInputChange}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <div className="absolute flex items-center inset-y-0 right-12 pr-3">
              <button
                type="button"
                onClick={clearSearch}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-gray-300 bg-gray-800 rounded-r-lg border border-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={(event) => {
              event.preventDefault();
              handleInputChange();
              handleSearch();
            }}
          >
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
