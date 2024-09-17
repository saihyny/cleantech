"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import from next/navigation
export default function Services() {
  const router = useRouter();

  const motRouter = () => {
    router.push("/comMOTcomplex");
  };
  const modularICU = () => {
    router.push("/modularICU");
  };
  const ivfLabs = () => {
    router.push("/ivfLabs");
  };
  const modularPartitions = () => {
    router.push("/modularPartitions");
  };
  const CleanRoomEquipments = () => {
    router.push("/CleanRoomEquipments");
  };
  const HVAC = () => {
    router.push("/HVAC");
  };

  return (
    <section className=" mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0  bg-transparent  bg-gradient-to-r from-blue-800 to-black">
      <div className=" flex  justify-center  items-start">
        <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5  ">
          <span className="border-l-[10px] border-orange-600 border-solid pl-2">
            {" "}
            OUR SERVICES
          </span>
        </h2>
      </div>
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10 items-start text-black "
      >

        <section
          className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md"
          onClick={motRouter}
        >
          <Image
            src="/image/MOT.png"
            alt="mot"
            layout="fixed"
            height={200}
            width={600}
            objectFit="cover"
            className="h-[200px] w-full rounded-lg "
          />

          <h1 className="text-3xl my-5">Complete OT Complex</h1>
          <p className="mb-5">
            The MOTs are installed with SS or GIPC Walls and Ceiling Panels.
          </p>
        </section>

        <section
          className="p-5 py-10 bg-red-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md"
          onClick={modularICU}
        >
          <Image
            src="/image/icu.png"
            alt="mot"
            layout="fixed"
            height={200}
            width={600}
            objectFit="cover"
            className="h-[200px] w-full rounded-lg "
          />

          <h1 className="text-3xl my-5">Modular ICU</h1>
          <p className="mb-5">
            {" "}
            Kshetra offers customised ICU, NICU, MICU and Isolation Rooms
            installed with GIPC Wall and Ceiling Panels.
          </p>
        </section>

        <section
          className="p-5 py-10 bg-blue-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md"
          onClick={ivfLabs}
        >
          <Image
            src="/image/ivf2.jpg"
            alt="mot"
            layout="fixed"
            height={200}
            width={600}
            objectFit="cover"
            className="h-[200px] w-full rounded-lg "
          />

          <h1 className="text-3xl my-5"> IVF Labs</h1>
          <p className="mb-5">
            IVF laboratory is important which includes Walls, Doors, Ceiling,
            Flooring, and controlled HVAC system.
          </p>
        </section>

      </section>


      <div className=" flex  justify-center  items-start">
        <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5  ">
          <span className="border-l-[10px] border-orange-600 border-solid pl-2">
            {" "}
            OUR PRODUCTS
          </span>
        </h2>
      </div>
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10 items-start text-black ">

        <section
          className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md"
          onClick={modularPartitions}
        >
          <Image
            src="/image/ot.jpg"
            alt="mot"
            layout="fixed"
            height={200}
            width={600}
            objectFit="cover"
            className="h-[200px] w-full rounded-lg "
          />

          <h1 className="text-3xl my-5">modular Partitions</h1>
          <p className="mb-5">
            We manufacture the Modular Wall & Ceiling Panels with GIPC or SS
            Materials.
          </p>
        </section>

        <section
          className="p-5 py-10 bg-red-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md"
          onClick={CleanRoomEquipments}
        >
          <Image
            src="/image/passbox.jpg"
            alt="mot"
            layout="fixed"
            height={200}
            width={600}
            objectFit="cover"
            className="h-[200px] w-full rounded-lg "
          />

          <h1 className="text-3xl my-5">CleanRoom Equipments</h1>
          <p className="mb-5">
            {" "}
            We are offering both GIPC and SS customised Doors that are perfectly
            air tight.
          </p>
        </section>

        <section
          className="p-5 py-10 bg-blue-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md"
          onClick={HVAC}
        >
          <Image
            src="/image/hvac.png"
            alt="mot"
            layout="fixed"
            height={200}
            width={600}
            objectFit="cover"
            className="h-[200px] w-full rounded-lg "
          />

          <h1 className="text-3xl my-5"> HVAC</h1>
          <p className="mb-5">
            We offer multiple types of Ducting Systems made with GI, MS, SS,
            Aluminum and Polyester.
          </p>
        </section>

      </section>
    </section>
  );
}
