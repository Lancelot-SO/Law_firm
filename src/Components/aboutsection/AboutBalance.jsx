/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"

export default function AboutBalance() {
    // Variants for staggered animation
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }

    return (
        <div className="bg-white py-12 px-4 lg:px-12 4xl:px-32">
            <div className="mx-auto">
                {/* DUTIES label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="text-sm font-medium text-[#7E1835] tracking-wider">● DUTIES</span>
                </motion.div>

                {/* Main heading */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-3xl md:text-5xl font-light text-gray-900">
                        Our <span className="text-[#7E1835]">Fiduciary</span> Duties
                    </h1>
                </motion.div>

                {/* Three columns with staggered animation */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {/* Column 1 */}
                    <motion.div variants={cardVariants} className="bg-gray-100 p-8 rounded-none relative overflow-hidden">
                        <div className="absolute top-4 left-4 opacity-5">
                            {/* Icon */}
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 2C13.1 2 14 2.9 14 4V5H18C18.6 5 19 5.4 19 6S18.6 7 18 7H14V8.2L20.5 11.5C21.3 11.9 21.6 12.8 21.2 13.6L19.7 16.4C19.3 17.2 18.4 17.5 17.6 17.1L12 14.2L6.4 17.1C5.6 17.5 4.7 17.2 4.3 16.4L2.8 13.6C2.4 12.8 2.7 11.9 3.5 11.5L10 8.2V7H6C5.4 7 5 6.6 5 6S5.4 5 6 5H10V4C10 2.9 10.9 2 12 2ZM7 13L4.5 14.5L5.5 16L8 14.5L7 13ZM17 13L16 14.5L18.5 16L19.5 14.5L17 13Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <h2 className="text-xl font-medium text-[#7E1835] mb-6 leading-tight relative z-10">
                            Fierce Advocacy. Unwavering Integrity.
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed relative z-10">
                            We are committed to fearlessly championing our clients' best interests — with bold strategy, sharp legal insight, and unshakable ethics. Every case we handle is approached with passion, precision, and a relentless pursuit of justice. From complex legal battles to everyday representation, we protect your rights with courage, clarity, and lawful excellence. You can count on us to stand by you with integrity, strength, and unwavering dedication at every turn.
                        </p>
                    </motion.div>

                    {/* Column 2 */}
                    <motion.div variants={cardVariants} className="bg-gray-100 p-8 rounded-none relative overflow-hidden">
                        <div className="absolute top-4 right-4 opacity-5">
                            {/* Icon */}
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1ZM12 7C10.9 7 10 7.9 10 9S10.9 11 12 11 14 10.1 14 9 13.1 7 12 7ZM18 17H6V15.5C6 13.56 9.97 12.5 12 12.5S18 13.56 18 15.5V17Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <h2 className="text-xl font-medium text-[#7E1835] mb-6 leading-tight relative z-10">
                            Trusted. Confidential. Able. Principled.
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed relative z-10">
                            We uphold the highest standards of confidentiality, ensuring that every detail you share remains protected with absolute discretion and legal precision. Your trust is our priority — we safeguard your personal and professional information with unwavering integrity, ethical responsibility, and a deep commitment to privacy. In every matter we handle, your peace of mind is paramount.
                        </p>
                    </motion.div>

                    {/* Column 3 */}
                    <motion.div variants={cardVariants} className="bg-gray-100 p-8 rounded-none relative overflow-hidden">
                        <div className="absolute top-4 right-4 opacity-5">
                            {/* Icon */}
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21ZM17 12H10V14H17V12ZM17 16H10V18H17V16ZM17 8H10V10H17V8Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <h2 className="text-xl font-medium text-[#7E1835] mb-6 leading-tight relative z-10">
                            Skilled Representation. Honest Counsel.
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed relative z-10">
                            We act with expert competence and uphold our professional independence, ensuring every decision is made with your best interest at heart — free from outside influence.
                            At the same time, we prioritize transparency by keeping you fully informed of costs, timelines, and the potential impact of each step, so you can make confident, well-informed decisions throughout your legal journey.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
