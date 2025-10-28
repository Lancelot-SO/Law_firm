/* eslint-disable react/no-unescaped-entities */
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaPhoneAlt } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import casebg from "../../assets/case/casebg.png"

export default function BlogDetails() {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    const [allBlogs, setAllBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Fetch single blog
        const fetchBlog = fetch(`https://ka-cms.interactivedigital.com.gh/api/blogs/${id}`).then((res) =>
            res.json()
        )
        // Fetch all blogs for sidebar
        const fetchAll = fetch(`https://ka-cms.interactivedigital.com.gh/api/blogs`).then((res) =>
            res.json()
        )

        Promise.all([fetchBlog, fetchAll])
            .then(([blogData, allData]) => {
                setBlog(blogData)
                setAllBlogs(allData)
                setLoading(false)
            })
            .catch((err) => {
                console.error("Error fetching blog:", err)
                setLoading(false)
            })
    }, [id])

    if (loading) return <p className="text-center text-gray-500 mt-10">Loading...</p>
    if (!blog) return <p className="text-center text-gray-500 mt-10">Blog not found.</p>

    // --- Latest and Popular News logic ---
    const latestNews = [...allBlogs]
        .sort((a, b) => new Date(b.published_on) - new Date(a.published_on))
        .slice(0, 3)

    const popularNews = [...allBlogs]
        .sort(() => 0.5 - Math.random()) // no 'views' field — random fallback
        .slice(0, 3)

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.3 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div>
            {/* ---------------- Desktop Hero ---------------- */}
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
                            T
                        </motion.span>
                        <motion.span
                            className="font-garamond font-normal leading-[70px] tracking-[-4%] text-[60px] text-white"
                            variants={itemVariants}
                        >
                            he Legal Lens: Informed, Strategic, Sharp.
                        </motion.span>
                    </span>

                    <motion.span
                        className="w-[535px] text-[12px] leading-5 font-normal text-white"
                        variants={itemVariants}
                    >
                        At Kwame Akuffo & Co., our work speaks through results. These case studies showcase how we've helped Clients overcome complex legal challenges with clarity, precision, and strategic insight.
                    </motion.span>
                </motion.div>

                <motion.div
                    className="absolute bottom-20 left-12 4xl:left-32 w-[571px] flex items-center gap-8"
                    variants={itemVariants}
                >
                    <div className="flex items-center gap-4">
                        <div className="w-[40px] h-[40px] rounded-full border border-white flex items-center justify-center text-white">
                            <FaPhoneAlt />
                        </div>
                        <div className="flex flex-col text-white">
                            <span className="underline">Call Us On:</span>
                            <span>0303966645 / 0244284702</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-[40px] h-[40px] rounded-full border border-white flex items-center justify-center text-white">
                            <IoIosMail />
                        </div>
                        <div className="flex flex-col text-white">
                            <span className="underline">Email Us:</span>
                            <span>Kwame@kbakuffo.com</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* ---------------- Mobile Hero ---------------- */}
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
                            T
                        </span>
                        <span className="font-garamond">he Legal Lens: Informed, Strategic, Sharp.</span>
                    </motion.h1>

                    <motion.p
                        className="text-white text-sm sm:text-base leading-relaxed"
                        variants={itemVariants}
                    >
                        At Kwame Akuffo & Co., our work speaks through results. These case studies showcase how we've helped Clients overcome complex legal challenges with clarity, precision, and strategic insight.
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
                                <div className="text-xs">Kwame@kbakuffo.com</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* ---------------- Main Body + Sidebar ---------------- */}
            <div className="mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Blog Content */}
                <motion.div
                    className="md:col-span-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {blog.image ? (
                        <motion.img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-96 object-cover rounded-lg mb-6"
                        />
                    ) : (
                        <div className="w-full h-64 bg-gray-100 rounded-lg mb-6 flex items-center justify-center text-gray-400 text-sm">
                            No image available
                        </div>
                    )}

                    <motion.p className="text-sm text-gray-500 mb-2">
                        {blog.published_on
                            ? new Date(blog.published_on).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })
                            : "Date unavailable"}
                    </motion.p>

                    <motion.h1 className="text-3xl font-bold mb-4">
                        {blog.title || "Untitled Blog"}
                    </motion.h1>

                    <motion.div
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{
                            __html:
                                blog.body ||
                                "<p>Content not available for this article. Please check back later.</p>"
                        }}
                    />

                    <div className="mt-6">
                        <Link to="/insights" className="text-[#7E1835] hover:underline">
                            ← Back to Insights
                        </Link>
                    </div>
                </motion.div>

                {/* Sidebar */}
                <aside className="w-full space-y-10">
                    {/* Newsletter */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold mb-3">Subscribe to Newsletter</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Get the latest updates right in your inbox.
                        </p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border rounded px-3 py-2 text-sm mb-3"
                        />
                        <button className="w-full bg-[#7E1835] text-white py-2 rounded text-sm font-medium hover:bg-[#7E1835]/80">
                            Subscribe
                        </button>
                    </div>

                    {/* Latest News */}
                    <div>
                        <h3 className="text-[#7E1835] mb-3">Latest News</h3>
                        <div className="space-y-5">
                            {latestNews.map((news) => (
                                <div key={news.id} className="flex gap-3">
                                    <img
                                        src={news.image || casebg}
                                        alt={news.title}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <div>
                                        <h4 className="text-sm font-semibold leading-snug line-clamp-2">
                                            {news.title}
                                        </h4>
                                        <Link
                                            to={`/blog/${news.id}`}
                                            className="text-[#7E1835] text-xs hover:underline"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Popular News */}
                    <div>
                        <h3 className="text-[#7E1835] mb-3">Popular News</h3>
                        <div className="space-y-5">
                            {popularNews.map((news) => (
                                <div key={news.id} className="flex gap-3">
                                    <img
                                        src={news.image || casebg}
                                        alt={news.title}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <div>
                                        <h4 className="text-sm font-semibold leading-snug line-clamp-2">
                                            {news.title}
                                        </h4>
                                        <Link
                                            to={`/blog/${news.id}`}
                                            className="text-[#7E1835] text-xs hover:underline"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
