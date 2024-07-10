"use client";
import ProductsNav from "@/components/NavBars/productsNav";
import Image from "next/image";
import Footer from "@/components/footer";
export default function CleanRoomEquipments() {
  return (
    <>
      <ProductsNav />
      <div className=" md:flex  ">
        <Image
          src='/image/passbox.jpg'
          alt="mot"
          layout="fixed"
          height={500}
          width={500}
          objectFit="cover"
          className=" rounded-lg h-[300px] md:h-[400px] mt-[10vh]"
        />
        <div className="flex-1 items-center justify-center md:mt-20">
          <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5  ">
            <span className="border-l-[10px] border-orange-600 border-solid pl-2">
              {" "}
              Pass Box
            </span>
          </h2>
          <p className="text-lg px-7 text-black dark:text-orange-300  ">
            We manufacture both Static and Dynamic Pass Boxes. It has the
            feature of interlock system where the two doors do not open at the
            same time. The Dynamic Pass Boxes has Air flow system is arranged
            with HEPA Filters..{" "}
          </p>
        </div>
      </div>
      <div className=" md:flex  mt-3">
        <Image
          src='/image/scrub.jpeg'
          alt="mot"
          layout="fixed"
          height={400}
          width={500}
          objectFit="cover"
          className=" h-[300px] md:h-[400px] rounded-lg"
        />
        <div className="flex-1 items-center justify-center md:mt-5">
          <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5  ">
            <span className="border-l-[10px] border-orange-600 border-solid pl-2">
              {" "}
              Scrub Sink
            </span>
          </h2>
          <p className="text-lg px-7 text-black dark:text-orange-300  ">
            We design and manufacture One, Two and Three Bay Scrubs. The
            material and the components that are used are high in quality and
            standards.We offer elbow, knee, foot, electric or sensor operated
            Scrub Sinks with antiseptic/soap dispenser.{" "}
          </p>
        </div>
      </div>
      <div className=" md:flex  mt-3">
      
        <Image
          src='/image/efoxy.jpg'
          alt="mot"
          layout="fixed"
          height={400}
          width={500}
          objectFit="cover"
          className=" rounded-lg h-[300px] md:h-[400px]"
        />
        <div className="flex-1 items-center justify-center md:mt-5">
          <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5  ">
            <span className="border-l-[10px] border-orange-600 border-solid pl-2">
              {" "}
              Flooring
            </span>
          </h2>
          <p className="text-lg px-7 text-black dark:text-orange-300  ">
            We offer imported quality PVC (Vinyl) flooring that are highly
            durable that gives service for around 20 years. Our flooring laying
            will be seamless that are easy to maintain. We also offer Epoxy
            Flooring in multiple colors that are durable and gives service for
            many years. These floorings are Highly Hygienic, perfectly supports
            to Chemicals and Stress Factors, Easy to Clean and maintain.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
