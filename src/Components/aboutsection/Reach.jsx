/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
import books from "../../assets/about/books2.png"

export default function Reach() {
    return (
        <div className=" bg-[#ECDCE1]">
            <div className="flex flex-col md:flex-row px-4 lg:px-12 4xl:px-32 pt-4 md:pt-0">
                {/* Left side - Image */}
                <motion.div
                    className="md:w-2/5 relative flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img
                        src={books}
                        alt="Stack of legal books with a pen"
                        className="object-cover"
                        style={{ width: "454px", height: "457px" }}
                    />
                </motion.div>

                {/* Right side - Content */}
                <motion.div
                    className="md:w-3/5 flex flex-col justify-center md:px-12 py-16"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {/* Header row with title and Our Audience indicator */}
                    <motion.div
                        className="flex items-center justify-between mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-[24px] md:text-[45px] font-bold font-garamond md:leading-[54px] leading-[24px]">
                            <span className="text-gray-800">International </span>
                            <span className="text-[#7E1835]">Reach</span>
                        </h1>

                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#7E1835] rounded-full"></div>
                            <span className="text-[#7E1835] text-xs font-medium tracking-wider uppercase">Our Audience</span>
                        </div>
                    </motion.div>

                    {/* Body text */}
                    <motion.p
                        className="text-gray-700 leading-relaxed text-sm"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        We Achieve This By Providing The Highest Standards Of Legal Services To Our Clients By Putting Them At The
                        Center Of All We Do; Paying Particular Attention To The Details Of Clients' Business With The Understanding
                        That No Two Clients Are The Same. We Place Emphasis On Consulting And Advising Clients With A Commercial But
                        Realistic Approach. Above All, Our Culture, The Standard Of Work We Provide To Our Clients, And What We
                        Believe In, Is Driven By Our Business Ethos: Quality With Clarity, Unity, Integrity.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    )
}
