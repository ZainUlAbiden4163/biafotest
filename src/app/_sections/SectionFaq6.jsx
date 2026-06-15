"use client";
import { useState, useCallback } from "react";
import { FAQS } from "../_constants/Constants";
import FaqItem from "../_components/FaqItem";

function SectionFaq6() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      id="faq"
      className="flex flex-col justify-center bg-(--primary-light) px-6 py-20 min-h-screen  scroll-mt-22 text-(--color-offWhite)"
    >
      <div className="space-y-20 md:space-y-30 lg:space-y-50 mx-auto w-full max-w-4xl">
        {/* Hero */}
        <div className="mb-14 text-center">
          <span className="md:font-medium md:text-xl text-(--color-cyan) inline-block">
            Got Questions?
          </span>

          <h2 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className=" text-(--color-gray) text-sm md:text-base">
            Everything you need to know about Biafo&apos;s platform, privacy,
            and partnerships.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              index={i}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        {/* Bottom note */}

        <p className="text-white/30 text-sm text-center">
          Still have questions?{" "}
          <a
            href="#contact"
            className="text-(--color-highlight) hover:underline underline-offset-4 transition-all"
          >
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}

export default SectionFaq6;
