import ServiceNav from "@/components/NavBars/serviceNav";
import Carousel from "@/components/coursel";
import Footer from "@/components/footer";
export default function ModularICU() {
  const slides = ['/image/icu.png', '/image/icu2.jpg'];
  return (
    <>
      <ServiceNav />
      <div className=" flex justify-center flex-col h-auto w-screen  border-solid border-5 border-y-black mt-[10vh] ">
       
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
          <div className="flex justify-center mt-2 bg-gradient-to-r from-green-400 via-blue-600 to-purple-600 relative  ">
        <div className="w-[500px] rounded-lg shadow-xl ">
          <Carousel>
            {[
              ...slides.map((img) => <img src={img} key={Math.random()} />),
            ]}
          </Carousel>
        </div>
      </div>
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
