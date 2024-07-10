import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";
function HeroSection() {
  return (
    <div className="h-auto">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="banner-text  ">
        <section class="flex justify-center items-center   text-white sm:[mt-500px] ">
          <div class="mx-auto lg:mt-[200px] md:mb-[100] sm:mt-[100px] border-solid border-2 max-w-screen-xl px-2 py-10 lg:flex  lg:h-[70vh] lg:items-center rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl ">
            <div class="mx-auto max-w-3xl text-center">
              <h1 class="bg-gradient-to-r from-green-300 via-blue-200 to-purple-600 bg-clip-text text-2xl font-extrabold t text-transparent ">
                offering MOTs that carries...
              </h1>
              <h1 class="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-2xl font-extrabold text-transparent sm:text-5xl  ">
                OutStanding Performace!!
                <span> Affordable Price!! </span>
                <span class="block sm:inline">
                  {" "}
                  Add Pride to Your Hospital!!{" "}
                </span>
              </h1>

              <p class="mx-auto mt-4 max-w-xl sm:/relaxed lg:text-white text-black dark:text-white">
                Kshetra offers the products, components and services that are
                specifically designed & manufactured as per the letest guidlines
                of NABH and ISO standards{" "}
              </p>

              <div class="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="tel:+919701895005"
                >
                  call us
                </a>

                <a
                  class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-black hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto
                  dark:text-white"
                  href="/contactUS"
                >
                  contact us
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class=" absolute md:mt-[80px] mt-3 text-dark w-full    ">
          <div class="  mx-auto max-w-3xl text-center  absolute px-auto ">
            <h1
              class="bg-blue-800 bg-clip-text  sm:text-4xl  text-xl font-extrabold  text-transparent underline leading-none tracking-tight underline-offset-1 decoration-8 decoration-blue-200 dark:decoration-blue-600 
            dark:text-white px-5 py-5 "
            >
              Accompaniments Details for the Elements
            </h1>
          </div>
          <div class="mx-auto w-full text-black px-2 pt-[85px]  rounded-md bg-gradient-to-tl from-lime-200 via-sky-500 to-violet-500  dark:bg-black grid grid-cols-5 lg:grid-cols-3 text-xl  ">
            
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Air Handling Units
            </span>
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Ducting System
            </span>
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Laminar Flow Units (LAFU)
            </span>
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Modular Wall and Ceiling Panels
            </span>
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Hermatically sealed Doors and Windows
            </span>
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Pass Boxes
            </span>
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Surgical Scrub Sinks
            </span>
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Medical Gas Pipelines
            </span>
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Electrification with Dedicated Panel Box
            </span>
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Seamless Vinyl and Epoxy Floorings
            </span>
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Turnkey Solutions
            </span>

            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Designing - Manufacturing - Installations
            </span>
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2 pb-5 text-xs border-solid dark:text-white ">
              Validation & Documentation
            </span>
            <span class=" mb-4  font-bold leading-none tracking-tight text-black md:text-2xl lg:text-2xl border-l-2 px-2  text-xs border-solid dark:text-white ">
              Service & AMC Facilities
            </span>
          </div>
        </section>
      </div>

      <div className="banner ">
        <div className="bg-gradient-to-tl from-lime-200 via-sky-500 to-violet-500  md:hidden "></div>
        <div className="hidden md:block   ">
          <div className=" ">
            <Image
              src="/image/cleanTech.jpg"
              alt="img"
              layout="fixed"
              height={1200}
              width={1200}
              objectFit="cover"
              sizes=""
              className="banner-img h-full lg:h-[90%] xl:h-[100%]"
            />
            <Image
              src="/image/cleanTech2.jpg"
              alt="img"
              layout="fixed"
              height={1200}
              width={1200}
              objectFit="cover"
              sizes=""
              className="banner-img h-full lg:h-[90%] xl:h-[100%]"
            />
            <Image
              src="/image/cleanTech3.jpg"
              alt="img"
              layout="fixed"
              height={1200}
              width={1200}
              objectFit="cover"
              sizes=""
              className="banner-img h-full lg:h-[90%] xl:h-[100%]"
            />
            <Image
              src="/image/logo.png"
              alt="img"
              layout="fixed"
              height={1200}
              width={1200}
              sizes=""
              objectFit="cover"
              className="banner-img h-full lg:h-[90%] xl:h-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
