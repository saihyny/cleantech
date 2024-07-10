import Image from "next/image";
import Link from "next/link";
export default function Services() {
  return (
    <div className="h-auto w-screen bg-transparent  mb-10">
      <div className=" flex  justify-center  items-start">
        <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5  ">
          <span className="border-l-[10px] border-orange-600 border-solid pl-2">
            {" "}
            OUR SERVICES
          </span>
        </h2>
      </div>
      <div className="grid  md:grid-cols-3 grid-cols-1  rounded-md w-auto h-auto gap-2  ">
        <div className=" text-center rounded-md bg-orange-400 shadow-2xl">
          <Image
            src='/image/MOT.png'
            alt="mot"
            layout="fixed"
            height={200}
            width={600}
            objectFit="cover"
            className="h-[200px] w-full rounded-lg"
          />
          <Link
            href="/comMOTcomplex"
            className="block relative px-4 py-2 text-sm text-gray-700 text-center
             rounded-md
            hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Complete OT Complex
          </Link>
        </div>
        <div className=" rounded-md  bg-orange-400 shadow-2xl ">
          <Image
            src='/image/icu.png'
            alt="mot"
            layout="fixed"
            height={200}
            width={600}
            objectFit="cover"
            className="h-[200px] w-full rounded-lg"
          />
          <Link
            href="/modularICU"
            className="block px-4 py-2 text-sm text-gray-700 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Modualar ICU,NICU,MICU & Isolation Rooms
          </Link>
        </div>
        <div className=" rounded-md  bg-orange-400 shadow-2xl">
          <Image
            src='/image/ivf2.jpg'
            alt="mot"
            layout="fixed"
            height={200}
            width={600}
            objectFit="cover"
            className="h-[200px] w-full rounded-lg"
          />
          <Link
            href="/ivfLabs"
            className="block px-4 py-2 text-sm text-gray-700 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            IVF Labs
          </Link>
        </div>
      </div>
      <div className=" flex  justify-center  items-start">
        <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5  ">
          <span className="border-l-[10px] border-orange-600 border-solid pl-2">
            {" "}
            OUR PRODUCTS
          </span>
        </h2>
      </div>
      <div className="grid  md:grid-cols-3 grid-cols-1  rounded-md w-auto h-auto gap-2  ">
        <div className=" text-center rounded-md  bg-orange-400 shadow-2xl ">
          <Image
            src='/image/ot.jpg'
            alt="mot"
            layout="fixed"
            height={200}
            width={600}
            objectFit="cover"
            className="h-[200px] w-full rounded-lg"
          />
          <Link
            href="/modularPartitions"
            className="block px-4 py-2 hover:bg-gray-100 text-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Modualar Partions
          </Link>
        </div>
        <div className="text-center rounded-md  bg-orange-400 shadow-2xl ">
          <Image
            src='/image/passbox.jpg'
            alt="mot"
            layout="fixed"
            height={200}
            width={600}
            objectFit="cover"
            className="h-[200px] w-full rounded-lg"
          />
          <Link
            href="/CleanRoomEquipments"
            className="block px-4 py-2 hover:bg-gray-100 text-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            CleanRoom Equipments
          </Link>
        </div>
        <div className=" rounded-md  bg-orange-400 shadow-2xl">
          <Image
            src='/image/hvac.png'
            alt="mot"
            layout="fixed"
            height={200}
            width={600}
            objectFit="cover"
            className="h-[200px] w-full rounded-lg"
          />
          <Link
            href="/HVAC"
            className="block px-4 py-2 hover:bg-gray-100 text-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            HVAC
          </Link>
        </div>
      </div>
    </div>
  );
}
