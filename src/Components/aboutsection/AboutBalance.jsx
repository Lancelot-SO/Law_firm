/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
import { BookOpen, Scale } from "lucide-react"

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
                    className="grid lg:grid-cols-3 grid-cols-1 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {/* Column 1 */}
                    <motion.div variants={cardVariants} className="bg-gray-100 p-8 rounded-none relative overflow-hidden">
                        <div className="absolute top-4 left-4 opacity-5">
                            {/* Icon */}
                            <Scale className="w-[120px] h-[120px]" />
                        </div>
                        <h2 className="text-xl font-medium text-[#7E1835] lg:w-[288px] w-full mb-6 leading-tight relative z-10">
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
                            <BookOpen className="w-[120px] h-[120px]" />
                        </div>
                        <h2 className="text-xl font-medium text-[#7E1835] lg:w-[288px] w-full mb-6 leading-tight relative z-10">
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
                            <BookOpen className="w-[120px] h-[120px]" />
                        </div>
                        <h2 className="text-xl font-medium text-[#7E1835] lg:w-[288px] w-full mb-6 leading-tight relative z-10">
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
