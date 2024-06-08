"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen max-w-md mx-auto flex justify-center items-center text-gray-600 flex-col">
      <div className="flex justify-center items-center gap-1 my-1">
        <MagnifyingGlassIcon className="h-6 w-6 " />
        <h3 className="text-xl font-medium">Not Found</h3>
      </div>
      <div>
        <Link
          href="/"
          className="underline hover:text-gray-900 hover:font-bold"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
