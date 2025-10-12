/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import teambg from "../assets/home/teambg.png"
import { Link } from 'react-router-dom'
import { Scale } from 'lucide-react'
import Team from '../Components/homesection/Team'


const MainTeam = () => {
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
                    src={teambg}
                    alt="team background"
                    className="lg:h-full md:h-[722px] w-full object-cover"
                    variants={itemVariants}
                />

                <motion.div
                    className="absolute top-[211px] left-12 4xl:left-32 md:w-[561px] lg:w-[690px] h-[210px] flex flex-col justify-between"
                    variants={itemVariants}
                >
                    <span className="font-garamond font-normal leading-[70px] tracking-[-4%]">
                        <motion.span
                            className="font-garamond font-semibold leading-[70px] tracking-[-4%] text-[102px] text-[#7E1835]"
                            variants={itemVariants}
                        >
                            M
                        </motion.span>
                        <motion.span
                            className="font-garamond font-normal leading-[70px] tracking-[-4%] text-[60px] text-white"
                            variants={itemVariants}
                        >
                            eet the Team Behind the Briefs
                        </motion.span>
                    </span>

                    <motion.span
                        className="w-[535px] text-[12px] leading-5 font-normal text-white"
                        variants={itemVariants}
                    >
                        Our leadership brings together decades of experience, courtroom strength, and a commitment to delivering results that stand the test of time.
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
                    src={teambg}
                    alt="team mobile background"
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
                            M
                        </span>
                        <span className='font-garamond'> eet the Team Behind the Briefs</span>
                    </motion.h1>

                    <motion.p
                        className="text-white text-sm sm:text-base leading-relaxed"
                        variants={itemVariants}
                    >
                        Our leadership brings together decades of experience, courtroom strength, and a commitment to delivering results that stand the test of time.
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

            <main className=" bg-gray-50 flex items-center justify-center md:p-8 p-4 4xl:p-32">
                <div className=" mx-auto">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        {/* Scales of Justice Icon */}
                        <motion.div
                            className="md:w-1/3 flex pl-8 md:pl-0"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Scale className="w-[244px] h-[244px] text-[#7E1835]/40" strokeWidth={1.5} />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            className="md:w-2/3 space-y-6"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {/* Introduction Label */}
                            <motion.div
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-2 h-2 bg-[#7E1835] rounded-full"></div>
                                <span className="text-[#7E1835] text-sm font-medium tracking-wider uppercase">Introduction</span>
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h1
                                className="text-xl md:text-[28px] md:leading-[54px] leading-[28px] text-[#222933] font-medium font-outfit"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                viewport={{ once: true }}
                            >
                                At Kwame Akuffo & Co. Unlimited, our strength lies in our people. Our partners bring together  <span className="text-[#7E1835] font-medium font-outfit">decades of combined legal experience,</span>{" "}
                                a deep understanding of the law, and a track record of {" "}
                                <span className="text-[#7E1835] font-medium font-outfit">results across corporate, civil, and criminal matters.</span>
                            </motion.h1>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Team />
        </div>
    )
}

export default MainTeam