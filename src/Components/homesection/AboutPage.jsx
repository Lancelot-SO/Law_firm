/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import mallet from "../../assets/home/mallet.png"
import { Link } from 'react-router-dom';

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
        <main className="h-[1520px] md:h-[1300px] lg:h-[824px] 4xl:h-[800px] bg-white">
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
                            className="flex items-center justify-start md:justify-start gap-2 text-[12px] tracking-[0.18em]"
                        >
                            <span
                                className="inline-block h-2 w-2 rounded-full bg-[#7E1835]"
                                aria-hidden="true"
                            />
                            <span className="text-gray-500">ABOUT US</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="md:text-center text-left font-garamond text-2xl sm:text-3xl lg:text-[45px] font-bold text-[#7E1835]"
                        >
                            Our Story Starts With Yours
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 px-4 lg:px-10 4xl:px-32">
                    {/* Left Image Column */}
                    <div className="relative md:col-span-4 flex ">
                        <motion.div
                            className="relative overflow-hidden w-full h-full max-w-[374px] aspect-[374/543]"
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
                                `We’re a client-focused law firm dedicated to sharp insight and unwavering representation. Think of us as your strategists, your advocates, and the team that’s always three steps ahead. We handle the complexity so you can focus on what’s next, protecting your interests with clarity and conviction.`,
                                `Let's be honest, nobody wakes up hoping they need to call a lawyer. The legal world can feel formal, complicated, and more than a little stressful. We founded Kwame Akuffo & Co. Unlimited in 2016 to be the exact opposite of that. We're a firm built on the belief that powerful legal representation doesn't need to be stuffy. Since day one, our goal has been simple: to be the sharp, dedicated, and surprisingly human legal team you can actually talk to.`,
                                `Over the years, we’ve advised leading corporations, institutions, and individuals on matters that shaped industries and defended rights. From high-stakes litigation to complex transactions, we’ve proven that law done right is about preparation, precision, and people. That’s why clients don’t just hire us once—they stay, they return, and they trust us to stand with them in every chapter of their journey.`,


                            ].map((text, i) => (
                                <motion.p key={i} variants={fadeInUp}>
                                    {text}
                                </motion.p>
                            ))}

                            {/* Stats & CTA */}
                            <motion.div
                                variants={fadeIn}
                                className="mt-6 flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6"
                            >
                                <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto">
                                    <motion.div
                                        variants={fadeInUp}
                                        className="flex items-center justify-center md:justify-start gap-2 border px-2.5 py-2 bg-[#7E1835] sm:px-3 sm:py-2 w-full md:w-auto"
                                    >
                                        <div className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white/10 text-white sm:h-8 sm:w-8">
                                            <Award className="h-[14px] w-[14px] sm:h-4 sm:w-4" />
                                        </div>
                                        <div className="leading-tight">
                                            <div className="text-xs font-semibold text-white sm:text-sm">25+</div>
                                            <div className="text-[10px] text-white sm:text-[11px]">Years Experience</div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: prefersReducedMotion ? 0 : 0.45 },
                                        }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="w-full md:w-auto"
                                    >
                                        <Link
                                            to="/about"
                                            className="block w-full text-center bg-[#7E1835] px-6 py-3 text-sm text-white hover:bg-[#6b1824] focus:outline-none md:inline-block md:w-auto md:px-10 md:py-4 md:text-base"
                                        >
                                            Read More
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* <motion.div
                                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: prefersReducedMotion ? 0 : 0.45 },
                                    }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="w-full md:w-auto"
                                >
                                    <Link
                                        to="/about"
                                        className="block w-full text-center bg-[#7E1835] px-6 py-3 text-sm text-white hover:bg-[#6b1824] focus:outline-none md:inline-block md:w-auto md:px-10 md:py-4 md:text-base"
                                    >
                                        Read More
                                    </Link>
                                </motion.div> */}
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}