"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Info() {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const horizontal = horizontalRef.current;

    if (!horizontal || horizontal.children.length === 0) return;

    const panels = horizontal.children.length;
    const panelWidth = window.innerWidth;
    const totalWidth = panelWidth * panels;

    // Set the width of the horizontal container dynamically
    gsap.set(horizontal, { width: `${totalWidth}px` });

    let tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 3,
        end: () => `+=${totalWidth}`,
      },
    });
    // Create the horizontal scroll animation
    tl.to(horizontal, {
      x: () => `-${totalWidth - window.innerWidth}px`, // Move to the end of the container
    });

    // Image bounce animation
    const images = horizontal.querySelectorAll("img");

    images.forEach((img) => {
      tl.to(
        img,
        {
          x: -50,
          opacity: 0,
          scrollTrigger: {
            trigger: img,
            start: "left 0%",
            end:'left -10%',
            containerAnimation: tl,
            scrub: true,
            markers: false,
          },
        }
      );
    });
    const titles = horizontal.querySelectorAll("h1");
    titles.forEach((title) => {
      tl.to(title, {
        x: -300,
        opacity: 0,
        scrollTrigger: {
          trigger: title,
          start: "right 80%",
          end:'right 20%',
          containerAnimation: tl,
          scrub: 2,
          markers: false,
        },
      });
    });

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);

      // Kill all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const spanTitles = [
    "Air Handling Units",
    "Ducting System",
    "Laminar Flow Units",
    "Modular Wall & Ceiling Panels",
    "Hermatically sealed Doors & Windows",
    "Pass Boxes",
    "Surgical Scrub Sinks",
    "Seamless Vinyl and Epoxy Floorings",
  ];

  // Dummy image paths, replace with actual paths later
  const imagePaths = [
    ["/image/AdobeAHU.jpg", "/image/AdobeAHU2.jpg"],
    ["/image/Ducting System.jpg", "/image/Ducting System2.jpg"],
    ["/image/Laminar Flow Units.jpg", "/image/Laminar Flow Units2.jpg"],
    [
      "/image/Modular Wall & Ceiling Panels.jpg",
      "/image/Modular Wall & Ceiling Panels2.jpg",
    ],
    ["/image/door6.jpg", "/image/door8.jpg"],
    ["/image/passbox3.jpg", "/image/passbox4.jpg"],
    ["/image/Surgical Scrub Sinks.jpg", "/image/Surgical Scrub Sinks2.jpg"],
    [
      "/image/Seamless Vinyl and Epoxy Floorings.jpg",
      "/image/Seamless Vinyl and Epoxy Floorings2.jpg",
    ],
  ];

  return (
    <div>
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden"
      >
        <div
          ref={horizontalRef}
          className="titles flex flex-row w-full flex-nowrap h-full bg-gradient-to-r from-blue-800"
        >
          {spanTitles.map((title, index) => (
            <span
              key={index}
              className="flex-none w-screen bg-transparent flex flex-col items-center justify-center space-y-4 px-2"
            >
              <h1
                style={{ fontSize: `clamp(2rem, 5vw, 9rem)` }}
                className="text-9xl font-extrabold text-black dark:text-white text-center"
              >
                {title}
              </h1>
              <div className="flex space-x-4">
                <Image
                  height={500}
                  width={500}
                  src={imagePaths[index][0]}
                  objectFit="cover"
                  className="rounded-lg"
                  alt={`${title} image 1`}
                />
                <Image
                  height={500}
                  width={500}
                  src={imagePaths[index][1]}
                  objectFit="cover"
                  className=" hidden sm:block rounded-lg"
                  alt={`${title} image 2`}
                />
              </div>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
