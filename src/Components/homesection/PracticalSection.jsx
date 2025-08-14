/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import pattern from "../../assets/home/pattern.png";

export default function PracticalSection() {
    const [pressedIndex, setPressedIndex] = useState(null);

    const practiceAreas = [
        { left: "Litigation And Dispute Resolution", right: "Corporate And Commercial Transaction" },
        { left: "Due Diligence Services", right: "Real Estate & Construction" },
        { left: "Corporate & Project Finance", right: "Corporate & Project Finance" },
        { left: "White Collar And Financial Crime", right: "Secretarial Wing" },
    ];

    const slugify = (s) =>
        s
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-");

    // Animations
    const fadeUp = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    };
    const stagger = {
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
    };

    return (
        <motion.section
            className="relative lg:h-[545px] bg-white py-12 px-4 lg:px-12 4xl:px-32 overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* ========== DESKTOP/TABLET (unchanged design) ========== */}
            <div className="hidden lg:block">
                {/* Decorative background (desktop only) */}
                <div className="pointer-events-none absolute inset-y-0 left-0 hidden lg:block">
                    <img src={pattern} alt="Decorative Background" className="h-full w-full" loading="lazy" />
                </div>

                <div className="relative mx-auto flex gap-8">
                    {/* Left rail */}
                    <aside className="w-80 shrink-0">
                        <motion.h2
                            className="mb-10 flex items-center text-sm tracking-wide text-gray-800"
                            variants={fadeUp}
                        >
                            <span className="mr-3 h-2 w-2 rounded-full bg-red-900"></span>
                            OUR PRACTICAL AREA
                        </motion.h2>
                    </aside>

                    {/* Main */}
                    <main className="flex-1">
                        {/* Top actions */}
                        <motion.div className="mb-8 flex items-center justify-end" variants={fadeUp}>
                            <motion.a
                                href="/practice"
                                className="inline-flex items-center bg-red-900 px-6 py-3 text-sm font-medium text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-900/40"
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                Show All
                            </motion.a>
                        </motion.div>

                        <div className="flex gap-10">
                            {/* Left small label */}
                            <motion.div className="w-28 pt-3" variants={fadeUp}>
                                <span className="text-[11px] tracking-[0.2em] text-gray-400">PRACTICES</span>
                            </motion.div>

                            {/* Content + rows */}
                            <motion.div className="flex-1" variants={stagger}>
                                <div className="space-y-6">
                                    {practiceAreas.map((row, index) => (
                                        <motion.div key={index} className="grid grid-cols-2 gap-8" variants={fadeUp}>
                                            {/* Left item */}
                                            <motion.a
                                                href={`/practice/${slugify(row.left)}`}
                                                className="group flex items-center justify-between border-t border-transparent pt-4 transition-all hover:border-red-900 hover:pt-3 focus:outline-none focus:ring-1 focus:ring-red-900/30"
                                                whileHover={{ x: 2 }}
                                                whileTap={{ scale: 0.99 }}
                                                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                            >
                                                <span className="flex items-center">
                                                    <span className="mr-4 text-xl text-red-900">/</span>
                                                    <span className="text-gray-700 transition-colors group-hover:text-red-900">
                                                        {row.left}
                                                    </span>
                                                </span>
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full transition-all group-hover:bg-red-900 group-hover:translate-x-1">
                                                    <ChevronRight className="h-4 w-4 text-red-900 transition-colors group-hover:text-white" />
                                                </span>
                                            </motion.a>

                                            {/* Right item */}
                                            <motion.a
                                                href={`/practice/${slugify(row.right)}`}
                                                className="group flex items-center justify-between border-t border-transparent pt-4 transition-all hover:border-red-900 hover:pt-3 focus:outline-none focus:ring-1 focus:ring-red-900/30"
                                                whileHover={{ x: 2 }}
                                                whileTap={{ scale: 0.99 }}
                                                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                            >
                                                <span className="flex items-center">
                                                    <span className="mr-4 text-xl text-red-900">/</span>
                                                    <span className="text-gray-700 transition-colors group-hover:text-red-900">
                                                        {row.right}
                                                    </span>
                                                </span>
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full transition-all group-hover:bg-red-900 group-hover:translate-x-1">
                                                    <ChevronRight className="h-4 w-4 text-red-900 transition-colors group-hover:text-white" />
                                                </span>
                                            </motion.a>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </main>
                </div>
            </div>

            {/* ========== MOBILE (matches screenshot, adds tap/enter animations) ========== */}
            <div className="block lg:hidden">
                <div className="mx-auto max-w-xl">
                    {/* Header */}
                    <motion.h2
                        className="mb-6 flex items-center text-sm tracking-wide text-gray-800"
                        variants={fadeUp}
                    >
                        <span className="mr-3 h-2 w-2 rounded-full bg-red-900"></span>
                        OUR PRACTICAL AREA
                    </motion.h2>

                    <motion.div className="mb-3 text-[11px] tracking-[0.2em] text-gray-400" variants={fadeUp}>
                        PRACTICES
                    </motion.div>

                    <motion.ul className="space-y-6" variants={stagger}>
                        {practiceAreas.map((item, i) => {
                            const href = `/practice/${slugify(item.left)}`;
                            const active = pressedIndex === i;

                            return (
                                <motion.li key={`m-${i}`} variants={fadeUp}>
                                    <motion.a
                                        href={href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setPressedIndex(i); // show pressed state
                                            setTimeout(() => {
                                                window.location.assign(href); // then navigate
                                            }, 120);
                                        }}
                                        className={`group flex items-center justify-between border-t pt-4 transition-all focus:outline-none focus:ring-2 focus:ring-red-900/30
                      ${active ? "border-red-900 pt-3" : "border-transparent"}
                    `}
                                        whileTap={{ scale: 0.985 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                    >
                                        <span className="flex items-center">
                                            <span className="mr-3 text-xl text-red-900">/</span>
                                            <span
                                                className={`transition-colors ${active ? "text-red-900 font-semibold" : "text-gray-700"
                                                    }`}
                                            >
                                                {item.left}
                                            </span>
                                        </span>

                                        <span
                                            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all
                        ${active ? "bg-red-900" : "bg-transparent"}
                      `}
                                        >
                                            <ChevronRight
                                                className={`h-5 w-5 transition-colors ${active ? "text-white" : "text-red-900"
                                                    }`}
                                            />
                                        </span>
                                    </motion.a>
                                </motion.li>
                            );
                        })}
                    </motion.ul>

                    <motion.div className="mt-10" variants={fadeUp}>
                        <motion.a
                            href="/practice"
                            className="block w-full max-w-xs bg-red-900 px-6 py-3 text-center text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-900/40"
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                            Show All
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
