import NavBar from "@/components/NavBar";
import Image from "next/image";
import Footer from "@/components/footer";
export default function AboutUS() {
  return (
    <>
      <div className="absolute z-10">
      <NavBar />
      </div>     
      <div className=" relative w-full h-[50vh] z-1 ">
        <Image
          src="/image/values.jpg"
          objectFit="cover"
          layout="fill"
          alt="about images"
          className="h-auto w-auto top-0"
        />
      </div>
      <div className=" flex justify-start h-auto w-screen bg-transparent text-white mt-5  ">
        <Image
          src='/image/values-1.jpg'
          objectFit="cover"
          layout="fixed"
          width={500}
          height={900}
          alt="about image"
          className=" hidden xl:block xl:h-[900px] xl:w-[500px]   ml-10 rounded-sm "
        />
        <div>
          <h1 class="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 pl-5 pb-5">
              Values
            </span>{" "}
          </h1>
          <p className=" mb-12 text-lg px-7 text-black dark:text-white ">
            Integrated Cleanroom Technologies Private Limited has always been
            value driven. We breathe, practice and propagate the following five
            core values{" "}
          </p>
          <h1 class="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 pl-5 pb-5 ">
              Customer Centric
            </span>{" "}
            Approach
          </h1>
          <p className=" mb-12 text-lg px-7 text-black dark:text-white ">
            Customer is the purpose for which our business exists and he is the
            source of our sustenance and profit. We look at ourselves as an
            value enabling extended arm of our customer.{" "}
          </p>
          <h1 class="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 pl-5 pb-5">
              Company -
            </span>{" "}
            Employees
          </h1>
          <p className=" mb-12 text-lg px-7 text-black dark:text-white ">
            Keeping them first in this order. Any decision we take will be
            guided by this principle.{" "}
          </p>
          <h1 class="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 pl-5 pb-5">
              Safety
            </span>{" "}
          </h1>
          <p className=" mb-12 text-lg px-7 text-black dark:text-white ">
            We believe in safe work and keeping it above anything else in
            executing our work.{" "}
          </p>
          <h1 class="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 pl-5 pb-5">
              Teamwork
            </span>{" "}
          </h1>
          <p className=" mb-12 text-lg px-7 text-black dark:text-white ">
            Team Kshetra made up of people from different background working
            together for the customer delight.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
