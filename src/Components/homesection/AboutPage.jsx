/* eslint-disable no-unused-vars */
import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import mallet from "../../assets/home/mallet.png"

export default function AboutPage() {
    const prefersReducedMotion = useReducedMotion();
    const fadeInUp = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' },
        },
    };
    const fadeIn = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' },
        },
    };
    const stagger = {
        hidden: {},
        show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 } },
    };

    return (
        <main className="h-[1520px] lg:h-[824px] 4xl:h-[800px] bg-white">
            <section className="mx-auto w-full px-4 lg:px-0 py-8 md:py-12">
                {/* Label and Heading */}
                <div className="mb-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-0 lg:px-10 4xl:px-32"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={stagger}
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="flex items-center justify-center md:justify-start gap-2 text-[12px] tracking-[0.18em]"
                        >
                            <span
                                className="inline-block h-2 w-2 rounded-full bg-[#7E1835]"
                                aria-hidden="true"
                            />
                            <span className="text-gray-500">ABOUT US</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-center font-garamond text-2xl sm:text-3xl lg:text-[45px] font-bold text-[#7E1835]"
                        >
                            About Kwame Akuffo & Co.
                        </motion.h1>

                        <div aria-hidden="true" />
                    </motion.div>

                    <motion.div
                        className="mt-6 h-px w-full bg-[#7E1835]"
                        initial={{ scaleX: 0 }}
                        whileInView={{
                            scaleX: 1,
                            transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' },
                        }}
                        viewport={{ once: true, amount: 0.6 }}
                        style={{ transformOrigin: 'left' }}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:px-10 4xl:px-32">
                    {/* Left Image Column */}
                    <div className="relative md:col-span-4 flex ">
                        <motion.div
                            className="relative overflow-hidden w-full max-w-[374px] aspect-[374/543]"
                            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                transition: { duration: prefersReducedMotion ? 0 : 0.7 },
                            }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img
                                src={mallet}
                                alt="Wooden gavel symbolizing justice"
                                className="w-full h-full rounded-md border object-cover" loading='lazy'
                            />
                        </motion.div>
                    </div>

                    {/* Right Text & Stats Column */}
                    <div className="md:col-span-8 lg:col-span-7">
                        <motion.div
                            className="space-y-4 text-[13px] leading-7 text-gray-700 md:text-[14px] md:leading-8"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={stagger}
                        >
                            {/* Paragraphs */}
                            {[
                                `At Kwame Akuffo & Co, we take time to understand our clients by constantly changing and adapting to new demands and business trends. We make a conscious effort to understand what clients need today and better prepare them for tomorrow. We achieve this by providing the highest standards of legal services, putting clients at the center of all we do, and paying particular attention to the details of each business.`,
                                `We place emphasis on consulting and advising clients with a commercial but realistic approach. Above all, our culture and the standard of work we provide are driven by our business ethos: quality with clarity, unity, and integrity.`,
                                `Our vision is to provide more than law through our business principles of quality with care, unity, and integrity.`,
                                `More Than Law is intricately woven into the fabric of our culture and personality, whether among ourselves or when working with third parties. It is clear in how we work and what we stand for.`,
                                `Kwame Akuffo & Co is an indigenous law firm with a clear vision for the future.`,
                            ].map((text, i) => (
                                <motion.p key={i} variants={fadeInUp}>
                                    {text}
                                </motion.p>
                            ))}

                            {/* Stats & CTA */}
                            <motion.div variants={fadeIn} className="mt-6 flex flex-col items-start gap-4">
                                <div className="flex flex-wrap items-center gap-3">
                                    <motion.div
                                        variants={fadeInUp}
                                        className="flex items-center gap-2 border px-3 py-2 bg-[#7E1835]"
                                    >
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
                                            <Award className="h-4 w-4" />
                                        </div>
                                        <div className="leading-tight">
                                            <div className="text-sm font-semibold text-white">25+</div>
                                            <div className="text-[11px] text-white">Years Experience</div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={fadeInUp}
                                        className="flex items-center gap-2 border px-6 py-2 bg-[#F2E8EB]"
                                    >
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7E1835]/10 text-[#7E1835]">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </div>
                                        <div className="leading-tight">
                                            <div className="text-sm font-semibold">98%</div>
                                            <div className="text-[11px] text-gray-500">Case Success</div>
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: prefersReducedMotion ? 0 : 0.45 },
                                    }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="mt-4"
                                >
                                    <button className="w-full sm:w-auto bg-[#7E1835] px-10 py-2 text-white hover:bg-[#6b1824] focus:outline-none">
                                        Read More
                                    </button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
