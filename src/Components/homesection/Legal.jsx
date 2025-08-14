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

    const sections = [
        "Strategic Corporate & Commercial Law & Leadership",
        "Developing A Leading Framework For A Digital Microfinance Institution",
        "Successful Defense Of A High-Profile Libel Case Involving A Media Entity",
        "Legal Support For A Nonprofit Advocating For Girls' Education",
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
            <div className="absolute inset-0 z-10 flex items-center justify-center p-4 md:p-8">
                <div className="w-full max-w-6xl">
                    {/* Main Glass Panel */}
                    <motion.div
                        className="relative rounded-lg bg-[#7E1835]/65 p-6 md:p-12 shadow-2xl backdrop-blur-md"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={panelVariant}
                    >
                        <motion.div
                            className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12"
                            variants={sectionStagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* Left Side - Lady Justice Image */}
                            <motion.div className="flex-shrink-0 mx-auto md:mx-0" variants={imageIn}>
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
                                    className="mb-6 w-full text-2xl font-garamond font-bold leading-tight md:mb-8 md:w-[721px] md:text-4xl"
                                    variants={fadeUp}
                                >
                                    General Counsel Search: Strategic Legal Leadership in Action
                                </motion.h1>

                                <motion.p
                                    className="mb-8 font-outfit text-[14px] font-normal leading-[28px] md:mb-12 md:leading-[30px]"
                                    variants={fadeUp}
                                >
                                    If You've Come This Far, It Means You Or Someone Or Something You Love Is On The Line. At Kwame Akuffo
                                    & Co., We Are Built For High-Stakes Battles With A Process Sharpened For Results. Our Every Move Is
                                    Deliberate And Geared Towards Winning. You're Always At The Centre Of Everything We Do, And With Us,
                                    No Detail Is Ever Missed. Our Approach Explores Both A Commercial And Realistic Strategy In Consulting
                                    And Advising
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
                                                        {section}
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
                                                                    Detailed information about {section.toLowerCase()} would be displayed here. This
                                                                    section provides comprehensive insights into our approach and methodology for
                                                                    handling complex legal matters with precision and expertise.
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
