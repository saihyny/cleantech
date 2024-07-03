import Link from "next/link";
export default function ServicesMobileNav() {
  return (
    <div
      id="dropdownNavbar"
      className="flex flex-col font-normal  divide-y divide-gray-100 rounded-lg bg-transparent  w-full dark:bg-gray-700 dark:divide-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl "
    >
      <div className="py-1">
        <Link
          href="/"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 
          backdrop-filter backdrop-blur-lg bg-opacity-10 
          dark:text-gray-200 dark:hover:text-white"
        >
          Home
        </Link>
        <Link
          href="/comMOTcomplex"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 
          backdrop-filter backdrop-blur-lg bg-opacity-10 dark:text-gray-200 dark:hover:text-white"
        >
          CompleteMotComplex
        </Link>
        <Link
          href="modularICU"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 
          backdrop-filter backdrop-blur-lg bg-opacity-10 dark:text-gray-200 dark:hover:text-white"
        >
          modularICU,NICU,MICU & isolationRooms
        </Link>
        <Link
          href="ivfLabs"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 
          backdrop-filter backdrop-blur-lg bg-opacity-10 dark:text-gray-200 dark:hover:text-white"
        >
          IVF Labs
        </Link>
      </div>
    </div>
  );
}
