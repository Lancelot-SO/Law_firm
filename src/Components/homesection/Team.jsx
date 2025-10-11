/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ExternalLink, X, Facebook, Instagram, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Akuffo1 from "../../assets/team/akuffo1.jpg"
import Akuffo2 from "../../assets/team/akuffo2.jpg"
import Audrey1 from "../../assets/team/audrey1.jpg"
import Audrey2 from "../../assets/team/audrey2.jpg"
import Yvonne1 from "../../assets/team/yvonne1.jpg"
import Yvonne2 from "../../assets/team/yvonne2.jpg"



export default function Team() {
    const [selectedAttorney, setSelectedAttorney] = useState(null);

    const attorneys = [
        {
            name: "Kwame Boafo Akuffo",
            email: "Kwame@kbakuffo.com",
            title: "PARTNER",
            image: Akuffo1,
            image2: Akuffo2,
            background: `Kwame Boafo Akuffo was called to the Ghana Bar in October 1998. He spent 18 years with the prestigious firm of Akufo-Addo, Prempeh & Co., one of Ghana’s foremost legal chambers known for its full-service offering and international reputation. During his tenure, he was involved in major litigation and advisory matters, working with global law firms and representing international clients. He was also part of the distinguished legal team that represented H.E. Nana Akufo-Addo in the landmark 2013 Presidential Election Petition case.`,
            education: `Kwame is an alumnus of Achimota School and studied law at the University of Ghana and the Ghana School of Law. He holds a Master of Laws (LL.M) in International Finance and Commercial Law from King’s College London. His education and global exposure position him as a thought leader in the evolving legal and regulatory landscape.`,
            practice: `Kwame’s core areas of expertise include commercial litigation, constitutional law, and transactional advisory. He is known for his courtroom precision, deep legal insight, and strategic thinking in high-stakes disputes and commercial negotiations. His practice spans financial institutions, corporate clients, public figures, and cross-border entities.`,
            socials: {
                facebook: "https://www.facebook.com/kwame.akuffo1?mibextid=wwXIfr&rdid=pMfoHkbhysjuAwgF#",
                instagram: "https://www.instagram.com/kwameboafoakuffo_official?igsh=cGNicjJ3ODVmdmVq",
                twitter: "https://x.com/thecourtbruiser?s=21",
            },
        },
        {
            name: "Audrey Twum",
            email: "audrey@kbakuffo.com",
            title: "PARTNER",
            image: Audrey1,
            image2: Audrey2,
            background: `Audrey Twum brings over two decades of legal experience across both the UK and Ghana. She was called to the English Bar by the Honourable Society of Gray’s Inn in 2000 and to the Ghana Bar in 2009. Trained in London, Audrey has worked extensively in secured lending, property finance, and commercial property law. She joined Kwame Akuffo & Co. Unlimited in 2019, bringing with her a strong foundation in transactional work, corporate advisory, and civil litigation.`,
            education: `Audrey is an alumna of Achimota School and earned her LL.B (Hons) from the University of Wolverhampton. She pursued her legal training at the Inns of Court Law School, City University London, and later completed an LL.M in International Transport and Maritime Law at London Metropolitan University. She is currently advancing her expertise through a Postgraduate Diploma in Governance, Risk, and Compliance.`,
            practice: `Audrey’s practice spans real estate development, commercial transactions, and corporate structuring. She is highly skilled in drafting shareholder agreements, interpreting contracts, conducting legal due diligence, and advising financial institutions on their loan portfolios. Known for her meticulous approach and strong legal reasoning, Audrey plays a central role in the firm’s transactional and advisory practice.`,
            socials: {
                facebook: "https://facebook.com/audreytwum",
                instagram: "https://instagram.com/audreytwum",
                twitter: "https://twitter.com/audreytwum",
            },
        },
        {
            name: "Yvonne Akuffo-Addo",
            email: "yvonne@kbakuffo.com",
            title: "PARTNER",
            image: Yvonne1,
            image2: Yvonne2,
            background: `Yvonne Akuffo-Addo was called to the Ghana Bar in October 2010 and began her legal career at Kuenyehia & Nutsukpui Legal Practitioners & Notaries. There, she gained extensive experience in litigation and negotiation across multiple areas of practice. Over a seven-year period, she worked on cases involving labour law, intellectual property, family law, tax, and arbitration - shaping her into a well-rounded and versatile practitioner. She currently serves as Secretary to the Ghana Bar Association’s Women and Minor Rights Committee.`,
            education: `Yvonne is a graduate of Akosombo International School and holds two first degrees: a Bachelor of Science in Biological Sciences from the University of Cape Coast, and a Bachelor of Laws from the University of Ghana. She obtained her Postgraduate Diploma in Law from the Ghana School of Law and is a member of both the Ghana Bar Association and the International Bar Association.`,
            practice: `Yvonne’s practice spans employment law, family law, corporate and commercial litigation, and intellectual property. She brings strong advocacy and negotiation skills to every matter, whether advising clients on sensitive personal issues or representing businesses in high-stakes disputes. Her cross-disciplinary background and leadership within the legal community reflect her commitment to both the profession and the people it serves.`,
            socials: {
                facebook: "https://facebook.com/yvonneakuffoaddo",
                instagram: "https://instagram.com/yvonneakuffoaddo",
                twitter: "https://twitter.com/yvonneakuffoaddo",
            },
        },
    ];

    const openModal = (index) => setSelectedAttorney(index);
    const closeModal = () => setSelectedAttorney(null);

    // ===== Animations =====
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
                        <h2 className="text-2xl md:text-4xl font-bold font-garamond text-[#7E1835] leading-tight">
                            Our Experienced Attorneys Are Ready
                            <br />
                            To Answer Any Questions
                        </h2>
                    </motion.div>

                    {/* Attorney Grid */}
                    <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {attorneys.map((attorney, index) => (
                            <motion.div key={index} className="group" variants={card}>
                                {/* Image Container */}
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

                            {/* Content */}
                            <div className="flex h-[calc(100%-80px)] flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
                                {/* Left side - Image */}
                                <motion.div
                                    className="w-full lg:w-2/5 p-4 lg:p-6 lg:pb-6"
                                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                                    transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                                >
                                    <motion.div
                                        className="h-auto md:h-[400px] lg:h-full overflow-hidden rounded-lg bg-gray-200"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    >
                                        <img
                                            src={attorneys[selectedAttorney].image2 || "/placeholder.svg"}
                                            alt={attorneys[selectedAttorney].name}
                                            width={400}
                                            className="h-full md:h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </motion.div>
                                </motion.div>

                                {/* Right side - Content */}
                                <motion.div
                                    className="w-full lg:w-3/5 p-4 md:p-6"
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
                                                {Object.entries(attorneys[selectedAttorney].socials).map(([platform, url], index) => {
                                                    if (!url) return null;
                                                    const Icon =
                                                        platform === "facebook"
                                                            ? Facebook
                                                            : platform === "instagram"
                                                                ? Instagram
                                                                : Twitter;
                                                    return (
                                                        <motion.a
                                                            key={index}
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            whileHover={{ scale: 1.3, y: -5, rotate: [0, -10, 10, 0] }}
                                                            whileTap={{ scale: 0.9 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                        >
                                                            <Icon className="h-5 w-5 cursor-pointer text-[#7E1835]" />
                                                        </motion.a>
                                                    );
                                                })}
                                            </motion.div>
                                        </div>

                                        <h2 className="mb-4 font-serif text-3xl text-gray-900">
                                            {attorneys[selectedAttorney].name}
                                        </h2>
                                        <span>
                                            Email:{" "}
                                            <a
                                                className="text-[#7E1835] hover:underline"
                                                href={`mailto:${attorneys[selectedAttorney].email}`}
                                            >
                                                {attorneys[selectedAttorney].email}
                                            </a>
                                        </span>
                                    </motion.div>

                                    {/* Content Sections */}
                                    {[
                                        { title: "Professional Background", content: attorneys[selectedAttorney].background },
                                        { title: "Education & Affiliations", content: attorneys[selectedAttorney].education },
                                        { title: "Practice Focus", content: attorneys[selectedAttorney].practice },
                                    ].map((section, index) => (
                                        <motion.div
                                            key={section.title}
                                            className="mb-4"
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
