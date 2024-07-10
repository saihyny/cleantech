import HeroSection from "@/components/hero";
import Services from "./services/page";
import Products from "./products/page";
import Motives from "@/components/motives";
import Footer from "@/components/footer";


export default function Home() {
 
  return (
    <>
      <div className="flex flex-col ">
        <HeroSection />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
          <a
            href="https://api.whatsapp.com/send?phone=9701895005&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
            class="float"
            target="_blank"
          >
            <i class="fa fa-whatsapp my-float"></i>
          </a>
        
        <div className="pt-[100px] xl:pt-[420px] md:pt-[220px] ">
          <Motives />
          <Services />
          <Footer />
  
        </div>
      </div>
    </>
  );
}
