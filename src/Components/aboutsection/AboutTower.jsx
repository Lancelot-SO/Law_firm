/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion";

import tower from "../../assets/about/tower.png";
import books from "../../assets/about/books.png";
import pen from "../../assets/about/pen.png";
import rotate from "../../assets/about/rotate.png";
import bookbottom from "../../assets/about/bookbottom.png";

const AboutTower = () => {
    return (
        <div>
            {/* Tower Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <img
                    src={tower}
                    alt="tower"
                    loading="lazy"
                    className="w-full lg:h-[566px] object-cover"
                />
            </motion.div>

            <div className="bg-[#7E1835]/10">
                {/* Ethos Header */}
                <div className="lg:h-[235px] px-4 lg:px-12 4xl:px-32">
                    <main className="py-12">
                        <div className="flex lg:flex-row flex-col-reverse lg:items-center justify-between">
                            <motion.div
                                className="lg:w-[485px] w-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <p className="text-gray-700 text-[45px] font-garamond leading-[54px]">
                                    <span className="text-[#7E1835]">Integrity</span> isn’t optional here. It’s our <span className="text-[#7E1835]">strategy.</span>
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex items-center flex-shrink-0"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="w-2 h-2 bg-[#7E1835] rounded-full mr-3"></div>
                                <span className="text-sm font-medium text-[#7E1835] tracking-wide">
                                    Our Ethos
                                </span>
                            </motion.div>
                        </div>
                    </main>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row w-full h-[auto] lg:h-[550px]">
                    {/* Left Column */}
                    <motion.div
                        className="lg:w-1/3 h-[600px] relative px-4 md:px-0 4xl:px-32"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="py-4 w-full h-auto text-[#222933] lg:pl-12 4xl:pl-0 text-left">
                            <span>
                                At Kwame Akuffo, we take the Ghana Bar Association’s Code of Ethics as a baseline, not a limit. We don’t fold under pressure, compromise our values, or let anything stand between us and what’s right for our clients. We play clean, but we play to win.
                            </span>
                        </div>

                        <motion.img
                            src={books}
                            alt="books"
                            loading="lazy"
                            className="absolute md:top-36 md:right-0 right-4 w-[253px] h-auto"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        />

                        <motion.img
                            src={pen}
                            alt="pen"
                            loading="lazy"
                            className="absolute top-52 left-0 w-[80px] h-auto hidden md:block"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                        />

                        <div className="absolute md:top-[70%] top-[73%] md:left-[38%] 4xl:left-[50%] left-[10%] rsm:top-[70%] rsm:left-[20%]">
                            <motion.img
                                src={rotate}
                                alt="Rotating integrity circle with text"
                                className="w-28 h-28"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 60,
                                    ease: "linear",
                                    repeat: Number.POSITIVE_INFINITY,
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        className="flex-1 relative"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                    >
                        <img
                            src={bookbottom}
                            alt="pen"
                            loading="lazy"
                            className="absolute bottom-0 right-0 w-[254px] h-[236px] hidden md:block"
                        />
                        <div className="py-4 px-4 lg:px-8 4xl:px-32 md:h-[514px] lg:w-[732px] 4xl:w-[1032px]">
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.9 }}
                            >
                                <h2 className="text-[16px] font-semibold text-[#7E1835] mb-4">Our Commitment To Ethical Standards</h2>
                                <p className="text-gray-800 text-[14px] leading-relaxed mb-6">
                                    At Kwame Akuffo & Co, We Adhere To The Ghana Bar Association's Code Of Ethics. We Ensure That Our Actions And
                                    Decisions Do Not Compromise Our Independence, Integrity, Or Duty To Our Clients.
                                </p>
                                <div className="border-b border-dotted border-[#7E1835]"></div>
                            </motion.section>

                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 2.2 }}
                            >
                                <h2 className="text-[16px] font-semibold text-[#7E1835] mb-4">Our Approach To Client Service</h2>
                                <p className="text-gray-800 text-[14px] leading-relaxed mb-6">
                                    We Take The Time To Understand Our Clients' Unique Needs And Adapt To Their Changing Demands. We Provide
                                    Personalized Attention, Commercial Awareness, And Realistic Advice To Help Our Clients Achieve Their Goals.
                                </p>
                                <div className="border-b border-dotted border-[#7E1835]"></div>
                            </motion.section>

                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 2.5 }}
                            >
                                <h2 className="text-[16px] font-semibold text-[#7E1835] mb-4">Our Commitment To Client Care</h2>
                                <p className="text-gray-800 text-[14px] leading-relaxed mb-4">
                                    We Are Dedicated To Providing Exceptional Client Service By:
                                </p>
                                <ul className="space-y-3 text-gray-800">
                                    <li className="flex items-start text-[14px]">
                                        <span className="text-[#7E1835] mr-3 mt-1">•</span>
                                        <span>Carrying Out Client Instructions Diligently And Promptly.</span>
                                    </li>
                                    <li className="flex items-start text-[14px]">
                                        <span className="text-[#7E1835] mr-3 mt-1">•</span>
                                        <span>Ensuring Clients Understand And Consent To Our Actions.</span>
                                    </li>
                                    <li className="flex items-start text-[14px]">
                                        <span className="text-[#7E1835] mr-3 mt-1">•</span>
                                        <span>Keeping Clients Informed Of Progress And Changes In The Law.</span>
                                    </li>
                                    <li className="flex items-start text-[14px]">
                                        <span className="text-[#7E1835] mr-3 mt-1">•</span>
                                        <span>Complying With Reasonable Requests For Information.</span>
                                    </li>
                                </ul>
                            </motion.section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutTower;
