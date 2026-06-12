import Link from "next/link";

import { problemsContent } from "../_constants/Constants";
import { GoArrowRight } from "react-icons/go";

function SectionProblem1() {
  return (
    <section
      id="ourmission"
      className="w-full py-10 min-h-screen bg-(--primary-light) text-(--color-offWhite)  flex items-center justify-center px-[5vw] 2xl:px-[8vw] xl:px-[6vw] max-lg:py-20"
    >
      <main className="flex flex-col gap-20">
        <div className="space-y-6 text-center">
          <div className="  md:font-medium md:text-xl text-(--color-cyan) inline-block">
            <p>The Problem We Exist to Solve</p>
          </div>
          <div className="m-auto w-fit">
            <h1 className="inline-block font-bold text-3xl md:text-4xl lg:text-5xl">
              Healthcare Doesn't Lack Data. It Lacks Intelligence Infrastructure.{" "}
            </h1>
          </div>

          <div className="m-auto w-fit">
            <h1 className="text-(--color-cyan) font-bold text-3xl md:text-4xl lg:text-5xl">
              Here&apos;s Why It Must Change.
            </h1>
          </div>
        </div>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 m-auto w-full">
          {problemsContent.map((el) => (
            <ProblemsDiv
              key={el.id}
              id={el.id}
              heading={el.heading}
              label={el.label}
              content={el.description}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 max-md:text-center text-(--color-offWhite) text-xl">
          <p>
            Healthcare today is reactive, imprecise, and built for populations
            rather than people. Patient data exists in abundance, yet it remains
            fragmented across disconnected systems, underused by clinicians, and
            largely inaccessible to the individuals it belongs to.
          </p>

          <p>
            The consequences are significant. Clinical trials take years and
            frequently fail. Treatments are still designed around the average
            patient, despite the fact that no two patients are the same. Most
            people have little visibility into their own health records, limited
            control over who accesses their data, and no reliable way to carry
            their health history forward across time.
          </p>

          <p>
            The problem, therefore, is not a shortage of data. It is the absence
            of intelligent systems capable of transforming that data into
            something actionable, personal, and certain.
          </p>

          <p>
            That is precisely what
            <span className="text-(--color-cyan)"> Biafo </span>
            is built to do.
          </p>
          <div className="w-fit">
            <a
              href="#platform"
              className="bg-(--color-secondary-btn) px-2.5 md:px-4 py-1.5 md:py-2 rounded-full text-(--color-offWhite) border border-(--color-gray) cursor-pointer flex gap-1 items-center"
            >
              Our Platform <GoArrowRight />
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}

function ProblemsDiv({ id, heading, label, content }) {
  return (
    <div
      key={id}
      className="text-center border border-(--color-cyan) py-15 rounded-4xl space-y-4 overflow-hidden relative"
    >
      <div className="top-[-25%] md:top-[-92%] md:left-1 absolute bg-[#2fd4d9] blur-[8vw] lg:blur-[10vw] rounded-full w-[40vw] sm:w-[36vw] md:w-[25vw] lg:w-[20vw] h-[40vw] sm:h-[26vw] md:h-[25vw] lg:h-[20vw] -translate-x-1/2 animate-pulse" />
      <div className="z-20 flex gap-2 flex-col">
        <h3 className="font-bold text-2xl lg:text-4xl">{heading}</h3>
        <h4 className="text-(--color-cyan) font-bold text-lg md:text-xl">{label}</h4>
        <div className="m-auto w-fit">
          <p className="text-base">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default SectionProblem1;
