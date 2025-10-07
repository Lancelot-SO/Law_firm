/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import practicalbg from "../assets/practical/practicalbg.png"
import practice from "../assets/practical/practice.png"


import { Link } from 'react-router-dom'
import Practices from '../Components/Practices'



const PracticalArea = () => {

    const [open, setOpen] = useState({
        litigation: true,
        diligence: true,
    });

    const toggleSection = (key) => {
        setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
    };

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
                            C
                        </motion.span>
                        <motion.span
                            className="font-garamond font-normal leading-[70px] tracking-[-4%] text-[60px] text-white"
                            variants={itemVariants}
                        >
                            <span className='font-garamond'>lear. Strategic. Focused Legal Solutions.</span>
                        </motion.span>
                    </span>

                    <motion.span
                        className="w-[535px] text-[12px] leading-5 font-normal text-white"
                        variants={itemVariants}
                    >
                        At Kwame Akuffo & Co., we offer a full spectrum of legal services tailored to meet the complex needs of businesses, institutions, and individuals. With deep sector knowledge and a client-first mindset, we deliver solutions that are not only sound in law but commercially practical.                        </motion.span>

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
                            C
                        </span>
                        <span className='font-garamond'>lear. Strategic. Focused Legal Solutions.</span>
                    </motion.h1>

                    <motion.p
                        className="text-white text-sm sm:text-base leading-relaxed"
                        variants={itemVariants}
                    >
                        At Kwame Akuffo & Co., we offer a full spectrum of legal services tailored to meet the complex needs of businesses, institutions, and individuals. With deep sector knowledge and a client-first mindset, we deliver solutions that are not only sound in law but commercially practical.                    </motion.p>

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

            <section className="relative px-4 lg:px-12 4xl:px-32 py-16 lg:py-24">
                <div className="">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex lg:items-center flex-col md:flex-row lg:gap-20 gap-8">
                            <div className="flex items-center">
                                <span className="mr-3 h-2 w-2 rounded-full bg-[#7E1835]" />
                                <span className="text-sm font-garamond font-medium uppercase tracking-wider text-[#7E1835]">
                                    INTRODUCTION
                                </span>
                            </div>
                            <div className="">
                                <img
                                    src={practice}
                                    alt="Law library with vintage books"
                                    className="shadow-lg w-full"
                                />
                            </div>
                        </div>
                        <div className="text-gray-600 md:w-[400px] lg:w-[800px]">
                            <h1 className="text-[20px] lg:text-[32px] font-bold font-garamond md:leading-[48px] leading-[24px] mb-8 w-full">
                                Whether you're navigating regulatory frameworks, resolving disputes, or entering into strategic partnerships, our team is equipped to guide you every step of the way.
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-4 bg-[#F2E8EB]">
                <Practices />
            </section>



        </div>
    )
}

export default PracticalArea