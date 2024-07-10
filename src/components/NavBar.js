"use client"; //use client is used for Client Components
// import logo from "../image/logo.png";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./mobileNav";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  //  NAVBAR DROPDOWN FOR SERVIESE
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("Services");
  };

  //     NAVBAR DROPDOWN FOR PRODUCTS
  const [isSvsDropdownOpen, setIsSvsDropdownOpen] = useState(false);

  const toggleDropdownforSvs = () => {
    console.log("Products");
    setIsSvsDropdownOpen(!isSvsDropdownOpen);
  };

  //    MOBILE VIEW
  const [isCollapce, setCollapce] = useState(false);

  const collapseData = () => {
    setCollapce(!isCollapce);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 z-11 backdrop-filter backdrop-blur-lg bg-opacity-40 w-full ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 ">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src='/image/logo.png'
            width={220}
            height={150}
            className="h-14"
            alt="Flowbite Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          onClick={collapseData}
          className={
            " inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
          }
          aria-controls="navbar-dropdown"
          aria-expanded={isCollapce ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {!isCollapce ? (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          )}
        </button>
        {isCollapce && <MobileNav />}
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600"
                    : ""
                }block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0  md:dark:bg-transparent`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex z-100 items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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
              {isDropdownOpen && (
                <div
                  id="dropdownNavbar"
                  className=" absolute z-100 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="py-1 relative ">
                    <Link
                      href="/comMOTcomplex"
                      className="block relative px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Complete OT Complex
                    </Link>
                  </div>
                  <div className="py-1">
                    <Link
                      href="/modularICU"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Modualar ICU,NICU,MICU & Isolation Rooms
                    </Link>
                  </div>
                  <div className="py-1">
                    <Link
                      href="/ivfLabs"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      IVF Labs
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li
              onMouseEnter={toggleDropdownforSvs}
              onMouseLeave={toggleDropdownforSvs}
            >
              <button
                // onClick={toggleDropdownforSvs}
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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
              {isSvsDropdownOpen && (
                <div
                  id="dropdownNavbar"
                  className=" absolute z-100  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
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
                </div>
              )}
            </li>
            <li>
              <Link
                href="/aboutUS"
                className={`${
                  pathname === "/aboutUS"
                    ? " md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600"
                    : ""
                }block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contactUS"
                className={`${
                  pathname === "/contactUS"
                    ? " md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600"
                    : ""
                }block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
