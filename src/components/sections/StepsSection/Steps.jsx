import { useInView } from "react-intersection-observer";
import SectionContainer from "../../SectionContainer";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

function Steps() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <SectionContainer className="py-20 md:py-28" id="steps">
      <div className="px-4">
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
          <h2 className="font-zwodrei font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-[rgba(0,0,0,0.8)]">
            Find your perfect match
          </h2>
        </div>

        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto" ref={ref}>
          {inView && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 mt-6 lg:mt-12">
              <StepOne />
              <StepTwo />
              <StepThree />
              <StepFour />
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}

export default Steps;
