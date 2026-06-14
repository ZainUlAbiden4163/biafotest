import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative flex bg-[#121828] py-10 w-full md:min-h-screen overflow-hidden">
      {/* <div className="top-[58%] left-[56%] absolute bg-[#2fd4d9] blur-[15vw] rounded-full w-[65vw] h-[65vw] lg:animate-[pulse_4s_infinite]" /> */}

      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          priority
          quality={100}
          className="object-center object-cover"
        />
        <div className="absolute inset-0 bg-[#121828]/50 md::bg-[#121828]/40 lg:bg-[#121828]/30 xl:bg-[#121828]/20" />
      </div>
      <main className="z-10 relative flex items-center px-[5vw] 2xl:px-[8vw] xl:px-[6vw] py-20 lg:py-0 w-full">
        {/* ── Left column ── */}
        <div className="flex flex-col justify-center items-center lg:items-start gap-6 order-1 lg:order-1 bg-black/20 px-4 py-10 rounded-4xl w-fit">
          <div className="flex flex-col max-md:text-center">
            <h2 className="md:font-medium md:text-xl text-(--color-cyan) inline-block mx-auto mb-10 px-4 rounded-4xl bg-(--primary-dark)/20">
              Healthcare Intelligence Platform
            </h2>
            <h1 className="font-bold text-(--color-offWhite) text-3xl md:text-4xl xl:text-6xl">
              Building the Healthcare<br /> Intelligence<br /> Infrastructure Layer
            </h1>

            {/* <h1 className="bg-clip-text bg-linear-180 from-white to-(--color-cyan) font-bold text-transparent text-4xl md:text-5xl xl:text-7xl">
              Intellegince
            </h1>

            <h1 className="font-bold text-4xl md:text-5xl xl:text-7xl text-(--color-cyan)">
              YOUR LEGACY.
            </h1> */}
          </div>
          <div className="flex flex-col gap-1">

            <p className="max-w-prose text-white text-base md:text-xl max-md:text-center">
              Biafo transforms fragmented patient data into predictive models, digital twins, and virtual clinical trials
              on a secure, compliant, auditable foundation.
            </p>
            <p className="max-w-prose text-white text-base md:text-xl max-md:text-center">
              Built for regulated healthcare environments and designed to scale from diagnostics to clinical research
              and virtual trials through a continuous learning intelligence layer.

            </p>
          </div>

          <div className="flex md:flex-row flex-col items-center gap-1 md:gap-4 md:tracking-wider">
            <a
              href="/contactus"
              className="bg-(--color-cyan) px-1.5 md:px-4 py-1 md:py-2 rounded-full cursor-pointer border border-(--color-cyan)"
            >
              Request early access
            </a>

            <a
              href="#platform-stack"
              className="bg-(--color-secondary-btn) px-1.5 md:px-4 py-1 md:py-2 rounded-full text-(--color-offWhite) cursor-pointer flex gap-1 items-center border border-(--color-gray)"
            >
              Explore Platform <GoArrowRight />
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}

export default HeroSection;

//  <section className="relative flex bg-[#121828] py-10 w-full md:min-h-screen overflow-hidden">
//     <div className="top-[58%] left-[56%] absolute bg-[#2fd4d9] blur-[15vw] rounded-full w-[65vw] h-[65vw] lg:animate-[pulse_4s_infinite]" />
//     <main className="z-10 relative items-center gap-10 lg:gap-0 grid grid-cols-1 lg:grid-cols-[44%_56%] 2xl:grid-cols-[42%_58%] px-[5vw] 2xl:px-[8vw] xl:px-[6vw] py-20 lg:py-0 w-full">
//       {/* ── Left column ── */}
//       <div className="flex flex-col justify-center items-center lg:items-start gap-6 order-1 lg:order-1 py-10 w-full text-left">
//         <div className="flex flex-col">
//           <Reveal>
//             <h1 className="font-bold text-(--color-offWhite) text-4xl md:text-5xl xl:text-7xl">
//               YOUR HEALTH.
//             </h1>
//           </Reveal>
//           <Reveal>
//             <h1 className="bg-clip-text bg-linear-180 from-white to-(--color-cyan) font-bold text-transparent text-4xl md:text-5xl xl:text-7xl">
//               YOUR DATA.
//             </h1>
//           </Reveal>
//           <Reveal>
//             <h1 className="font-bold text-4xl md:text-5xl xl:text-7xl text-(--color-cyan)">
//               YOUR LEGACY.
//             </h1>
//           </Reveal>
//         </div>
//         <Reveal>
//           <p className="text-(--color-gray) text-base md:text-xl max-w-prose max-md:text-center">
//             Biafo uses AI, blockchain, and digital twin simulation to give
//             patients control over diagnostics, treatment pathways, and a
//             secure health record designed to endure across generations.
//           </p>
//         </Reveal>

//         <div className="flex gap-2 md:gap-4 md:tracking-wider">
//           <Reveal>
//             <Link href="#contact">
//               <button className="bg-(--color-cyan) px-2.5 md:px-4 py-1.5 md:py-2 rounded-full cursor-pointer">
//                 Contact With Us
//               </button>
//             </Link>
//           </Reveal>
//           <Reveal>
//             <Link href="#about-us">
//               <button className="bg-(--color-secondary-btn) px-2.5 md:px-4 py-1.5 md:py-2 rounded-full text-(--color-offWhite) border border-(--color-gray) cursor-pointer flex gap-1 items-center">
//                 Explore Our Vision <GoArrowRight />
//               </button>
//             </Link>
//           </Reveal>
//         </div>
//       </div>

//       {/* ── Right column ── */}
//       <div className="relative flex justify-center lg:justify-end items-center order-2 lg:order-2 w-full lg:h-screen">
//         <Image
//           src="/HeroSectionImage.svg"
//           alt="AI Healthcare Visualization"
//           className="z-10 relative w-full max-h-[72vh] 2xl:max-h-[80vh] object-contain select-none"
//           width={1600}
//           height={900}
//           draggable={false}
//         />
//       </div>
//     </main>
//   </section>
