import { Icon } from "@iconify/react";
import SectionContainer from "../../SectionContainer";
import CompositeBackground from "./CompositeBackground";
import LogoCarousel from "./LogoCarousel";

function Hero() {
  const handleClick = (e) => {
    e.preventDefault();
    const companySection = document.querySelector("#company");
    if (companySection) companySection.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, null, "#company");
  };

  return (
    <SectionContainer
      className="relative h-screen pt-[12rem] md:pt-[11rem]"
      id="hero"
    >
      <CompositeBackground />
      <div className="absolute pl-4 lg:pl-[3.25rem]">
        <h1 className="max-w-lg md:max-w-3xl font-zwodrei font-bold text-[2.40rem] md:text-5xl lg:text-6xl leading-10 text-[#393939]">
          Strong connections lead to sustainable products
        </h1>
        <p className="max-w-md mt-6 md:mt-4 font-roboto font-extrabold text-xl tracking-widest text-white">
          We help companies partner with talented teams in order to build
          successful accelerated solutions
        </p>
      </div>
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Icon
          className="text-5xl md:text-6xl text-white cursor-pointer"
          icon="ph:caret-down-light"
          onClick={handleClick}
        />
      </div>
      <div className="w-full absolute bottom-0 bg-[#96969612]">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 items-center gap-x-2 pl-4 lg:pl-[3.25rem]">
          <p className="max-w-[12rem] col-start-1 col-end-3 text-sm md:text-sm text-white">
            Trusted by start ups and leading businesses
          </p>
          <div className="col-start-3 col-end-12 py-6">
            <LogoCarousel />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Hero;
