"use-client";
import ServiceNav from "@/components/NavBars/serviceNav";
import Carousel from "@/components/coursel";
import Footer from "@/components/footer";
export default function ComMotComplex() {
  const slides = ['/image/MOT.png', '/image/MotComplex.jpg'];
  return (
    <>
      <ServiceNav />
      <div className=" flex justify-center flex-col h-auto w-screen  border-solid border-5 border-y-black pt-[10vh] ">
       
        <div className="h-full">
          <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5  ">
            <span className="border-l-[10px] border-orange-600 border-solid pl-2">
              {" "}
              Modular Operation Theatres
            </span>
          </h2>
          <p className="text-lg px-7 text-black dark:text-orange-300  ">
            Our customized MOT eradicates environmental pollutants such as Dust,
            Airborne Microbes, Aerosol Particles and Chemical Vapours and
            maintains the MOT in Hygienic Condition. The MOTs are installed with
            SS or GIPC Walls and Ceiling Panels. The in-fill material in these
            panels is PUF. HEPA filtered air is diffused uniformly from Air
            Handling Unit - AHU through the Ducts at the Plenum. At plenum HEPA
            filters remove bacteria, virus along with the dust particles from
            the flowing Air. The air will exit through the Return Raisers.
            Ambient Temperature, Humidity and Air changes are automatically
            controlled by the AHU. At the initial stage of the project, we will
            design the MOTs based upon the surgery purposes by considering the
            number of Doctors & Staff involved at the time of Surgery carried
            along with the Equipment that are used.{" "}
          </p>
          <div className="flex justify-center mt-2 bg-gradient-to-r from-green-400 via-blue-600 to-purple-600 relative  ">
        <div className="w-[500px] rounded-lg shadow-xl ">
          <Carousel>
            {[
              ...slides.map((img) => <img src={img} key={Math.random()} alt='images' />),
            ]}
          </Carousel>
        </div>
      </div>
          <div className="h-full">
            <h2 className="text-3xl font-extrabold sm:text-5xl text-orange-600 text-center p-5 ">
              <span className="border-l-[10px] border-orange-600 border-solid pl-2">
                {" "}
                Favorable Elements with MOTs
              </span>
            </h2>
            <ul className="text-lg px-7 text-black dark:text-orange-300 text-balance max-w-lg space-y-1  list-disc list-inside px-auto  ">
              <li>Highly resists Corrosion, Moisture and Fungus</li>
              <li>Perfect integration with the Equipments</li>
              <li>Low Thermal Conductivity</li>
              <li>Installation time is Fast</li>
              <li>Surfaces are easy to clean and Disinfect</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
