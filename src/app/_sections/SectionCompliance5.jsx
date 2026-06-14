import Image from "next/image";

function SectionCompliance5() {
  return (
    <section className="flex flex-col justify-evenly gap-20 items-center px-[5vw] 2xl:px-[8vw] xl:px-[6vw] max-lg:py-30 w-full text-(--color-offWhite) bg-(--primary-dark) lg:py-40">
      <div className="m-auto w-fit">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center">
          A Trust Layer Built for
          <span className="text-(--color-cyan)">{" "}Global Healthcare Systems</span>
        </h1>
      </div>
      <main className="w-full space-y-5">
        <div className="space-y-5 text-xl md:text-xl text-(--color-offWhite)/80 py-10 px-8 m-auto max-sm:text-center">
          <div className="space-y-4">

            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-(--color-cyan)">
              Compliance
            </h2>

            <p>
              Biafo is architected to operate within the most stringent regulatory frameworks governing healthcare data globally. Every data interaction across the platform is governed, permissioned, and verifiable by design, meeting the requirements of HIPAA, GDPR, and HL7 FHIR from the ground up rather than as a post-deployment consideration.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-(--color-cyan)">
              Auditability
            </h2>
            <p>
              Every model inference, data access event, and system action is written to an immutable audit trail. Institutions, regulators, and research partners can verify the integrity of every action taken within the platform at any point in time, providing the level of transparency that regulated healthcare environments require
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-(--color-cyan)">
              Secure Data Exchange
            </h2>
            <p>
              Biafo enables permissioned data exchange across providers, research institutions, and pharmaceutical partners, allowing organizations to collaborate on clinical intelligence without exposing raw patient records or compromising the data sovereignty of contributing institutions.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center item-center gap-10 mt-20 mb-10 max-lg:flex-col max-lg:gap-5">
          <div className="border-1 border-(--color-cyan) rounded-lg px-4 py-2">
            <h2 className="text-lg text-(--color-cyan) text-center">HIPAA</h2>
            <p className="text-base">US Health Data Compliance</p>
          </div>
          <div className="border-1 border-(--color-cyan) rounded-lg px-4 py-2">
            <h2 className="text-lg text-(--color-cyan) text-center">GDPR</h2>
            <p className="text-base">EU Data Protection Standard</p>
          </div>
          <div className="border-1 border-(--color-cyan) rounded-lg px-4 py-2">
            <h2 className="text-lg text-(--color-cyan) text-center">HL7 FHIR</h2>
            <p className="text-base">Interoperability Protocol</p>
          </div>
          <div className="border-1 border-(--color-cyan) rounded-lg px-4 py-2">
            <h2 className="text-lg text-(--color-cyan) text-center">Blockchain</h2>
            <p className="text-base">Immutable Audit Foundation</p>
          </div>
        </div>
        <div className="w-2/3 m-auto">
          <p className="text-center max-md:text-base md:text-xl text-(--color-cyan)">Trust is not a feature added to the Biafo platform. It is the foundation every layer is built on.</p>
        </div>
      </main>
    </section>
  );
}

export default SectionCompliance5;
