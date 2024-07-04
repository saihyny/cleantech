import React, { useState } from "react";
import Link from "next/link";

function MobileNav() {
  const [Services, setServices] = useState(false);
  const [products, setProducts] = useState(false);

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
          href="aboutUS"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 
          backdrop-filter backdrop-blur-lg bg-opacity-10 dark:text-gray-200 dark:hover:text-white"
        >
          About Us
        </Link>
        <Link
          href="contactUS"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 
          backdrop-filter backdrop-blur-lg bg-opacity-10 dark:text-gray-200 dark:hover:text-white"
        >
          Contact Us
        </Link>
      </div>
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        <li>
          <button
            id="dropdownNavbarLink"
            onClick={() => setServices(!Services)}
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            Services{" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {Services && (
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <Link
                  href="/comMOTcomplex"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Complete MOT Complex
                </Link>
              </li>
              <li>
                <Link
                  href="/modularICU"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Modualar ICU,NICU,MICU & Isolation Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="ivfLabs"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  IVF Labs
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button
            id="dropdownNavbarLink"
            onClick={() => setProducts(!products)}
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent  backdrop-filter backdrop-blur-lg bg-opacity-10 "
          >
            Products{" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {products && (
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <Link
                  href="/modularPartitions"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Modualar Partions
                </Link>
              </li>
              <li>
                <Link
                  href="/CleanRoomEquipments"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  CleanRoom Equipments
                </Link>
              </li>
            
              <li>
                <Link
                  href="/HVAC"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  HVAC
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
