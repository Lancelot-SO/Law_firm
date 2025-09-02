/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import legalbg from "../../assets/home/legalbg.png";
import legal from "../../assets/home/legal.png";
import legalmobile from "../../assets/home/legalmobile.png";

export default function Legal() {
    const [expandedSections, setExpandedSections] = useState([]);

    const toggleSection = (index) => {
        setExpandedSections((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };
    // FAQ sections (question + answer)
    const sections = [
        {
            question: "Do you only represent corporate clients?",
            answer:
                "Not at all. We work with individuals, startups, institutions, and multinational companies. Whether it’s a personal legal issue or a complex commercial matter, we provide tailored advice and representation grounded in experience.",
        },
        {
            question: "How do I book a consultation?",
            answer:
                "You can schedule a consultation by calling our office or submitting a request through our contact form. A member of our team will follow up promptly to understand your needs and set up a meeting.",
        },
        {
            question: "Are your services available outside Accra?",
            answer:
                "Yes. While we are based in Accra, we represent clients across Ghana and in cross-border matters. Our practice is national in scope and flexible to meet your specific legal needs.",
        },
        {
            question: "What should I expect during our first meeting?",
            answer:
                "Expect clear, focused advice. We’ll review your matter, ask the right questions, and provide an honest assessment of your options. It’s our job to help you understand both the risks and the strategy ahead.",
        },
    ];

    // Animation variants
    const panelVariant = {
        hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const sectionStagger = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    };

    const imageIn = {
        hidden: { opacity: 0, y: 16, rotate: -1.5 },
        show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <div className="relative h-[1310px] lg:h-[1000px] w-full overflow-hidden">
            {/* Background Image */}
            <img
                src={legalbg}
                alt="legal"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full select-none object-cover"
                loading="lazy"
            />

            {/* Glass Overlay Container (fills parent & centers content) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center p-4 lg::p-8">
                <div className="w-full max-w-6xl">
                    {/* Main Glass Panel */}
                    <motion.div
                        className="relative rounded-lg bg-[#7E1835]/70 p-6 lg:p-12 shadow-2xl backdrop-blur-md"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={panelVariant}
                    >
                        <motion.div
                            className="flex flex-col gap-8 lg:flex-row md:items-start md:gap-12"
                            variants={sectionStagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* Left Side - Lady Justice Image */}
                            <motion.div className="flex-shrink-0 mx-auto lg:mx-0" variants={imageIn}>
                                <div className="h-[320px] w-[160px] overflow-hidden rounded-lg bg-white shadow-lg sm:h-[360px] sm:w-[170px] md:h-[619px] md:w-[229px]">
                                    <img
                                        src={legal}
                                        alt="Lady Justice statue with scales"
                                        className="hidden h-full w-full object-cover md:block"
                                        loading="lazy"
                                    />
                                    <img
                                        src={legalmobile}
                                        alt="Lady Justice statue with scales"
                                        className="block h-full w-full object-cover md:hidden"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>

                            {/* Right Side - Content */}
                            <div className="flex-1 text-white">
                                <motion.h1
                                    className="mb-6 w-full text-2xl font-garamond font-bold leading-tight lg:mb-8 lg:w-[721px] lg:text-4xl"
                                    variants={fadeUp}
                                >
                                    We Sweat the Small Stuff (So You Don't Have To)
                                </motion.h1>

                                <motion.p
                                    className="mb-8 font-outfit text-[14px] font-normal leading-[28px] md:mb-12 md:leading-[30px]"
                                    variants={fadeUp}
                                >
                                    At our core, we believe the practice of law is a human endeavor. It’s not about statutes and clauses; it's about your business, your family, your future. We see our role as more than just legal advisors; we are your strategic partners, invested in your outcome from start to finish.
                                </motion.p>

                                {/* Expandable Sections */}
                                <div className="space-y-4">
                                    {sections.map((section, index) => {
                                        const isOpen = expandedSections.includes(index);
                                        return (
                                            <motion.div
                                                key={index}
                                                className="border-b border-white/20 pb-4"
                                                variants={fadeUp}
                                            >
                                                <motion.button
                                                    whileHover={{ opacity: 0.9 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => toggleSection(index)}
                                                    className="group flex w-full items-center justify-between gap-3 text-left transition-opacity hover:opacity-80"
                                                >
                                                    <span className="flex-1 truncate pr-4 text-lg font-medium md:whitespace-normal">
                                                        {section.question}
                                                    </span>

                                                    {/* Icon micro-anim */}
                                                    <motion.div
                                                        className="flex-shrink-0"
                                                        animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.05 : 1 }}
                                                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                                    >
                                                        {isOpen ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                                                    </motion.div>
                                                </motion.button>

                                                {/* Collapsible body */}
                                                <AnimatePresence initial={false}>
                                                    {isOpen && (
                                                        <motion.div
                                                            key="content"
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.28, ease: "easeOut" }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="mt-4 leading-relaxed text-white/80">
                                                                <p>
                                                                    {section.answer}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* End Right Side */}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}