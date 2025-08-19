/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { Search } from "lucide-react"
import { caseTags } from "../../case"
import caseImg from "../../assets/case/case.png"
import CaseBlog from "./CaseBlog"
import { motion } from "framer-motion";

export default function CaseTags() {
    const [activeTag, setActiveTag] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [showMobileSearch, setShowMobileSearch] = useState(false)

    return (
        <div>
            <div className="w-full border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between px-4 lg:px-12 4xl:px-32 py-4">
                    {/* Tags Navigation */}
                    <nav className="flex items-center md:space-x-8 space-x-4 w-[300px] overflow-x-auto scrollbar-hide md:overflow-visible md:flex-nowrap">
                        {caseTags.map((tag, i) => (
                            <motion.button
                                key={tag.id}
                                onClick={() => setActiveTag(tag.id)}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className={`relative pb-4 text-sm font-medium font-garamond whitespace-nowrap transition-colors hover:text-gray-900 ${activeTag === tag.id ? "text-gray-900" : "text-gray-500"}`}
                            >
                                {tag.name}
                                {activeTag === tag.id && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7E1835]"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </nav>

                    {/* Search */}
                    <div className="relative flex items-center">
                        {/* Mobile Search */}
                        <div className="md:hidden flex items-center relative">
                            {!showMobileSearch && (
                                <Search
                                    onClick={() => setShowMobileSearch(true)}
                                    className="h-5 w-5 text-gray-500 cursor-pointer"
                                />
                            )}
                            {showMobileSearch && (
                                <motion.input
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "18rem", opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    autoFocus
                                    type="text"
                                    placeholder="SEARCH"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onBlur={() => setShowMobileSearch(false)}
                                    className="transition-all duration-300 pl-3 pr-4 py-2 text-sm border border-gray-300 focus:border-gray-400 focus:outline-none rounded"
                                />
                            )}
                        </div>

                        {/* Desktop Search */}
                        <div className="hidden md:block relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="SEARCH"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 focus:border-gray-400 focus:outline-none rounded"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner / Hero */}
            <section className="relative px-4 lg:px-12 4xl:px-32 py-8 lg:py-16">
                <div className="mx-auto">
                    {/* Header */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-[#7E1835] rounded-full"></div>
                            <span className="text-sm font-medium font-garamond text-gray-600 uppercase tracking-wider">
                                FEATURED CASE STUDY
                            </span>
                        </div>
                    </motion.div>

                    {/* Case Studies Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[ // Dummy Featured Section
                            {
                                title: "Securing A Landmark Win In A High-Stakes Commercial Dispute",
                                desc: "Our client, a leading multinational, faced a $5 million breach of contract suit. We successfully had the case dismissed, preserving their business and reputation.",
                                button: "Read Full Case Study"
                            },
                            {
                                title: "Navigating A Complex Land Acquisition For Infrastructure Development",
                                desc: "Represented a real estate developer through a multi-million dollar land acquisition, ensuring full compliance with zoning, land-fills, and local authority regulations.",
                                button: "Read More"
                            }
                        ].map((caseStudy, i) => (
                            <motion.div
                                key={i}
                                className="relative h-[255px] sm:h-[300px] md:h-[255px] overflow-hidden group cursor-pointer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${caseImg})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#7E1835]/70 to-[#7E1835]/60" />

                                <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between text-white">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-serif leading-tight mb-3 sm:mb-4">
                                            {caseStudy.title}
                                        </h3>
                                        <p className="text-red-100 text-sm sm:text-base leading-relaxed">
                                            {caseStudy.desc}
                                        </p>
                                    </div>

                                    <div className="mt-4 sm:mt-6">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="text-white hover:text-red-200 transition-colors font-medium text-sm sm:text-base"
                                        >
                                            {caseStudy.button}
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pass filters into CaseBlog */}
            <CaseBlog activeTag={activeTag} searchQuery={searchQuery} />
        </div>
    )
}
