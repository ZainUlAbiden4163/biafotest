import Image from "next/image";

function SectionSystemFlow() {
  return (
    <section className="flex flex-col justify-evenly gap-20 items-center px-[5vw] 2xl:px-[8vw] xl:px-[6vw] max-lg:py-30 w-full text-(--color-offWhite) bg-(--primary-dark) lg:py-40">
      <div className="m-auto w-fit">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center">
          From Data to Prediction to
          <span className="text-(--color-cyan)">{" "}Simulation</span>
        </h1>
        <h3 className="text-(--color-cyan) font-medium text-center text-xl mt-4">How Biafo transforms fragmented patient data into predictive models, digital twins,
          and virtual clinical trials through a single, continuous learning infrastructure.</h3>
        <h3 className="text-white font-medium text-center text-xl mt-4">A continuous intelligence pipeline from patient data to predictive simulation and clinical outcomes. </h3>
      </div>
      <main className="w-full space-y-5">
        <div className="space-y-5 text-xl md:text-xl text-(--color-offWhite)/80 py-10 px-8 m-auto max-sm:text-center">
          <div className="space-y-4 flex max-md:flex-col justify-between items-center gap-4">
            <h1 className="rounded-full border border-1 border-(--color-cyan)/50 text-(--color-cyan) w-10 h-10 flex justify-center items-center text-base">1</h1>
            <div className=" w-[90%] bg-(--primary-light)/25 rounded-lg md:h-30 border-1 border-(--color-cyan)/50 p-4">
              <h2 className="text-(--color-cyan) font-bold mb-1">Patient:</h2>
              <p>A source of truth for clinical records, genomics, wearables, and real-world data.</p>
            </div>
          </div>
          <div className="h-10 w-[1px] bg-(--color-cyan)/50  ml-5 max-md:hidden "></div>
          <div className="space-y-4 flex  max-md:flex-col justify-between items-center gap-4">
            <h1 className="rounded-full border border-1 border-(--color-cyan)/50 text-(--color-cyan) w-10 h-10 flex justify-center items-center text-base">2</h1>
            <div className=" w-[90%] bg-(--primary-light)/25 rounded-lg md:h-30 border-1 border-(--color-cyan)/50 p-4">
              <h2 className="text-(--color-cyan) font-bold mb-1">AI Diagnostics:</h2>
              <p>Intelligent pattern recognition across multimodal patient data streams to support earlier, more accurate clinical decisions.</p>
            </div>
          </div>
          <div className="h-10 w-[1px] bg-(--color-cyan)/50  ml-5 max-md:hidden "></div>

          <div className="space-y-4 flex  max-md:flex-col justify-between items-center gap-4">
            <h1 className="rounded-full border border-1 border-(--color-cyan)/50 text-(--color-cyan) w-10 h-10 flex justify-center items-center text-base">3</h1>
            <div className=" w-[90%] bg-(--primary-light)/25 rounded-lg md:h-30 border-1 border-(--color-cyan)/50 p-4">
              <h2 className="text-(--color-cyan) font-bold mb-1">Data:</h2>
              <p>Trusted, interoperable infrastructure for secure and compliant healthcare data.</p>
            </div>
          </div>
          <div className="h-10 w-[1px] bg-(--color-cyan)/50  ml-5 max-md:hidden "></div>

          <div className="space-y-4 flex  max-md:flex-col justify-between items-center gap-4">
            <h1 className="rounded-full border border-1 border-(--color-cyan)/50 text-(--color-cyan) w-10 h-10 flex justify-center items-center text-base">4</h1>
            <div className=" w-[90%] bg-(--primary-light)/25 rounded-lg md:h-30 border-1 border-(--color-cyan)/50 p-4">
              <h2 className="text-(--color-cyan) font-bold mb-1">Digital Twins:</h2>
              <p>Living patient models that simulate outcomes before interventions occur.</p>
            </div>
          </div>
          <div className="h-10 w-[1px] bg-(--color-cyan)/50  ml-5 max-md:hidden"></div>

          <div className="space-y-4 flex  max-md:flex-col justify-between items-center gap-4">
            <h1 className="rounded-full border border-1 border-(--color-cyan)/50 text-(--color-cyan) w-10 h-10 flex justify-center items-center text-base">5</h1>
            <div className=" w-[90%] bg-(--primary-light)/25 rounded-lg md:h-30 border-1 border-(--color-cyan)/50 p-4">
              <h2 className="text-(--color-cyan) font-bold mb-1">Virtual Clinical Trials:</h2>
              <p>Scalable trial environments powered by predictive models and synthetic patient
                populations.</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default SectionSystemFlow;
