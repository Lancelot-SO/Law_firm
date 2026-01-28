/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import aboutbg from "../../assets/about/aboutbg.png"
import aboutmob from "../../assets/about/aboutmob.png"

import { Link } from 'react-router-dom'

const AboutHero = () => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }
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
                    src={aboutbg}
                    alt="hero background"
                    className="h-full md:h-[722px] w-full object-cover"
                    variants={itemVariants}
                />

                <motion.div
                    className="absolute top-[211px] left-12 4xl:left-32 w-[600px] h-[210px] flex flex-col justify-between"
                    variants={itemVariants}
                >
                    <span className="font-garamond font-normal leading-[70px] tracking-[-4%]">
                        <motion.span
                            className="font-garamond font-semibold leading-[70px] tracking-[-4%] text-[102px] text-[#7E1835]"
                            variants={itemVariants}
                        >
                            T
                        </motion.span>
                        <motion.span
                            className="font-garamond font-normal leading-[70px] tracking-[-4%] text-[60px] text-white"
                            variants={itemVariants}
                        >
                            rusted. Experienced. Leading.
                        </motion.span>
                    </span>

                    <motion.span
                        className="w-[535px] text-[12px] leading-5 font-normal text-white"
                        variants={itemVariants}
                    >
                        At Kwame Akuffo, we take the Ghana Bar Association’s Code of Ethics as a baseline, not a limit. We don’t fold under pressure,
                        compromise our values, or let anything stand between us and what’s right for our clients. We play clean, but we play to win.
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
                            <span>054 012 5722</span>
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
                    src={aboutmob}
                    alt="hero mobile background"
                    className="absolute inset-0 w-full h-full object-cover"
                    variants={itemVariants}
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute inset-0 flex flex-col px-6 space-y-6 mt-[120px]">
                    <motion.h1
                        className="font-garamond font-normal leading-snug text-white text-3xl sm:text-4xl"
                        variants={itemVariants}
                    >
                        <span className="font-garamond font-semibold text-[#7E1835] text-[60px]">
                            T
                        </span>
                        <span className='font-garamond'>rusted. Experienced. Leading.</span>
                    </motion.h1>

                    <motion.p
                        className="text-white text-sm sm:text-base leading-relaxed"
                        variants={itemVariants}
                    >
                        At Kwame Akuffo, we take the Ghana Bar Association’s Code of Ethics as a baseline, not a limit. We don’t fold under pressure,
                        compromise our values, or let anything stand between us and what’s right for our clients. We play clean, but we play to win.
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
                                <div className="text-xs">054 012 5722</div>
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
        </div>
    )
}

export default AboutHero