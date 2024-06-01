import { useEffect, useRef, useState } from "react";
import { classNames } from "@/Utilities/utils";
import { historyNotif } from "@/data/DummyData";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MenuNotification({}) {
  const popupRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [notifHistory, setNotifHistory] = useState(historyNotif);
  // Sorting notifications so that unread notifications appear first
  const sortedNotif = notifHistory.sort((a, b) => {
    // Sort by isRead status
    if (a.isRead !== b.isRead) {
      return a.isRead ? 1 : -1;
    }
    // If both have the same isRead status, sort by datetime
    return b.datetime - a.datetime;
  });

  const handleIconClick = (event) => {
    event.stopPropagation();
    setIsPopupOpen(!isPopupOpen);
  };

  const handleDeleteNotification = (id) => {
    setNotifHistory(notifHistory.filter((item) => item.id !== id));
  };

  const handleMarkAsRead = (id) => {
    setNotifHistory(
      notifHistory.map((item) =>
        item.id === id ? { ...item, isRead: true } : item
      )
    );
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

  return (
    <>
      <Menu as="div" className="relative inline-block">
        <div>
          <MenuButton
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
            onClick={handleIconClick}
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View Notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
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
            <MenuItems
              ref={popupRef}
              className="absolute right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <div className="flex justify-between px-4 py-1 items-center text-xs font-light border-b">
                  <p className="">Notifications</p>
                  <Link
                    href="#"
                    className=" underline hover:text-gray-500 transition-all"
                  >
                    Read All
                  </Link>
                </div>
                {notifHistory.length === 0 ? (
                  <p className="px-4 py-2 text-sm text-gray-500 text-center">
                    Tidak ada notifikasi
                  </p>
                ) : (
                  sortedNotif.map((item) => (
                    <MenuItem key={item.id}>
                      {({ focus }) => (
                        <div
                          className={classNames(
                            "flex justify-between items-center px-4 py-2 cursor-pointer",
                            focus
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600",
                            !item.isRead
                              ? "bg-green-100 hover:bg-green-200"
                              : "",
                            "block text-sm"
                          )}
                        >
                          <a
                            // href={item.href}
                            className="block font-medium"
                            onClick={() => handleMarkAsRead(item.id)}
                          >
                            {item.title}
                            <p className="text-xs font-light truncate-text">
                              {item.content}
                            </p>
                          </a>
                          <button
                            onClick={() => handleDeleteNotification(item.id)}
                            className="text-gray-400 hover:text-red-900"
                          >
                            <XMarkIcon
                              className="h-5 w-5 transform transition-transform duration-200 ease-in-out hover:scale-125"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      )}
                    </MenuItem>
                  ))
                )}
              </div>
            </MenuItems>
          </Transition>
        )}
      </Menu>
    </>
  );
}
