
import HeroSection from "@/components/hero";
import Services from "./services/page";
import Products from "./products/page";
import Motives from "@/components/motives";
import Footer from "@/components/footer";

export default function Home() { 
  return (
    <>
    <div className="flex flex-col">
    <HeroSection/>
    <div className="pt-[770px] xl:pt-[520px] lg:pt-[480px]">
    <Motives/>
    <Services/>
    <Footer/>
    </div>

    
    </div>
      
    </>
  );
}
