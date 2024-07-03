import ProductsNav from "@/components/NavBars/productsNav";
import Image from "next/image";
import panel1 from "../../app/../../public/image/panel1.jpg";
import panel2 from "../../app/../../public/image/panel2.jpg";
import panel from "../../app/../../public/image/panel.jpg";
import door1 from "../../app/../../public/image/door1.jpg";
import door2 from "../../app/../../public/image/door2.jpg";
import door3 from "../../app/../../public/image/door3.jpg";
import Footer from "@/components/footer";

export default function ModularPartitions() {
  return (
    <>
      <ProductsNav />
      <div className=" flex justify-center flex-col h-auto w-screen  border-solid border-5 border-y-black ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3  ">
          <Image
            src={panel1}
            alt="mot"
            objectFit="cover"
            className="h-[500px] w-auto lg:w-[900px] rounded-lg"
          />
          <Image
            src={panel2}
            alt="mot"
            objectFit="cover"
            className="h-[500px] w-[500px] rounded-lg"
          />
          <Image
            src={panel}
            alt="mot"
            objectFit="cover"
            className="h-[500px] w-auto rounded-lg"
          />
        </div>
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
          <div className="grid md:grid-cols-3 grid-cols-1 gap-20 mt-10 ">
          <Image
            src={door1}
            alt="mot"
            objectFit="cover"
            className="h-[500px] w-auto lg:w-[900px] rounded-lg"
          />
          <Image
            src={door2}
            alt="mot"
            objectFit="cover"
            className="h-[500px] w-[500px] rounded-lg"
          />
          <Image
            src={door3}
            alt="mot"
            objectFit="cover"
            className="h-[500px] w-auto rounded-lg"
          />
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
        </div>
      </div>
      <Footer />
    </>
  );
}
