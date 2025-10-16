import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import useCaseStudies from "../../hooks/useCaseStudies"

export default function CaseBlog({ activeTag, searchQuery }) {
    const { cases, loading, error } = useCaseStudies()

    if (loading) return <p className="text-center text-gray-500 py-12">Loading case studies...</p>
    if (error) return <p className="text-center text-red-500">{error}</p>

    // Filtering logic (based on your design)
    const filteredPosts = cases.filter((post) => {
        const matchesTag = activeTag === "all" || post.category.toLowerCase() === activeTag.toLowerCase()
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesTag && matchesSearch
    })

    return (
        <section className="px-4 lg:px-12 4xl:px-32 py-12">
            {/* Section Header */}
            <motion.div
                className="flex items-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="mr-3 h-2 w-2 rounded-full bg-[#7E1835]" />
                <span className="text-sm font-garamond font-medium uppercase tracking-wider text-[#7E1835]">
                    Previous Case Study
                </span>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            className="border shadow-md bg-[#F2E8EB] p-4 overflow-hidden rounded-lg cursor-pointer group relative"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, boxShadow: "0 12px 20px rgba(0,0,0,0.12)" }}
                        >
                            {/* Image Placeholder (since API doesn't send image) */}
                            <motion.div
                                className="w-full h-56 bg-[#e8dfe1] flex items-center justify-center text-[#7E1835] text-sm font-medium"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            >
                                No Image
                            </motion.div>

                            {/* Tag */}
                            <motion.div
                                className="absolute top-8 right-8 bg-white px-4 py-2 group-hover:text-[#7E1835] text-[#7E1835] font-medium font-garamond rounded-[30px]"
                            >
                                {post.category || "Uncategorized"}
                            </motion.div>

                            {/* Content */}
                            <div className="pt-6">
                                <h3 className="text-lg font-semibold text-[#7E1835] mb-3 group-hover:text-[#7E1835] transition-colors">
                                    {post.title}
                                </h3>
                                <p
                                    className="text-sm text-gray-600 mb-4 line-clamp-4"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                />
                                <Link
                                    to={`/case/${post.id}`}
                                    className="text-[#7E1835] font-medium hover:underline"
                                >
                                    Read Full Case Study
                                </Link>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p className="text-gray-500 italic">No case studies found.</p>
                )}
            </div>
        </section>
    )
}

CaseBlog.propTypes = {
    activeTag: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
}
