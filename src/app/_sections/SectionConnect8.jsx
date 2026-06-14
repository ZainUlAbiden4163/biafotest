import { GoArrowRight } from "react-icons/go";
import MailAnchor from "../_components/MailAnchor";

function SectionConnect8() {
  return (
    <section className="text-(--color-offWhite) bg-(--primary-dark) py-20  relative flex flex-col justify-center items-center gap-20 overflow-hidden">
      {/* background circle gradient  */}
      {/* <div className="-top-[100%] left-[38%] absolute bg-[#2fd4d9] blur-[15vw] rounded-full w-[30vw] h-[30vw]" /> */}
      <div className="top-[-90%] md:top-[-80%] lg:top-[-40%] left-1/2 absolute bg-[#2fd4d9] blur-[18vw] sm:blur-[18vw] lg:blur-[14vw] rounded-full w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] h-[80vw] sm:h-[60vw] md:h-[45vw] lg:h-[30vw] -translate-x-1/2 animate-pulse" />

      {/* content of this section  */}
      <div className="z-10 flex flex-col items-center gap-2">
        <div className="">
          <h1 className="font-bold text-4xl lg:text-5xl text-center">
            Building the Infrastructure
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-4xl lg:text-5xl text-center text-(--color-cyan)">
            for Predictive Medicine at Scale
          </h1>
        </div>
        <div className="w-2/3">
          <p className="text-center">Biafo transforms fragmented healthcare data into a continuously learning intelligence layer that powers AI diagnostics, predictive models, patient digital twins, and virtual clinical trials. </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center gap-1 md:gap-4 md:tracking-wider">
        <a
          href="/contactus"
          className="bg-(--color-cyan) px-1.5 md:px-4 py-1 md:py-2 rounded-full cursor-pointer border border-(--color-cyan) text-(--primary-dark)"
        >
          Request early access
        </a>

        <a
          href="#platform-stack"
          className="bg-(--color-secondary-btn) px-1.5 md:px-4 py-1 md:py-2 rounded-full  cursor-pointer flex gap-1 items-center border border-(--color-gray)"
        >
          Partner with Biafo <GoArrowRight />
        </a>
      </div>
    </section>
  );
}

export default SectionConnect8;
