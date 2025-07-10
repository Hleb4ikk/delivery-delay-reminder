"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl ">
        Page <span className="font-bold text-2xl">{pathname}</span> not found
      </p>
      <Link
        className="text-lg text-blue-500 font-bold hover:underline hover:text-blue-700"
        href="/"
      >
        Go to catalog
      </Link>
    </div>
  );
}
