/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import mallet from "../../assets/about/mallet1.png";
import shelf from "../../assets/about/shelf.png";

const NextAbout = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32">
                {/* Left Section */}
                <motion.div
                    className="lg:w-1/3 w-full h-full py-10"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img
                        src={mallet}
                        alt="mallet"
                        loading="lazy"
                        className="w-full lg:w-[358px] object-cover"
                    />
                    <motion.div
                        className="py-4 lg:w-[358px] w-full h-auto text-[#7E1835]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <span>
                            We achieve this by providing the highest standards of legal services to our Clients by putting them at the center of all we do; paying particular
                            attention to the details of Clients’ business with the understanding that no two Clients are the same.
                        </span>
                    </motion.div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="lg:py-12 lg:w-2/3 w-full h-full"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <img
                        src={shelf}
                        alt="shelf"
                        loading="lazy"
                        className="w-full lg:h-[759px] object-cover"
                    />

                    <motion.div
                        className="py-4 h-auto w-full text-[14px] text-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        <span>
                            We place emphasis on consulting and advising clients with a commercial but realistic approach. Above all, our culture, the standard of work we provide to our clients,
                            and what we believe in, is driven by our business ethos: Quality with clarity, Unity, Integrity. Our vision is to provide “More Than Law” through our business principles of Quality with Care,
                            Unity and Integrity. At Kwame Akuffo & Co. we apply our business principles to all we do. More Than Law is intricately woven into the fabric of our culture and personality be it amongst ourselves or when working with third parties,
                            it is clear in how we work and what we stand for. Kwame Akuffo & Co, is an indigenous law firm with a clear vision for the future.
                        </span>

                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default NextAbout;
