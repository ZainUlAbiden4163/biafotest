import Image from "next/image";


function AboutUsPage() {
    return (
        <section
            id="about-us"
            className="flex flex-col justify-evenly gap-10 items-center px-[5vw] 2xl:px-[8vw] xl:px-[6vw] max-lg:py-20 w-full min-h-screen text-(--color-offWhite) bg-(--primary-dark) py-40 scroll-mt-24"
        >
            <div className="space-y-6 text-center gap-6 flex flex-col">

                <div className="m-auto w-fit">
                    <h1 className="inline-block font-bold text-3xl md:text-4xl lg:text-5xl">
                        About Biafo
                    </h1>
                </div>

                <div className="m-auto w-fit">
                    <h1 className="text-(--color-cyan)  text-xl">
                        Building the healthcare intelligence infrastructure layer for regulated, data-driven
                        medicine.
                    </h1>
                </div>
            </div>
            <div className="space-y-4 lg:spacee-y-8">
                <div className="">
                    <div className="text-xl flex flex-col gap-4 " >
                        <p>Biafo is building the infrastructure layer for healthcare intelligence.</p>
                        <p>We transform fragmented patient data into predictive models, patient digital twins, and virtual clinical trials, secured by a compliant and auditable foundation.</p>
                        <p>Our platform enables healthcare providers, researchers, and pharmaceutical organizations to accelerate discovery, improve patient outcomes, and reduce development risk across the healthcare ecosystem.</p>
                    </div>
                </div>
            </div>
            <div className="space-y-4 lg:space-y-8">
                <h2 className="text-center  font-bold text-2xl md:text-3xl lg:text-4xl text-(--color-cyan)">Platform Foundation</h2>
                <div className="">
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xl max-lg:gap-5" >
                            <div className="flex flex-col gap-2 px-8 py-6 border-(--color-cyan) border-1 rounded-2xl">
                                <h3 className="text-(--color-cyan) font-bold text-2xl">Regulated Healthcare</h3>
                                <p>Built for strict compliance with global healthcare data standards, ensuring data integrity, security, and full auditability across every layer of the platform.</p>
                            </div>
                            <div className="flex flex-col gap-2 px-8 py-6 border-(--color-cyan) border-1 rounded-2xl" >
                                <h3 className="text-(--color-cyan) font-bold text-2xl">Institutional Scale</h3>
                                <p>Architected to operate across large healthcare systems and research networks, with enterprise-level performance, healthcare interoperability, and deep integration into existing clinical data infrastructure.</p>
                            </div>
                            <div className="flex flex-col gap-2 px-8 py-6 border-(--color-cyan) border-1 rounded-2xl">
                                <h3 className="text-(--color-cyan) font-bold text-2xl">Predictive Medicine</h3>
                                <p>Clinical, genomic, imaging, and real-world data transformed into predictive models that enable earlier intervention, more accurate diagnoses, and better outcomes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <main className="space-y-4 lg:space-y-8">
                <div className="gap-10 grid grid-cols-1 lg:grid-cols-[49%_49%]">
                    <div className="relative px-4 w-full lg:h-120 max-lg:h-70">
                        <Image
                            src="/aboutus.png"
                            fill
                            quality={100}
                            alt="workers are expressing about the innovations ideas about company named biafo"
                            className="bg-cover"
                        />
                    </div>
                    <div className="space-y-4 m-auto px-4 text-xl text-(--color-text) max-md:text-center">
                        <p>
                            We take our name from the Biafo Glacier, one of the world&apos;s
                            oldest and most expansive natural systems, carrying within it an
                            unbroken record of everything that came before.
                        </p>

                        <p>
                            We see the human body the same way. A patient&apos;s health story
                            is a living record, one that should be preserved, passed forward,
                            and owned by no one but the individual it belongs to.
                        </p>

                        <p>
                            Yet today&apos;s healthcare system works against this. Data is
                            fragmented, decisions are population-based, and patients rarely
                            control what is most personal to them.
                        </p>

                        <p>
                            Biafo exists at this intersection. By bringing together AI in
                            healthcare, blockchain-secured health records, and digital twin
                            technology, we are rebuilding the foundation of modern medicine.
                        </p>

                        <p>
                            The result is a platform where personalised medicine, patient data
                            ownership, and AI-guided diagnostics are not future ambitions.
                            They are the standard.
                        </p>
                    </div>
                </div>
            </main> */}
            <div className="w-2/3 m-auto mt-20">
                <p className="text-center max-md:text-base md:text-xl text-(--color-cyan)">A layered system where infrastructure enables scale, scale enables prediction, and prediction improves outcomes.</p>
            </div>
        </section>
    );
}

export default AboutUsPage;