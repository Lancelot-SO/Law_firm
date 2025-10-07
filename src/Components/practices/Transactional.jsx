/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import practicalbg from "../../assets/practical/practicalbg.png";
import main from "../../assets/practical/main.png";
import { Link, useLocation } from "react-router-dom";
import Team from '../homesection/Team';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

const areas = [
    "Structuring mergers, acquisitions, and joint ventures",
    "Negotiating shareholder and partnership agreements",
    "Drafting and reviewing contracts across multiple sectors",
    "Advising on regulatory compliance and approvals",
    "Supporting businesses through restructuring and expansion",
];

const sidebar = [
    { label: "All Practice Areas", to: "/practice-area" },
    { label: "Litigation and Dispute Resolution", to: "/litigation" },
    { label: "Transactional Business Law", to: "/transactional" },
    { label: "Transactional Advisory", to: "/advisory" },
    { label: "Corporate and Commercial Law", to: "/corporate" },
    { label: "Banking and Financial Institutional Matters", to: "/banking" },
    { label: "Legal Due Diligence Investigation", to: "/legal" },
];

const Transactional = () => {

    const { pathname } = useLocation();

    return (
        <div>
            {/* Desktop hero */}
            <motion.div
                className="relative hidden md:block"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.img
                    src={practicalbg}
                    alt="case background"
                    className="lg:h-full md:h-[722px] w-full object-cover"
                    variants={itemVariants}
                />

                <motion.div
                    className="absolute top-[211px] left-12 4xl:left-32 md:[561px] lg:w-[791px] h-[310px] flex flex-col justify-between"
                    variants={itemVariants}
                >
                    <span className="font-garamond font-normal leading-[70px] tracking-[-4%]">
                        <motion.span
                            className="font-garamond font-semibold lg:leading-[70px] md:leading-[50px] tracking-[-4%] text-[102px] text-[#7E1835]"
                            variants={itemVariants}
                        >
                            S
                        </motion.span>
                        <motion.span
                            className="font-garamond font-normal leading-[70px] tracking-[-4%] text-[60px] text-white"
                            variants={itemVariants}
                        >
                            <span className='font-garamond'>tructuring Transactions with Precision and Clarity</span>
                        </motion.span>
                    </span>

                    <motion.span
                        className="w-[535px] text-[12px] leading-5 font-normal text-white"
                        variants={itemVariants}
                    >
                        In today’s fast-moving business world, the strength of a transaction depends on the foresight and clarity behind it. We guide clients through every stage of structuring and executing deals to ensure they are legally sound and commercially viable.
                    </motion.span>

                    {/* <motion.div variants={itemVariants}>
                                        <Link
                                            to="/contact"
                                            className="bg-[#7E1835] text-white w-[122px] h-[39px] flex items-center justify-center text-[10px] font-bold leading-[15px] tracking-[1%]"
                                        >
                                            Practice Area
                                        </Link>
                                    </motion.div> */}
                </motion.div>

                <motion.div
                    className="absolute bottom-20 left-12 4xl:left-32 w-[571px] flex items-center gap-8"
                    variants={itemVariants}
                >
                    <motion.div className="flex items-center gap-4" variants={itemVariants}>
                        <div className="w-[40px] h-[40px] rounded-full border border-white flex items-center justify-center text-white">
                            <FaPhoneAlt />
                        </div>
                        <div className="flex flex-col text-white">
                            <span className="underline">Call Us On:</span>
                            <span>0303966645 / 0244284702</span>
                        </div>
                    </motion.div>

                    <motion.div className="flex items-center gap-4" variants={itemVariants}>
                        <div className="w-[40px] h-[40px] rounded-full border border-white flex items-center justify-center text-white">
                            <IoIosMail />
                        </div>
                        <div className="flex flex-col text-white">
                            <span className="underline">Email Us:</span>
                            <span>info@kbakuffo.com</span>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Mobile hero */}
            <motion.div
                className="relative block md:hidden h-screen"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.img
                    src={practicalbg}
                    alt="case mobile background"
                    className="absolute inset-0 w-full h-full object-cover"
                    variants={itemVariants}
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute inset-0 flex flex-col px-6 space-y-12 mt-[150px]">
                    <motion.h1
                        className="font-garamond font-normal leading-snug text-white text-3xl sm:text-4xl"
                        variants={itemVariants}
                    >
                        <span className="font-garamond font-semibold text-[#7E1835] text-[60px]">
                            S
                        </span>
                        <span className='font-garamond'>tructuring Transactions with Precision and Clarity</span>
                    </motion.h1>

                    <motion.p
                        className="text-white text-sm sm:text-base leading-relaxed"
                        variants={itemVariants}
                    >
                        In today’s fast-moving business world, the strength of a transaction depends on the foresight and clarity behind it. We guide clients through every stage of structuring and executing deals to ensure they are legally sound and commercially viable.
                    </motion.p>

                    {/* <motion.div variants={itemVariants}>
                                        <Link
                                            to="/contact"
                                            className="bg-[#7E1835] text-white inline-block px-5 py-2 text-xs sm:text-sm font-bold rounded"
                                        >
                                            Practice Area
                                        </Link>
                                    </motion.div> */}

                    <motion.div
                        className="mt-8 flex flex-col sm:flex-row sm:gap-8 gap-4"
                        variants={itemVariants}
                    >
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-2 border border-white rounded-full">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <div className="underline text-xs">Call Us On:</div>
                                <div className="text-xs">0303966645 / 0244284702</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-white">
                            <div className="p-2 border border-white rounded-full">
                                <IoIosMail />
                            </div>
                            <div>
                                <div className="underline text-xs">Email Us:</div>
                                <div className="text-xs">info@kbakuffo.com</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* ========= Content Section ========= */}
            <section className="mx-auto md:max-w-8xl px-6 lg:px-12 4xl:px-32 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* LEFT / MAIN */}
                    <motion.article
                        className="lg:col-span-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Intro image */}
                        <motion.div
                            className="rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm"
                            variants={itemVariants}
                        >
                            <img
                                src={main}
                                alt="Library law image"
                                className="w-full h-64 sm:h-80 object-cover"
                            />
                        </motion.div>

                        {/* Intro copy */}

                        {/* Our Approach */}
                        <motion.section className="mt-10" variants={itemVariants}>
                            <h2 className="font-garamond text-[32px] font-bold text-[#7E1835]">
                                Our Approach
                            </h2>
                            <div className="mt-3 h-px w-full bg-gray-200" />
                            <p className="mt-4 text-[15px] leading-7 text-[#222933]">
                                We treat every transaction as unique. Our team takes the time to understand the context, objectives, and risks involved, then designs legal frameworks that protect your interests while supporting long-term growth. Whether it’s cross-border agreements, mergers, or joint ventures, our method is practical, forward-looking, and detail-driven.
                            </p>
                        </motion.section>

                        {/* Areas of Expertise */}
                        <motion.section className="mt-10" variants={itemVariants}>
                            <h2 className="font-garamond text-[32px] font-bold text-[#222933]">
                                Areas of <span className="font-garamond text-[32px] font-bold text-[#7E1835]">Expertise</span>
                            </h2>
                            <div className="my-3 h-px w-full bg-gray-200" />

                            <span>Our Transactional Business Law practice covers the full life cycle of commercial deals, including:</span>
                            <ul className="mt-5 space-y-2">
                                {areas.map((a, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-2 h-[6px] w-[6px] rounded-full bg-[#7E1835]" />
                                        <p className="text-[15px] leading-7 text-[#222933]">{a}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        <motion.section className='my-8' variants={itemVariants}>
                            <span>
                                Our goal is simple: to create legal frameworks that don’t just close deals but sustain long-term growth and success.
                            </span>
                        </motion.section>

                        {/* Client-Centric */}
                        <motion.section className="mt-10" variants={itemVariants}>
                            <h2 className="font-garamond text-[32px] font-bold text-[#222933]">
                                Client-Centric <span className="font-garamond text-[32px] font-bold text-[#7E1835]">& Confidential</span>
                            </h2>
                            <div className="mt-3 h-px w-full bg-gray-200" />
                            <p className="mt-4 text-[15px] leading-7 text-[#222933]">
                                At Kwame Akuffo & Co. Unlimited, every matter is handled with strict confidentiality and loyalty to our clients’ best interests. We act independently, fearlessly, and with discretion, ensuring your business objectives are protected at every step.                            </p>
                        </motion.section>
                    </motion.article>

                    {/* RIGHT / SIDEBAR */}
                    <aside className="lg:col-span-4">
                        <div className="rounded-xl border border-gray-200 bg-white shadow-sm sticky top-6">
                            <div className="px-5 py-4 border-b border-gray-200">
                                <h3 className="font-garamond text-lg text-gray-900">Other Practice Areas</h3>
                            </div>

                            <nav className="p-2">
                                {sidebar.map((item) => {
                                    const active = pathname === item.to;
                                    return (
                                        <Link
                                            key={item.to}
                                            to={item.to}
                                            className={[
                                                "block rounded-md px-4 py-3 text-sm transition",
                                                active
                                                    ? "bg-rose-50 text-[#7E1835] font-semibold ring-1 ring-rose-100"
                                                    : "text-[#222933] hover:bg-gray-50",
                                            ].join(" ")}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>
                </div>
            </section>

            <Team />
        </div>
    )
}

export default Transactional