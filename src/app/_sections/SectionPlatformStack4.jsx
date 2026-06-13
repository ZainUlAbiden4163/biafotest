"use client";

import { useState } from "react";

/**
 * PYRAMID GEOMETRY
 * ─────────────────────────────────────────────────────────────────
 * The pyramid is composed of 5 stacked div layers (index 0 = top).
 * Each layer occupies the full width of the container and has a
 * fixed height.  A CSS clip-path trims each div into a trapezoid:
 *
 *   Layer i  →  clip-path: polygon(TL% 0%, TR% 0%, BR% 100%, BL% 100%)
 *
 *   where:
 *     TL = 50 − i×10       (top-left  x, as % of container width)
 *     TR = 50 + i×10       (top-right x)
 *     BL = 50 − (i+1)×10  (bottom-left  x)
 *     BR = 50 + (i+1)×10  (bottom-right x)
 *
 * i = 0 → tip   : polygon(50% 0%, 50% 0%, 60% 100%, 40% 100%)
 * i = 1         : polygon(40% 0%, 60% 0%, 70% 100%, 30% 100%)
 * i = 2         : polygon(30% 0%, 70% 0%, 80% 100%, 20% 100%)
 * i = 3         : polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)
 * i = 4 → base  : polygon(10% 0%, 90% 0%,100% 100%,  0% 100%)
 *
 * Adjacent layers share the same edge → perfect geometric triangle.
 *
 * An SVG (preserveAspectRatio="none") is absolutely overlaid on the
 * stack and draws the outer triangle outline + inner divider lines
 * at y=20, 40, 60, 80 in viewBox space (each layer = 20 viewBox units).
 * ─────────────────────────────────────────────────────────────────
 */

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
    sublabel: "Layer 1 — Top",
    description:
      "Accelerated, compliant clinical trials run on synthetic and real cohorts — dramatically compressing timelines and cost while maintaining regulatory integrity.",
  },
  {
    id: 2,
    label: "Digital Twins",
    sublabel: "Layer 2",
    description:
      "Living simulations of individual patients powered by predictive models, enabling truly personalized intervention before any treatment is applied.",
  },
  {
    id: 3,
    label: "Predictive Modeling",
    sublabel: "Layer 3",
    description:
      "Forward-looking intelligence built on continuously learning models that transform raw patient data into actionable clinical insights.",
  },
  {
    id: 4,
    label: "Data Aggregation",
    sublabel: "Layer 4",
    description:
      "Aggregated, normalised, and secured across institutional boundaries — a unified data substrate that powers every intelligence layer above it.",
  },
  {
    id: 5,
    label: "AI Diagnostics",
    sublabel: "Layer 5 — Base",
    description:
      "Intelligent pattern recognition across multimodal patient data streams, enabling early and accurate diagnosis at population scale.",
  },
];

/* Background fill colour for each layer (idle / active) */
const BG_IDLE   = ["rgba(49,216,213,0.36)","rgba(49,216,213,0.27)","rgba(49,216,213,0.19)","rgba(49,216,213,0.13)","rgba(49,216,213,0.08)"];
const BG_ACTIVE = ["rgba(49,216,213,0.60)","rgba(49,216,213,0.52)","rgba(49,216,213,0.44)","rgba(49,216,213,0.38)","rgba(49,216,213,0.32)"];
const BG_HOVER  = ["rgba(49,216,213,0.46)","rgba(49,216,213,0.37)","rgba(49,216,213,0.29)","rgba(49,216,213,0.21)","rgba(49,216,213,0.16)"];

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
        <span className="text-[#31d8d5] text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
          Platform Stack
        </span>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
          The Biafo Multi-Layer{" "}
          <span className="text-[#31d8d5]">Healthcare Intelligence Platform</span>
        </h1>
        <p className="text-[#d1d7df] text-base md:text-lg max-w-2xl leading-relaxed">
          A layered system architecture{" "}
          <span className="font-semibold text-[#f5f7fa] underline underline-offset-4 decoration-[#31d8d5]/50">
            purpose-built
          </span>{" "}
          for healthcare intelligence at{" "}
          <span className="font-semibold text-[#f5f7fa] underline underline-offset-4 decoration-[#31d8d5]/50">
            institutional
          </span>{" "}
          scale.
        </p>
      </div>

      {/* ── Pyramid — strictly centred ── */}
      <div className="relative z-10 w-full flex flex-col items-center gap-4">

        {/* Outer wrapper: sets max-width and centres it */}
        <div
          className="relative mx-auto w-full"
          style={{ maxWidth: 760 }}
        >
          {/* ── Layer buttons (stacked, no gap → mathematically flush) ── */}
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
                {/* Centered row: badge + label */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3">
                  {/* Number badge */}
                  <span
                    style={{
                      border: `1px solid ${activeLayer === layer.id ? "rgba(49,216,213,0.9)" : "rgba(49,216,213,0.55)"}`,
                      color: activeLayer === layer.id ? "#31d8d5" : "rgba(49,216,213,0.8)",
                      background: activeLayer === layer.id ? "rgba(49,216,213,0.22)" : "transparent",
                      transition: "all 0.28s ease",
                    }}
                    className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold"
                  >
                    {layer.id}
                  </span>

                  {/* Label — omit for layer 0 (only ~10 % visible width) */}
                  {index > 0 && (
                    <span
                      style={{
                        color: activeLayer === layer.id ? "#f5f7fa" : "rgba(245,247,250,0.78)",
                        transition: "color 0.28s ease",
                      }}
                      className="text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap"
                    >
                      {layer.label}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* ── SVG triangle outline + inner dividers ──
              viewBox is square 0-100 × 0-100, stretched via preserveAspectRatio="none"
              to the exact pixel dimensions of the pyramid stack.

              Outer triangle vertex:
                top    : (50, 0)   ← centre of layer-0 top edge
                bot-L  : ( 0,100) ← layer-4 bottom-left
                bot-R  : (100,100) ← layer-4 bottom-right

              Inner dividers at y=20,40,60,80 with x matching the slope:
                y=20: x from 40 to 60
                y=40: x from 30 to 70
                y=60: x from 20 to 80
                y=80: x from 10 to 90
          ── */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer triangle */}
            <polygon
              points="50,0 0,100 100,100"
              fill="none"
              stroke="rgba(49,216,213,0.60)"
              strokeWidth="0.45"
            />
            {/* Inner horizontal dividers */}
            <line x1="40" y1="20" x2="60" y2="20" stroke="rgba(49,216,213,0.28)" strokeWidth="0.3" />
            <line x1="30" y1="40" x2="70" y2="40" stroke="rgba(49,216,213,0.28)" strokeWidth="0.3" />
            <line x1="20" y1="60" x2="80" y2="60" stroke="rgba(49,216,213,0.28)" strokeWidth="0.3" />
            <line x1="10" y1="80" x2="90" y2="80" stroke="rgba(49,216,213,0.28)" strokeWidth="0.3" />
          </svg>
        </div>

        {/* Base caption */}
        <p className="text-[#31d8d5]/40 text-[11px] tracking-[0.18em] uppercase mt-1">
          ▲ Foundation — Base of the Intelligence Stack
        </p>
      </div>

      {/* ── Interaction hint ── */}
      {!activeLayer && (
        <p className="relative z-10 -mt-6 text-[#d1d7df]/35 text-sm animate-pulse">
          Click any layer to explore its role
        </p>
      )}

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
          Each layer reinforces the next — creating a compounding system where data improves{" "}
          <span className="text-[#f5f7fa] font-semibold underline underline-offset-4 decoration-[#31d8d5]/40">models</span>,
          models power simulations, and simulations accelerate discovery.
        </p>
        <p>
          As the dataset grows,{" "}
          <span className="text-[#31d8d5] font-semibold">Biafo</span> enables faster, lower-risk clinical development through increasingly
          accurate predictive models and scalable virtual trials.
        </p>
        <p>
          As the platform scales,{" "}
          <span className="text-[#31d8d5] font-semibold">Biafo</span> fundamentally improves the economics of drug discovery.
        </p>
      </div>

      {/* ── Bottom metrics strip ── */}
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: "5",    label: "Intelligence Layers" },
          { value: "100%", label: "HIPAA / GDPR Compliant" },
          { value: "∞",    label: "Continuous Learning" },
          { value: "1",    label: "Unified Platform" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl px-4 py-5 text-center space-y-1"
            style={{
              border: "1px solid rgba(49,216,213,0.18)",
              background: "rgba(30,44,70,0.20)",
            }}
          >
            <p className="text-[#31d8d5] font-bold text-2xl md:text-3xl">{stat.value}</p>
            <p className="text-[#d1d7df] text-xs md:text-sm">{stat.label}</p>
          </div>
        ))}
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
