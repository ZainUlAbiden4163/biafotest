"use client";

import { useState } from "react";


function getClipPath(i) {
  const tl = 50 - i * 10;
  const tr = 50 + i * 10;
  const bl = 50 - (i + 1) * 10;
  const br = 50 + (i + 1) * 10;
  return `polygon(${tl}% 0%, ${tr}% 0%, ${br}% 100%, ${bl}% 100%)`;
}

const LAYERS = [
  {
    id: 1,
    label: "Virtual Trials",
    pyramid1: "Virtual",
    pyramid2: "Trials",
    sublabel: "Layer 1 — Top",
    description:
      "Compliant clinical trials powered by synthetic and real-world cohorts reduce timelines and costs without compromising regulatory standards.",
  },
  {
    id: 2,
    label: "Digital Twins",
    pyramid1: "Digital Twins",
    sublabel: "Layer 2",
    description:
      "Patient-specific simulations powered by predictive models, enabling personalized intervention before treatment.",
  },
  {
    id: 3,
    label: "Predictive Modeling",
    pyramid1: "Predictive Modeling",
    sublabel: "Layer 3",
    description:
      "Continuously learning models that convert patient data into forward-looking, actionable clinical insights.",
  },
  {
    id: 4,
    label: "Data Aggregation",
    pyramid1: "Data Aggregation",
    sublabel: "Layer 4",
    description:
      "Securely aggregated and normalized data across institutional boundaries, forming a unified substrate for downstream intelligence.",
  },
  {
    id: 5,
    label: "AI Diagnostics",
    pyramid1: "AI Diagnostics",

    sublabel: "Layer 5 — Base",
    description:
      "Intelligent pattern recognition across multimodal patient data enabling early, accurate diagnosis at population scale.",
  },
];

/* Background fill colour for each layer (idle / active) */
const BG_IDLE = ["rgba(49,216,213,0.36)", "rgba(49,216,213,0.27)", "rgba(49,216,213,0.19)", "rgba(49,216,213,0.13)", "rgba(49,216,213,0.08)"];
const BG_ACTIVE = ["rgba(49,216,213,0.60)", "rgba(49,216,213,0.52)", "rgba(49,216,213,0.44)", "rgba(49,216,213,0.38)", "rgba(49,216,213,0.32)"];
const BG_HOVER = ["rgba(49,216,213,0.46)", "rgba(49,216,213,0.37)", "rgba(49,216,213,0.29)", "rgba(49,216,213,0.21)", "rgba(49,216,213,0.16)"];

/* Each layer is LAYER_H px tall → total pyramid = 5 × LAYER_H */
const LAYER_H = 88;

export default function SectionPlatformStack4() {
  const [activeLayer, setActiveLayer] = useState(null);
  const [hoveredLayer, setHoveredLayer] = useState(null);

  const active = LAYERS.find((l) => l.id === activeLayer);

  function handleClick(id) {
    setActiveLayer((prev) => (prev === id ? null : id));
  }

  function bg(index, id) {
    if (activeLayer === id) return BG_ACTIVE[index];
    if (hoveredLayer === id) return BG_HOVER[index];
    return BG_IDLE[index];
  }

  return (
    <section
      id="platform-stack"
      className="relative flex flex-col items-center gap-14 px-[5vw] 2xl:px-[8vw] xl:px-[6vw] py-24 lg:py-40 w-full min-h-screen bg-[#121828] text-[#f5f7fa] overflow-hidden"
    >
      {/* ── Ambient glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full blur-[130px]"
        style={{ background: "rgba(49,216,213,0.05)" }}
      />

      {/* ── Header ── */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center max-w-3xl">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
          The Biafo Multi-Layer{" "}
          <span className="text-[#31d8d5]">Healthcare Intelligence Platform</span>
        </h1>
        <p className="text-[#d1d7df] text-base md:text-lg max-w-2xl leading-relaxed">
          A purpose-built layered architecture for institutional scale, designed to compound through
          diagnostics, predictive modeling, digital twins, and virtual trials.
        </p>
      </div>

      {/* ══════════════════════════════════════════
           DESKTOP: Pyramid (md and above)
          ══════════════════════════════════════════ */}
      <div className="relative z-10 w-full flex-col items-center gap-4 hidden md:flex">
        <div className="relative mx-auto w-full" style={{ maxWidth: 760 }}>
          <div className="flex flex-col" style={{ gap: 0 }}>
            {LAYERS.map((layer, index) => (
              <button
                key={layer.id}
                onClick={() => handleClick(layer.id)}
                onMouseEnter={() => setHoveredLayer(layer.id)}
                onMouseLeave={() => setHoveredLayer(null)}
                aria-label={`Select ${layer.label}`}
                style={{
                  clipPath: getClipPath(index),
                  backgroundColor: bg(index, layer.id),
                  height: LAYER_H,
                  transition: "background-color 0.28s ease",
                }}
                className="relative w-full cursor-pointer focus:outline-none"
              >
                <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3">
                  {/* <span
                    style={{
                      border: `1px solid ${activeLayer === layer.id ? "rgba(49,216,213,0.9)" : "rgba(49,216,213,0.55)"}`,
                      color: activeLayer === layer.id ? "#31d8d5" : "rgba(49,216,213,0.8)",
                      background: activeLayer === layer.id ? "rgba(49,216,213,0.22)" : "transparent",
                      transition: "all 0.28s ease",
                    }}
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  >

                  </span> */}
                  {index >= 0 && (
                    <span
                      style={{
                        color: activeLayer === layer.id ? "#f5f7fa" : "rgba(245,247,250,0.78)",
                        transition: "color 0.28s ease",
                      }}
                      className="text-sm md:text-base font-semibold whitespace-nowrap flex flex-col mt-5"
                    >
                      {/* {layer.label1} */}
                      <span className="text-sm md:font-medium">{layer.pyramid1}</span>
                      {layer.pyramid2 && <span className="md:font-normal text-sm md:text-base opacity-90"> {layer.pyramid2}</span>}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="50,0 0,100 100,100" fill="none" stroke="rgba(49,216,213,0.60)" strokeWidth="0.45" />
            <line x1="40" y1="20" x2="60" y2="20" stroke="rgba(49,216,213,0.28)" strokeWidth="0.3" />
            <line x1="30" y1="40" x2="70" y2="40" stroke="rgba(49,216,213,0.28)" strokeWidth="0.3" />
            <line x1="20" y1="60" x2="80" y2="60" stroke="rgba(49,216,213,0.28)" strokeWidth="0.3" />
            <line x1="10" y1="80" x2="90" y2="80" stroke="rgba(49,216,213,0.28)" strokeWidth="0.3" />
          </svg>
        </div>

      </div>

      {/* ── Desktop interaction hint ── */}
      {!activeLayer && (
        <p className="relative z-10 -mt-6 text-[#d1d7df]/35 text-sm animate-pulse hidden md:block">
          Click any layer to explore its role
        </p>
      )}

      {/* ══════════════════════════════════════════
           MOBILE: Vertical Timeline (below md)
          ══════════════════════════════════════════ */}
      <div className="relative z-10 w-full flex flex-col md:hidden">
        {/* Vertical spine line */}
        <div
          className="absolute left-[27px] top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(49,216,213,0.55) 8%, rgba(49,216,213,0.55) 92%, transparent 100%)",
          }}
          aria-hidden
        />

        <div className="flex flex-col gap-0">
          {LAYERS.map((layer, index) => {
            const isOpen = activeLayer === layer.id;
            return (
              <div key={layer.id} className="relative">
                {/* Row: node + header */}
                <button
                  onClick={() => handleClick(layer.id)}
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? "Collapse" : "Expand"} ${layer.label}`}
                  className="w-full flex items-start gap-4 py-4 text-left focus:outline-none group"
                >
                  {/* Node circle — sits on the spine */}
                  <div
                    className="relative flex-shrink-0 z-10 w-[54px] flex justify-center"
                  >
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                      style={{
                        border: `2px solid ${isOpen ? "#31d8d5" : "rgba(49,216,213,0.45)"}`,
                        color: isOpen ? "#121828" : "#31d8d5",
                        background: isOpen
                          ? "#31d8d5"
                          : "rgba(18,24,40,0.95)",
                        boxShadow: isOpen
                          ? "0 0 18px rgba(49,216,213,0.55)"
                          : "none",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {layer.id}
                    </span>
                  </div>

                  {/* Header text */}
                  <div className="flex-1 min-w-0 pt-2">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p
                          className="text-[10px] font-semibold tracking-[0.16em] uppercase mb-0.5"
                          style={{ color: "rgba(49,216,213,0.65)" }}
                        >
                          {layer.sublabel}
                        </p>
                        <h3
                          className="font-bold text-base transition-colors duration-300"
                          style={{ color: isOpen ? "#31d8d5" : "#f5f7fa" }}
                        >
                          {layer.label}
                        </h3>
                      </div>
                      {/* Chevron */}
                      <svg
                        className="flex-shrink-0 w-4 h-4 transition-transform duration-300"
                        style={{
                          color: isOpen ? "#31d8d5" : "rgba(49,216,213,0.45)",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expandable description */}
                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.38s ease, opacity 0.28s ease",
                  }}
                >
                  <div
                    className="ml-[54px] mb-4 rounded-xl px-4 py-3"
                    style={{
                      border: "1px solid rgba(49,216,213,0.22)",
                      background:
                        "linear-gradient(135deg, rgba(49,216,213,0.08) 0%, rgba(30,44,70,0.40) 100%)",
                    }}
                  >
                    <p className="text-[#d1d7df] text-sm leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>

                {/* Separator between items (not after last) */}
                {index < LAYERS.length - 1 && (
                  <div
                    className="ml-[54px] h-px"
                    style={{ background: "rgba(49,216,213,0.08)" }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile foundation note */}
        <div
          className="mt-4 flex items-center gap-3 rounded-xl px-4 py-3"
          style={{
            border: "1px solid rgba(49,216,213,0.20)",
            background: "rgba(49,216,213,0.06)",
          }}
        >
          <svg className="flex-shrink-0 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#31d8d5" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 5.591 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.25-8.25-3.285z" />
          </svg>
          <p className="text-[11px] text-[#31d8d5]/60 tracking-[0.14em] uppercase font-semibold">
            Foundation — Base of the Intelligence Stack
          </p>
        </div>
      </div>

      {/* ── Detail panel ── */}
      <div className="relative z-10 w-full max-w-2xl">
        {active ? (
          <div
            key={active.id}
            className="w-full rounded-2xl p-6 md:p-8 space-y-4"
            style={{
              border: "1px solid rgba(49,216,213,0.40)",
              background: "rgba(30,44,70,0.50)",
              animation: "platformFadeIn 0.25s ease-out",
            }}
          >
            <div className="flex items-center gap-4">
              <span
                className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  border: "1px solid #31d8d5",
                  color: "#31d8d5",
                  background: "rgba(49,216,213,0.14)",
                }}
              >
                {active.id}
              </span>
              <div>
                <h3 className="text-[#f5f7fa] font-bold text-xl leading-tight">
                  {active.label}
                </h3>
                <span className="text-[#31d8d5] text-xs font-semibold tracking-[0.15em] uppercase">
                  {active.sublabel}
                </span>
              </div>
            </div>
            <div className="h-px" style={{ background: "rgba(49,216,213,0.20)" }} />
            <p className="text-[#d1d7df] text-base leading-relaxed">
              {active.description}
            </p>
          </div>
        ) : (
          <div
            className="w-full rounded-2xl p-6 text-center"
            style={{
              border: "1px solid rgba(49,216,213,0.10)",
              background: "rgba(30,44,70,0.15)",
            }}
          >
            <p className="text-[#d1d7df]/40 text-sm">
              Select a layer above to explore its role in the intelligence stack.
            </p>
          </div>
        )}
      </div>

      {/* ── Foundation Block ── */}
      <div className="relative z-10 w-full max-w-[760px]">
        {/* Connector line from pyramid to block */}
        <div
          className="mx-auto w-px h-6"
          style={{ background: "linear-gradient(to bottom, rgba(49,216,213,0.5), rgba(49,216,213,0.15))" }}
        />

        {/* Block */}
        <div
          className="relative w-full rounded-2xl px-6 py-5 md:px-10 md:py-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 overflow-hidden"
          style={{
            border: "1px solid rgba(49,216,213,0.45)",
            background: "linear-gradient(135deg, rgba(30,44,70,0.70) 0%, rgba(18,24,40,0.80) 100%)",
            boxShadow: "0 0 40px 0 rgba(49,216,213,0.08), inset 0 1px 0 rgba(49,216,213,0.12)",
          }}
        >
          {/* Glow blob */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-8 -top-8 w-32 h-32 rounded-full blur-[50px]"
            style={{ background: "rgba(49,216,213,0.12)" }}
          />

          {/* Icon */}
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ border: "1px solid rgba(49,216,213,0.40)", background: "rgba(49,216,213,0.12)" }}
          >
            {/* Blockchain / shield icon */}
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#31d8d5" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 5.591 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.25-8.25-3.285z" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
              <span
                className="text-xs font-semibold tracking-[0.18em] uppercase px-2 py-0.5 rounded-full"
                style={{ color: "#31d8d5", border: "1px solid rgba(49,216,213,0.35)", background: "rgba(49,216,213,0.10)" }}
              >
                Foundation Block
              </span>
              <h3 className="text-[#f5f7fa] font-bold text-base md:text-lg">
                Blockchain / Compliance Layer
              </h3>
            </div>
            <p className="text-[#d1d7df] text-sm md:text-base leading-relaxed">
              Secure, auditable, regulatory-ready infrastructure underpinning every layer of the platform.
            </p>
          </div>
        </div>
      </div>

      {/* ── 3 Supporting Paragraphs ── */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col gap-6 text-[#d1d7df] text-base md:text-lg leading-relaxed">
        <p>
          Each layer reinforces the next, creating a compounding system where data improves models, models power simulations, and simulations accelerate discovery. what changed
        </p>
        <p>
          As the dataset grows,{" "}
          <span className="text-[#31d8d5] font-semibold">Biafo</span> enables faster, lower-risk clinical development through increasingly
          accurate predictive models and scalable virtual trials.
        </p>
        <p>
          As the platform scales, Biafo fundamentally improves the economics of drug development.
        </p>
      </div>



      <style>{`
        @keyframes platformFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </section>
  );
}
