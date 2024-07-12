import ProductsNav from "@/components/NavBars/productsNav";
import Image from "next/image";
import Carousel from "@/components/coursel";
import Footer from "@/components/footer";
export default function HVAC() {
  const slides = ['/image/hvac.png', '/image/ducting.jpg'];
  return (
    <>
      <ProductsNav />
      <div className=" flex justify-center flex-col h-auto w-screen  border-solid border-5 border-y-black md:mt-20 mt-40 ">
        {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-1  ">
          <Image
            src='/image/hvac.png'
            alt="mot"
            layout="fixed"
            width={900}
            height={400}
            objectFit="cover"
            className="h-[400px] w-auto lg:w-full rounded-lg"
          />
          <Image
            src='/image/ducting.jpg'
            alt="mot"
            layout="fixed"
            width={900}
            height={400}
            objectFit="cover"
            className="h-[400px] w-auto lg:w-full rounded-lg"
          />
        </div> */}
        <div className="h-full">
          <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5  ">
            <span className="border-l-[10px] border-orange-600 border-solid pl-2">
              {" "}
              HVAC System & Ducting System
            </span>
          </h2>
          <p className="text-lg px-7 text-black dark:text-orange-300  ">
            Our Experienced Engineers at Kshetra, design custom based Air
            Handling Units – AHUs. We have through knowledge about AHU
            Manufacturing. The available panel thickness is 25 and 50 mm. The
            in-fill material is PUF where the atmospheric heat gets controlled.
            The electricity power consumption will be lesser side. We are
            providing multiple stages of Filtration which are Flat Filters,
            V-Filters, Bag Filters, HEPA Filters and ULPA Filters. Through this
            method, Volatile Organic Compounds (VOCs) and Pungent Smell etc are
            controlled.{" "}
          </p>
          <br></br>
          <p className="text-lg px-7 text-black dark:text-orange-300  ">
            As per the site condition, we plan, design and install the Ducting
            system. The Air will travel effectively to the destination
            considering the contamination and ventilation aspects.{" "}
          </p>
          
          <p className="text-lg px-7 text-black dark:text-orange-300  ">
            We offer multiple types of Ducting Systems made with GI, MS, SS,
            Aluminum and Polyester..{" "}
          </p>
          <div className="h-full">
            <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5 ">
              <span className="border-l-[10px] border-orange-600 border-solid pl-2">
                {" "}
                Our Range of AHUs
              </span>
            </h2>
            <ul className="text-lg px-7 text-black dark:text-orange-300 text-balance max-w-lg space-y-1  list-disc list-inside px-auto  ">
              <li>Floor Mounted AHUs</li>
              <li> Ceiling Suspended AHUs</li>
              <li>Single Skin & Double Skin AHUs</li>
              <li>Heat Recovery AHUs</li>
              <li>Re-circulation AHUs</li>
            </ul>
          </div>
          <div className="flex justify-center mt-2 bg-gradient-to-r from-green-400 via-blue-600 to-purple-600 relative  ">
        <div className="w-[500px] rounded-lg shadow-xl ">
          <Carousel>
            {[
              ...slides.map((img) => <img src={img}key={Math.random()} />)
            ]}
          </Carousel>
        </div>
      </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
