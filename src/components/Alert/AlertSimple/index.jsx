import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function AlertSimple({ type, message, url, textUrl }) {
  const colors = {
    info: "blue",
    danger: "red",
    success: "green",
    warning: "yellow",
    plain: "gray",
  };

  return (
    <div
      id={`alert-border-${type}`}
      className={`flex items-center p-3 mb-3 text-${colors[type]}-800 border-t-4 border-${colors[type]}-300 bg-${colors[type]}-50 dark:text-${colors[type]}-400 dark:bg-gray-800 dark:border-${colors[type]}-800`}
      role="alert"
    >
      <InformationCircleIcon
        className="w-4 h-4"
        aria-hidden="true"
      />
      <div className="ms-2 text-xs font-medium mr-8">
        {message}{" "}
        <Link
          target="_blank"
          href={url}
          className="font-semibold underline hover:no-underline"
        >
          {textUrl}
        </Link>
      </div>
      <button
        type="button"
        className={`ms-auto -mx-1.5 -my-1.5 bg-${colors[type]}-50 text-${colors[type]}-500 rounded-lg focus:ring-2 focus:ring-${colors[type]}-400 p-1 hover:bg-${colors[type]}-200 inline-flex items-center justify-center h-7 w-7 dark:bg-gray-800 dark:text-${colors[type]}-400 dark:hover:bg-gray-700`}
        data-dismiss-target={`#alert-border-${type}`}
        aria-label="Close"
        
      >
        <span className="sr-only">Dismiss</span>
        <XMarkIcon className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
}