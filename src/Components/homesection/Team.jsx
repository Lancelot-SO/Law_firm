/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ExternalLink, X, Facebook, Instagram, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Team() {
    const [selectedAttorney, setSelectedAttorney] = useState(null);

    const attorneys = [
        {
            name: "Kwame Boafo Akuffo",
            title: "PARTNER",
            image: "/smiling-black-professional.png",
            education:
                "Kwame Was Educated At Achimota School, The University Of Ghana's Faculty Of Law, And Was Admitted To The Ghana School Of Law. He Holds A Master's Degree In Law, Specialising In International Finance And Commercial Law, From King's College London.",
            admitted:
                "Kwame Worked With The Law Firm Of Akufo-Addo, Prempeh & Co. For 18 Years. Established In 1979, Akufo-Addo, Prempeh & Co. Is One Of Ghana's Largest Law Firms And Has Grown Into A Leading Law Firm.",
            experience:
                "At Material Times, The Firm Maintained A Broadly Based Practice, Offering A Full Range Of Quality Legal Services. The Firm Represented Numerous International Companies And Was Instructed By Leading Law Firms In America And Europe To Act On Behalf Of International Companies And Corporations.",
            practice:
                "Kwame Has Extensive Experience In Commercial Litigation And Associated Transactions. Additionally, He Has A Keen Interest In Constitutional Law And Was A Member Of The Celebrated Election Petition Team That Represented His Excellency Nana Akufo-Addo, President Of The Republic Of Ghana, In The 2013 Election Petition Litigation.",
        },
        {
            name: "Audrey Twum",
            title: "PARTNER",
            image: "/professional-woman-teal-blazer.png",
            education:
                "Audrey graduated from the University of Ghana School of Law and was called to the Ghana Bar. She holds an LLM in International Commercial Law from University College London.",
            admitted:
                "Audrey has been practicing law for over 15 years, specializing in corporate law and international transactions.",
            experience:
                "She has extensive experience in mergers and acquisitions, corporate governance, and regulatory compliance across various industries.",
            practice:
                "Audrey focuses on corporate law, securities regulation, and cross-border transactions. She has advised numerous multinational corporations on their operations in Ghana and West Africa.",
        },
        {
            name: "Yvonne Akuffo-Addo",
            title: "PARTNER",
            image: "/professional-woman-blazer-pearls.png",
            education:
                "Yvonne obtained her law degree from the University of Ghana and was admitted to the Ghana Bar. She later earned an LLM in International Law from Harvard Law School.",
            admitted:
                "Yvonne has been practicing law for over 12 years, with a focus on international arbitration and dispute resolution.",
            experience:
                "She has represented clients in complex commercial disputes and has extensive experience in alternative dispute resolution mechanisms.",
            practice:
                "Yvonne specializes in international arbitration, commercial litigation, and dispute resolution. She has handled cases before various international arbitration tribunals and courts.",
        },
    ];

    const openModal = (index) => setSelectedAttorney(index);
    const closeModal = () => setSelectedAttorney(null);

    // ===== Animations (initial load + stagger) =====
    const page = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
    };
    const card = {
        hidden: { opacity: 0, y: 24, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
    };

    return (
        <>
            <motion.section
                className="bg-rose-50 py-16 px-4"
                variants={page}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="mx-auto lg:px-12 4xl:px-32">
                    {/* Header */}
                    <motion.div className="mb-12 text-center" variants={fadeUp}>
                        <h2 className="text-2xl md:text-4xl font-garamond text-[#7E1835] leading-tight">
                            Our Experienced Attorney Are Ready
                            <br />
                            To answer any questions
                        </h2>
                    </motion.div>

                    {/* Attorney Grid */}
                    <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
                        {attorneys.map((attorney, index) => (
                            <motion.div key={index} className="group" variants={card}>
                                {/* Image Container (hover animation) */}
                                <motion.div
                                    className="relative mb-4 overflow-hidden rounded-lg bg-gray-200"
                                    whileHover={{ scale: 1.02, rotate: -0.25, y: -2 }}
                                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                                >
                                    <motion.img
                                        src={attorney.image || "/placeholder.svg"}
                                        alt={`${attorney.name} - ${attorney.title}`}
                                        className="h-[590px] w-full object-cover"
                                        loading="lazy"
                                        whileHover={{ scale: 1.06 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                    />
                                    {/* External Link Icon */}
                                    <motion.button
                                        onClick={() => openModal(index)}
                                        className="absolute bottom-4 right-4 rounded bg-[#7E1835] p-2 shadow"
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ExternalLink className="h-4 w-4 text-white" />
                                    </motion.button>
                                </motion.div>

                                {/* Attorney Info */}
                                <div className="text-left">
                                    <p className="mb-1 text-sm font-medium tracking-wide text-[#7E1835]">• {attorney.title}</p>
                                    <h3 className="font-serif text-xl text-gray-900">{attorney.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Modal */}
            <AnimatePresence mode="wait">
                {selectedAttorney !== null && (
                    <motion.div
                        className="fixed inset-0 z-50 flex"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onClick={closeModal}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative ml-auto h-full w-full md:w-[80%] bg-rose-50 shadow-2xl"
                            initial={{ x: "100%", scale: 0.95 }}
                            animate={{ x: 0, scale: 1 }}
                            exit={{ x: "100%", scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200, mass: 1, duration: 1.2 }}
                        >
                            {/* Header */}
                            <motion.div
                                className="flex items-center justify-between border-b border-rose-200 p-6"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                            >
                                <h3 className="font-medium tracking-wide text-[#7E1835]">• ABOUT US</h3>
                                <motion.button
                                    onClick={closeModal}
                                    className="rounded bg-[#7E1835] p-2"
                                    whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "#881337" }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <X className="h-4 w-4 text-white" />
                                </motion.button>
                            </motion.div>

                            {/* Content (already responsive from your version) */}
                            <div className="flex h-[calc(100%-80px)] flex-col md:flex-row overflow-y-auto md:overflow-hidden">
                                {/* Left side - Image */}
                                <motion.div
                                    className="w-full md:w-2/5 p-4 md:p-6 md:pb-6"
                                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                                    transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                                >
                                    <motion.div
                                        className="h-64 md:h-full overflow-hidden rounded-lg bg-gray-200"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    >
                                        <img
                                            src={attorneys[selectedAttorney].image || "/placeholder.svg"}
                                            alt={attorneys[selectedAttorney].name}
                                            width={400}
                                            height={600}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </motion.div>
                                </motion.div>

                                {/* Right side - Content */}
                                <motion.div
                                    className="w-full md:w-3/5 p-4 md:p-6"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                                >
                                    <motion.div
                                        className="mb-6"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.9, duration: 0.5 }}
                                    >
                                        <div className="mb-2 flex items-center justify-between">
                                            <p className="text-sm font-medium tracking-wide text-[#7E1835]">
                                                • {attorneys[selectedAttorney].title}
                                            </p>

                                            {/* Social Icons */}
                                            <motion.div
                                                className="flex gap-4"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 1.1, duration: 0.4 }}
                                            >
                                                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                                                    <motion.div
                                                        key={index}
                                                        whileHover={{ scale: 1.3, y: -5, rotate: [0, -10, 10, 0] }}
                                                        whileTap={{ scale: 0.9 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                    >
                                                        <Icon className="h-5 w-5 cursor-pointer text-[#7E1835]" />
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </div>

                                        <h2 className="mb-4 font-serif text-3xl text-gray-900">
                                            {attorneys[selectedAttorney].name}
                                        </h2>
                                    </motion.div>

                                    {/* Content Sections */}
                                    {[
                                        { title: "EDUCATION", content: attorneys[selectedAttorney].education },
                                        {
                                            title: "Admitted To The Ghana Bar In October 1998",
                                            content: `${attorneys[selectedAttorney].admitted} ${attorneys[selectedAttorney].experience}`,
                                        },
                                        { title: "Practice", content: attorneys[selectedAttorney].practice },
                                    ].map((section, index) => (
                                        <motion.div
                                            key={section.title}
                                            className="mb-8"
                                            initial={{ opacity: 0, x: 30, rotateX: -15 }}
                                            animate={{ opacity: 1, x: 0, rotateX: 0 }}
                                            exit={{ opacity: 0, x: 30 }}
                                            transition={{
                                                delay: 1.2 + index * 0.2,
                                                duration: 0.6,
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 20,
                                            }}
                                            whileHover={{ scale: 1.02, x: 10, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                                        >
                                            <h3 className="mb-3 font-medium tracking-wide text-[#7E1835]">• {section.title}</h3>
                                            <p className="text-sm leading-relaxed text-gray-700">{section.content}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}