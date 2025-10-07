/* eslint-disable no-unused-vars */
// src/components/Linesteps.jsx
import React from "react";

const STEPS = [
    { n: "01", icon: "🏆", title: "Track Record of Success", blurb: "Landmark wins across all levels of Ghana’s judiciary." },
    { n: "02", icon: "🧭", title: "Comprehensive Legal Strategy", blurb: "Tailored litigation and ADR pathways built around each client’s unique needs." },
    { n: "03", icon: "⚖️", title: "Wide Sector Experience", blurb: "Expert handling of both private and public sector disputes, including cross-border matters." },
    { n: "04", icon: "📚", title: "Regulatory Fluency", blurb: "Practical legal guidance based on deep understanding of Ghana’s commercial and regulatory landscape." },
];

export default function Linesteps() {
    return (
        <section className="w-full bg-[#F5ECEF]">
            <div className="mx-auto max-w-8xl px-4 md:px-12 4xl:px-32 py-12 md:py-16">
                {/* eyebrow */}
                <div className="mb-8 flex items-center gap-2 text-sm">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#7E1835]" />
                    <span className="tracking-wider text-[#7E1835]">OUR STRENGTHS</span>
                </div>

                <div className="relative">
                    {/* horizontal dashed spine (desktop only) */}
                    <div className="pointer-events-none absolute top-8 hidden h-0 w-full border-t border-dashed border-rose-300 md:block" />

                    {/* steps row */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                        {STEPS.map((s) => (
                            <div key={s.n} className="relative pt-14 md:pt-16 text-center">
                                {/* NUMBER CIRCLE */}
                                <div className="md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2">
                                    <div
                                        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#7E1835] text-white shadow md:h-16 md:w-16"
                                        aria-hidden
                                    >
                                        <span className="font-garamond text-lg md:text-xl">{s.n}</span>
                                    </div>
                                </div>

                                {/* VERTICAL DOTTED CONNECTOR + RED DOT (positioned just above title) */}
                                <div
                                    aria-hidden
                                    className="
                    pointer-events-none absolute left-1/2 top-[110px] -translate-x-1/2
                    md:top-[64px]
                    h-[30px] md:h-[32px] w-px 
                  "
                                >
                                    {/* dotted line */}
                                    <div className="absolute inset-0 border-l border-dotted border-rose-300" />
                                    {/* red dot slightly above the bottom so it doesn't touch the title */}
                                    <span
                                        className="
                      absolute -bottom-1.5 left-1/2 -translate-x-1/2
                      h-2 w-2 rounded-full bg-[#7E1835]
                    "
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="mt-9 md:mt-11">
                                    <div className="mb-2 flex items-center justify-center gap-2 text-sm text-[#0F1A17]">
                                        <span aria-hidden className="text-base">{s.icon}</span>
                                        <h3 className="font-semibold text-[#7E1835]">{s.title}</h3>
                                    </div>
                                    <p className="mx-auto max-w-[260px] text-[12px] leading-relaxed text-[#3a4a44]">
                                        {s.blurb}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* mobile subtle divider */}
                    <div className="mt-10 block h-px w-full border-t border-dashed border-rose-200 md:hidden" />
                </div>
            </div>
        </section>
    );
}
