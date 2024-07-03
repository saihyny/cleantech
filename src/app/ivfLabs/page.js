import ServiceNav from "@/components/NavBars/serviceNav";
import Image from "next/image";
import ivf from "./../../image/ivf.jpg";
import ivf2 from "./../../image/ivf2.jpg";
import Footer from "@/components/footer";

export default function IVFlabs() {
  return (
    <div className="h-full">
      <ServiceNav />
      <div className=" flex justify-center flex-col h-auto w-screen  border-solid border-5 border-y-black ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10  ">
          <Image
            src={ivf}
            alt="mot"
            objectFit="cover"
            className="h-[500px] w-auto lg:w-[900px] rounded-lg"
          />
          <Image
            src={ivf2}
            alt="mot"
            objectFit="cover"
            className="h-[500px] w-auto rounded-lg"
          />
        </div>
        <div className="h-full">
          <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5  ">
            <span className="border-l-[10px] border-orange-600 border-solid pl-2">
              {" "}
              IVF Lab
            </span>
          </h2>
          <p className="text-lg px-7 text-black dark:text-orange-300  ">
            Kshetra offers to set up an IVF lab specially designed to maintain
            the sterile and non-toxic environment. The atmosphere is extremely
            important in terms of temperature, humidity, and air quality to
            optimize Fertilization, Cleavage, Blastulation, Implantation, and
            Pregnancy Rates. To ensure the same, infrastructure of the IVF
            laboratory is important which includes Walls, Doors, Ceiling,
            Flooring, and controlled HVAC system.{" "}
          </p>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
