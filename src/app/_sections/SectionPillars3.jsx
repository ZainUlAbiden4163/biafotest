import Image from "next/image";
import { pillarsContent } from "../_constants/Constants";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

function SectionPillars3() {
  return (
    <section
      id="platform"
      className="flex flex-col justify-evenly gap-10 items-center px-[5vw] 2xl:px-[8vw] xl:px-[6vw] max-lg:py-20 w-full py-10 min-h-screen text-(--color-offWhite) bg-(--primary-light)"
    >
      <div className="w-fit text-center">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          The Three Pillars of the{" "}
          <span className="text-(--color-cyan)">Biafo Platform</span>
        </h1>
      </div>
      <main className="lg:space-x-8 max-lg:space-y-8 grid grid-cols-1 lg:grid-cols-3 w-full max-lg:text-center">
        <ContainerContent
          heading={pillarsContent[0].heading}
          content={pillarsContent[0].content}
        >
          {" "}
          <Image
            src="/BRAIN.svg"
            alt=""
            fill
            className="bg-cover bg-no-repeat px-1 py-1"
          />
        </ContainerContent>
        <ContainerContent
          heading={pillarsContent[1].heading}
          content={pillarsContent[1].content}
        >
          {" "}
          <Image
            src="/DNA.svg"
            alt=""
            fill
            className="bg-cover bg-no-repeat px-1 py-1"
          />
        </ContainerContent>
        <ContainerContent
          heading={pillarsContent[2].heading}
          content={pillarsContent[2].content}
        >
          {" "}
          <Image
            src="/SHEILD.svg"
            alt=""
            fill
            className="bg-cover bg-no-repeat px-1 py-1"
          />
        </ContainerContent>
      </main>
    </section>
  );
}

export default SectionPillars3;

function ContainerContent({ heading, content, children }) {
  return (
    <div className="px-10 py-8 rounded-3xl bg-(--primary-dark)/50 border border-(--color-cyan)/50 md:space-y-5 space-y-4">
      <div className="max-lg:m-auto rounded w-12 h-12 bg-(--color-cyan)/20 relative">
        {children}
      </div>

      <h3 className="font-semibold md:font-bold text-2xl">{heading}</h3>

      <p>{content}</p>
    </div>
  );
}
