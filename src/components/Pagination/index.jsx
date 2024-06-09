import { formatNumber } from "@/Utilities/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({
  currPage,
  setCurrPage,
  lastPage,
  itemPage,
  itemTotal,
}) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevPage = () => {
    setCurrPage((prevState) => {
      if (prevState > 1) {
        scrollTop();
        return prevState - 1;
      }
      return prevState;
    });
  };

  const handleNextPage = () => {
    setCurrPage((prevState) => {
      if (prevState < lastPage) {
        scrollTop();
        return prevState + 1;
      }
      return prevState;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-3 mt-4 space-y-4">
      <div className="hidden sm:flex sm:flex-col sm:items-center">
        <p className="text-sm text-gray-700">
          Showing{" "}
          <span className="font-medium">{(currPage - 1) * itemPage + 1}</span>{" "}
          to <span className="font-medium">{itemPage * currPage}</span> of{" "}
          <span className="font-medium">
            {formatNumber(itemTotal)}
          </span>{" "}
          results
        </p>
      </div>
      <div className="flex flex-1 justify-center sm:hidden">
        <button
          onClick={currPage <= 1 ? null : handlePrevPage}
          className={`relative inline-flex items-center rounded-md border px-4 py-2 ${
            currPage <= 1
              ? "border-gray-300 bg-gray-500 text-sm font-medium text-gray-300 cursor-not-allowed"
              : "border-gray-300 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-50 transition-all"
          }`}
          disabled={currPage <= 1}
        >
          Previous
        </button>
        <button
          onClick={currPage > lastPage ? null : handleNextPage}
          className={`relative ml-3 inline-flex items-center rounded-md border px-4 py-2 ${
            currPage > lastPage
              ? "border-gray-300 bg-gray-500 text-sm font-medium text-gray-300 cursor-not-allowed"
              : "border-gray-300 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-50 transition-all"
          }`}
          disabled={currPage > lastPage}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            onClick={currPage <= 1 ? null : handlePrevPage}
            className={`relative inline-flex items-center rounded-l-md px-2 py-2 ${
              currPage <= 1
                ? "text-gray-400 ring-1 ring-inset ring-gray-300 bg-gray-500 cursor-not-allowed"
                : "text-gray-400 ring-1 ring-inset ring-gray-300 bg-gray-800 hover:bg-gray-500 hover:text-gray-800 transition-all focus:z-20 focus:outline-offset-0"
            }`}
            disabled={currPage <= 1}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* <a
            href="#"
            aria-current="page"
            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            2
          </a>
          <a
            href="#"
            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            3
          </a> */}
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-800 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
            Page {currPage} of {formatNumber(lastPage)}
          </span>
          {/* <a
            href="#"
            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            8
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            9
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            10
          </a> */}
          <button
            onClick={currPage > lastPage ? null : handleNextPage}
            className={`relative inline-flex items-center rounded-r-md px-2 py-2 ${
              currPage > lastPage
                ? "text-gray-400 ring-1 ring-inset ring-gray-300 bg-gray-500 cursor-not-allowed"
                : "text-gray-400 ring-1 ring-inset ring-gray-300 bg-gray-800 hover:bg-gray-500 hover:text-gray-800 transition-all focus:z-20 focus:outline-offset-0"
            }`}
            disabled={currPage > lastPage}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  );
}
