import NavBar from "@/components/NavBar";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";
export default function contactUS() {
  return (
    <div className="">
      <div className="absolute z-10">
        <NavBar />
      </div>

      <div className="relative w-full h-[300px]">
        <Image
          src="/image/contact.jpg"
          layout="fill"
          objectFit="cover"
          className="h-auto w-auto top-0"
        />
      </div>
      <div className=" flex justify-center items-center h-auto w-screen bg-transparent text-white mt-5  ">
        <div class="card">
          <span class="small-text">E Mail: kshetracleantech@gmail.com</span>
          <span class="small-text">Mob: 97018 95005</span>
          <span class="title">No. 06-106/A/4/P/1</span>
          <span class="title"> Jeedimetla Village</span>
          <span class="title">Quthbullabpur Main Road</span>
          <span class="title">Hyderabad - 500055. Telangana, India.</span>
          <span class="desc">
            You can use Google Maps to find the location by clicking the link
            below.
          </span>
          <div class="buttons">
            <Link
              href="https://www.google.com/maps/dir//H+NO:06-106%2FA%2F4%2FP%2F1+Jeedimetla+village,+Quthbullapur+Main+Rd,+Quthbullapur,+Hyderabad,+Telangana+500055/@17.5067151,78.3851144,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bcb9105da18d997:0xa0960225ec6b9f70!2m2!1d78.4675162!2d17.5067321?entry=ttu"
              className="button"
            >
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 232597 333333"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M151444 5419C140355 1916 128560 0 116311 0 80573 0 48591 16155 27269 41534l54942 46222 69232-82338z"
                    fill="#1a73e8"
                  />
                  <path
                    d="M27244 41534C10257 61747 0 87832 0 116286c0 21876 4360 39594 11517 55472l70669-84002-54942-46222z"
                    fill="#ea4335"
                  />
                  <path
                    d="M116311 71828c24573 0 44483 19910 44483 44483 0 10938-3957 20969-10509 28706 0 0 35133-41786 69232-82313-14089-27093-38510-47936-68048-57286L82186 87756c8166-9753 20415-15928 34125-15928z"
                    fill="#4285f4"
                  />
                  <path
                    d="M116311 160769c-24573 0-44483-19910-44483-44483 0-10863 3906-20818 10358-28555l-70669 84027c12072 26791 32159 48289 52851 75381l85891-102122c-8141 9628-20339 15752-33948 15752z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M148571 275014c38787-60663 84026-88210 84026-158728 0-19331-4738-37552-13080-53581L64393 247140c6578 8620 13206 17793 19683 27900 23590 36444 17037 58294 32260 58294 15172 0 8644-21876 32235-58320z"
                    fill="#34a853"
                  />
                </svg>
              </span>
              <div className="button-text google">
                <span className="text-black">Direct To</span>
                <span className="text-black">Google Maps</span>
              </div>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
      <div className="mb-0">
        <Footer />
      </div>
    </div>
  );
}
