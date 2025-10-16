/* eslint-disable react/no-unescaped-entities */
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaPhoneAlt } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import casebg from "../../assets/case/casebg.png"
// import ReactMarkdown from "react-markdown"
import useCaseStudies from "../../hooks/useCaseStudies"

export default function CaseBlogDetails() {
    const { id } = useParams()
    const { cases, loading, error } = useCaseStudies()

    // Helper to format tag/category name
    const formatTagName = (name) => {
        if (!name) return "";
        return name
            .replace(/_/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    };

    const post = cases.find((item) => item.id === parseInt(id))

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    if (loading) {
        return <p className="text-center text-gray-500 py-12">Loading case study...</p>
    }

    if (error) {
        return <p className="text-center text-red-500 py-12">{error}</p>
    }

    if (!post) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-2xl font-bold text-[#7E1835]">
                    Case study not found
                </h2>
                <Link to="/case" className="text-blue-600 underline">
                    Back to Case Studies
                </Link>
            </div>
        )
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
                    src={casebg}
                    alt="case background"
                    className="lg:h-full md:h-[772px] w-full object-cover"
                    variants={itemVariants}
                />

                <motion.div
                    className="absolute top-[211px] md:top-[181px] left-12 4xl:left-32 md:w-[561px] lg:w-[791px] h-[310px] flex flex-col justify-between"
                    variants={itemVariants}
                >
                    <span className="font-garamond font-normal leading-[70px] tracking-[-4%]">
                        <motion.span
                            className="font-garamond font-semibold leading-[70px] tracking-[-4%] text-[102px] text-[#7E1835]"
                            variants={itemVariants}
                        >
                            C
                        </motion.span>
                        <motion.span
                            className="font-garamond font-normal leading-[70px] tracking-[-4%] text-[60px] text-white"
                            variants={itemVariants}
                        >
                            <span className="font-garamond">
                                ase Studies: Legal Strategy in Action.
                            </span>
                        </motion.span>
                    </span>

                    <motion.span
                        className="w-[535px] text-[12px] leading-5 font-normal text-white"
                        variants={itemVariants}
                    >
                        At Kwame Akuffo & Co., our work speaks through results. These case studies showcase how we've helped clients overcome complex legal challenges with clarity, precision, and strategic insight.
                    </motion.span>
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
                    src={casebg}
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
                        <span className="font-garamond">
                            ase Studies: Legal Strategy in Action.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-white text-sm sm:text-base leading-relaxed"
                        variants={itemVariants}
                    >
                        At Kwame Akuffo & Co., our work speaks through results. These case studies showcase how we've helped clients overcome complex legal challenges with clarity, precision, and strategic insight.
                    </motion.p>

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

            {/* Main Content Area */}
            <section className="px-4 lg:px-12 4xl:px-32 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left: Article Content */}
                <motion.div
                    className="lg:col-span-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Featured Image (Placeholder since API has no image field) */}
                    <motion.img
                        src={"/case-placeholder.png"}
                        alt={post.title}
                        className="w-full h-96 object-cover rounded-lg mb-8"
                        variants={itemVariants}
                    />

                    {/* Title & Date */}
                    <motion.h1
                        className="text-3xl font-bold text-[#7E1835] mb-4"
                        variants={itemVariants}
                    >
                        {post.title}
                    </motion.h1>
                    <motion.p
                        className="text-sm text-gray-500 mb-8"
                        variants={itemVariants}
                    >
                        {post.published_on} • {formatTagName(post.category)}
                    </motion.p>

                    {/* Case Content */}
                    <motion.div
                        className="prose max-w-none text-gray-700 leading-relaxed"
                        variants={itemVariants}
                        dangerouslySetInnerHTML={{ __html: post.body }}
                    />

                </motion.div>

                {/* Right: Sidebar */}
                <aside className="lg:col-span-1 space-y-8">
                    {/* Newsletter */}
                    <div className="border p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-[#7E1835] mb-4">
                            Newsletter
                        </h3>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border px-3 py-2 mb-3 rounded outline-none focus:ring-2 focus:ring-[#7E1835]"
                        />
                        <button className="w-full bg-[#7E1835] text-white py-2 rounded">
                            Subscribe
                        </button>
                    </div>

                    {/* Latest Case Studies */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#7E1835] mb-6">
                            Latest Case Studies
                        </h3>

                        <div className="space-y-5">
                            {cases.slice(0, 3).map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Link
                                        to={`/case/${item.id}`}
                                        className="block relative group overflow-hidden shadow-md hover:shadow-lg transition"
                                    >
                                        {/* Background Image Placeholder */}
                                        <img
                                            src={"/case-placeholder.png"}
                                            alt={item.title}
                                            className="w-full h-40 md:h-[300px] lg:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Text */}
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <p className="text-white text-sm sm:text-base font-semibold mb-1">
                                                {item.title}
                                            </p>
                                            <motion.span
                                                whileHover={{ x: 4 }}
                                                className="text-white/90 text-xs sm:text-sm font-medium inline-flex items-center gap-1"
                                            >
                                                Read More →
                                            </motion.span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </aside>
            </section>
        </div>
    )
}
