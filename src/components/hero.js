"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import { gsap } from "gsap";

function HeroSection() {
  let sectionRef = useRef();
  

  // useEffect(() => {
  //   let tl = gsap.timeline();
  //   let animation = sectionRef.current;

  //   gsap.set([animation], { y: -50, opacity: 0 });
  //   if (animation) {
  //     tl.to(animation, {
  //       y: 0,
  //       opacity: 1,
  //       duration: 2,
  //       delay: 1,
  //       ease: "power2.out",
  //     });
  //   }
  // }, []);
  return (
    <div className="h-auto">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="banner-text mx-2 ">
        <section class="flex justify-center items-center" ref={sectionRef}>
          <div className="mx-auto border-solid border-2 max-w-screen-xl px-2 py-10 lg:flex  lg:items-center rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl  ">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-200 to-purple-300 bg-clip-text text-lg md:text-2xl font-extrabold  text-transparent   ">
                offering MOTs that carries...
              </h1>
              <h1
                className="  bg-gradient-to-r from-green-300 via-blue-200 to-purple-300
                  bg-clip-text text-2xl font-extrabold text-transparent sm:text-5xl     "
              >
                OutStanding Performace!!
                <span> Affordable Price!! </span>
                <span className="block sm:inline">
                  {" "}
                  Add Pride to Your Hospital!!{" "}
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:dark:text-white sm:/relaxed text-white  sm:text-white">
                Kshetra offers the products, components and services that are
                specifically designed & manufactured as per the letest guidlines
                of NABH and ISO standards{" "}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="tel:+919701895005"
                >
                  Get Started
                </a>

                <a
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium  hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto
                   sm:dark:text-white sm:/relaxed text-white  sm:text-white dark:text-white"
                  href="/contactUS"
                >
                  contact us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex w-[100vw] h-[100vh] bg-gradient-to-r from-blue-800 to-black  lg:bg-none ">
        <div className="hidden lg:block ">
          <div className="">
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
