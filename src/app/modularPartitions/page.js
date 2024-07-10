"use client";
import ProductsNav from "@/components/NavBars/productsNav";
import Image from "next/image";
import Footer from "@/components/footer";
import Carousel from "@/components/coursel";

export default function ModularPartitions() {
  const slides = ["/image/panel1.jpg", "/image/ot.jpg", "/image/ot3.jpg"];
  const slides2 = ["/image/door1.jpg", "/image/door2.jpg", "/image/door3.jpg"];
  return (
    <>
      <ProductsNav />
  

      <div className=" flex justify-center flex-col h-auto w-screen  border-solid border-5 border-y-black mt-[10vh]">
     
        <div className="h-full">
          <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5  ">
            <span className="border-l-[10px] border-orange-600 border-solid pl-2">
              {" "}
              Modular Walls & Ceiling Panels
            </span>
          </h2>
          <p className="text-lg px-7 text-black dark:text-orange-300  ">
            We manufacture the Modular Wall & Ceiling Panels with GIPC or SS
            Materials. These panels are suitable for MOT, ICU, MICU, NICU,
            Isolation Room, IVF Labs and other contamination controlled Sterile
            zones. The in-fill material for the panels is PUF, EPF & Rockwool.
            The customised thickness the Panels is 50, 75 and 100 mm. The walls
            and ceilings are installed without any sharp edges by joining with
            Covings & Bends. This ensures easy cleaning and maintaining the
            surfaces of the panels. Our Panels highly durable and resistant
            against Moisture, Corrosion & Fungus.{" "}
          </p>
          <div className="flex justify-center mt-2 bg-gradient-to-r from-green-400 via-blue-600 to-purple-600 relative  ">
        <div className="w-[500px] rounded-lg shadow-xl ">
          <Carousel>
            {[
              ...slides.map((img) => <img src={img} />),
              <video src="/image/ot2.mp4" autoPlay muted loop />,
            ]}
          </Carousel>
        </div>
      </div>
        
          <div className="h-full">
            <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5 ">
              <span className="border-l-[10px] border-orange-600 border-solid pl-2">
                {" "}
                Hermatically sealed Metal Doors
              </span>
            </h2>
            <p className="text-lg px-7 text-black dark:text-orange-300  ">
              We are offering both GIPC and SS customised Doors that are
              perfectly air tight. The in-fill material is Honey Comb. All the
              components used for Doors are high in quality and standards.
              Windows are perfectly installed with proper air tightness without
              any air leakages. Toughened Glass are used for see through view at
              Doors and Double glazed view at Windows.{" "}
            </p>
            <h2 className="text-xl font-extrabold sm:text-5xl text-orange-600 text-center p-5 ">
              <span className="border-l-[10px] border-orange-600 border-solid pl-2">
                {" "}
                Type of Doors
              </span>
            </h2>
            <ul className="text-lg px-7 text-black dark:text-orange-300 text-balance max-w-lg space-y-1  list-disc list-inside px-auto  ">
              <li> Single & Double Leaf Swing Doors</li>
              <li>Single Leaf Sliding & Automatic Doors</li>
              <li>Fire Proof Doors</li>
            </ul>
          </div>
          <div className="flex justify-center mt-2 bg-gradient-to-r from-green-400 via-blue-600 to-purple-600 relative z-0 ">
            <div className="w-[500px]  rounded-lg shadow-xl  ">
              <Carousel>
                {[
                  ...slides2.map((img) => <img src={img} />),
                  <video src="/image/door5.mp4" autoPlay muted loop />,
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
