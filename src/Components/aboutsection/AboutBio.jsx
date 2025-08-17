/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function AboutBio() {
    return (
        <div className="border-[#7E1835] border-b-2 mb-4">
            <div className="lg:h-[235px] bg-white px-4 lg:px-12 4xl:px-32">
                <main className="py-12">
                    <div className="flex lg:flex-row flex-col lg:items-center justify-between">
                        {/* ABOUT US Section */}
                        <motion.div
                            className="flex items-center flex-shrink-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="w-2 h-2 bg-[#7E1835] rounded-full mr-3"></div>
                            <span className="text-sm font-medium text-[#7E1835] tracking-wide">
                                ABOUT US
                            </span>
                        </motion.div>

                        {/* Paragraph Section */}
                        <motion.div
                            className="lg:w-[900px] w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <p className="text-gray-700 text-[14px] leading-[30px]">
                                At Kwame Akuffo & Co, We Take Time To Understand Our Clients By Constantly Changing And Adapting To New
                                Demands And Business Trends To Adapt To The Ever-Changing Needs Of Our Clients. We Make A Conscious Effort
                                To Understand What Clients Need Today And Better Prepare Them For What They Will Need Tomorrow. We Achieve
                                This By Providing The Highest Standards Of Legal Services To Our Clients By Putting Them At The Center Of
                                All We Do; Paying Particular Attention To The Details Of Clients' Business With The Understanding That No
                                Two Clients Are The Same.
                            </p>
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    );
}
