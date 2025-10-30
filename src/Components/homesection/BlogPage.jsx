/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import blockbg from "../../assets/home/blockbg.png"

export default function BlogPage() {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    // Fetch blogs from CMS
    useEffect(() => {
        fetch("https://ka-cms.interactivedigital.com.gh/api/blogs")
            .then((res) => res.json())
            .then((data) => {
                const parsed = Array.isArray(data) ? data : data?.data || []
                setBlogs(parsed)
                setLoading(false)
            })
            .catch((err) => {
                console.error("Error fetching blogs:", err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="bg-[#7E1835] text-white flex justify-center items-center h-screen">
                <p>Loading blog posts...</p>
            </div>
        )
    }

    return (
        <div className="bg-[#7E1835]">
            {/* Hero Section */}
            <section className="relative px-4 lg:px-12 4xl:px-32 py-16 lg:py-24">
                <div className="lg:max-w-8xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex lg:items-center flex-col lg:flex-row lg:gap-20 gap-8">
                            <div className="flex items-center">
                                <span className="mr-3 h-2 w-2 rounded-full bg-white" />
                                <span className="text-sm font-garamond font-medium uppercase tracking-wider text-white">
                                    BLOG
                                </span>
                            </div>
                            <div>
                                <img
                                    src={blockbg}
                                    alt="Law library with vintage books"
                                    className="shadow-lg w-full"
                                />
                            </div>
                        </div>
                        <div className="text-white lg:w-[800px]">
                            <h1 className="text-[20px] lg:text-[32px] font-bold font-garamond md:leading-[48px] leading-[24px] mb-8 w-full">
                                We've Got The Experience, We Know The Terrain, And We Do A Hell Of A Job To Get You Favourable Results.
                            </h1>
                            <button
                                className="bg-white text-[#7E1835] hover:bg-gray-100 font-semibold px-8 py-3 transition-colors"
                                type="button"
                                onClick={() => (window.location.href = "/insights")}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="px-4 lg:px-12 4xl:px-32 pb-16">
                <div className="mx-auto">
                    {blogs.length === 0 ? (
                        <p className="text-center text-white">No blog posts available.</p>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((post) => (
                                <Link
                                    key={post.slug}
                                    to={`/blog/${post.slug}`}
                                    className="p-4 group block bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                                >
                                    {/* Image */}
                                    <div className="h-48 w-full overflow-hidden mb-4">
                                        <img
                                            src={post.image_url || "/placeholder.jpg"}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-medium text-[#7E1835]">
                                                {(post.category || "General")
                                                    .replace("_", " ")
                                                    .toUpperCase()}
                                            </span>
                                            <div className="w-[1px] h-[12px] bg-[#7E1835]" />
                                            <span className="text-sm text-[#7E1835]">
                                                {post.published_on
                                                    ? new Date(post.published_on).toLocaleDateString("en-GB", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric"
                                                    })
                                                    : "Date unavailable"}
                                            </span>
                                        </div>

                                        <hr className="border-black my-2" />

                                        <h3 className="text-lg font-bold font-garamond text-gray-900 mb-2 group-hover:text-[#7E1835] transition-colors leading-snug">
                                            {post.title}
                                        </h3>

                                        <p
                                            className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                        />

                                        <span className="text-[#7E1835] font-semibold text-sm mt-auto group-hover:underline">
                                            Read More →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
