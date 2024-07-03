import ServiceNav from "@/components/NavBars/serviceNav";
import Image from "next/image";
import Footer from "@/components/footer";
export default function ModularICU() {
  return (
    <>
      <ServiceNav />
      <div className=" flex justify-center flex-col h-auto w-screen  border-solid border-5 border-y-black ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-1  ">
          <Image
            src='/image/icu.png'
            alt="mot"
            layout="fixed"
            height={500}
            width={900}
            objectFit="cover"
            className="h-[500px] w-auto lg:w-[900px] rounded-lg"
          />
          <Image
            src='/image/icu2.jpg'
            alt="mot"
            layout="fixed"
            height={500}
            width={900}
            objectFit="cover"
            className="h-[500px] w-auto rounded-lg"
          />
        </div>
        <div className="h-full">
          <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5  ">
            <span className="border-l-[10px] border-orange-600 border-solid pl-2">
              {" "}
              Modular ICU, NICU, MICU & Isolation Rooms
            </span>
          </h2>
          <p className="text-lg px-7 text-black dark:text-orange-300 ">
            The atmospheric condition at Intensive Care Units - ICU is utmost
            important for the Patients after Surgery and to the patients with
            severe or life-threatening illnesses and injuries. Those patients
            require constant care, close supervision from life support equipment
            and medication in order to ensure normal bodily functions. Kshetra
            offers customised ICU, NICU, MICU and Isolation Rooms installed with
            GIPC Wall and Ceiling Panels. The in-fill material in these panels
            is PUF. Comfort air with clean air will be arranged at the above
            discussed sterile areas. In this system, the air in-flows and
            out-flows through the Ducts is automatically controlled by AHU which
            is placed outside the premises.{" "}
          </p>
          <div className="h-full">
            <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5 ">
              <span className="border-l-[10px] border-orange-600 border-solid pl-2">
                {" "}
                Favorable Elements for ICU, NICU, MICU and Isolation Rooms
              </span>
            </h2>
            <ul className="text-lg px-7 text-black dark:text-orange-300 text-balance max-w-lg space-y-1  list-disc list-inside px-auto  ">
              <li>Highly resists Corrosion, Moisture
              and Fungus</li>
              <li>Low Thermal Conductivity</li>
              <li>Installation time is Fast</li>
              <li>Surfaces are easy to clean and
              Disinfect</li>
              <li>Perfect integration with the
              Equipments</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
