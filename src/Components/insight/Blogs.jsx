/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import insightsData from "../../main" // adjust path if needed
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export default function Blogs({ activeTag, searchQuery }) {
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 4

    const filteredPosts = insightsData.filter((post) => {
        const matchesTag =
            activeTag === "ALL" || post.tags.toLowerCase() === activeTag.toLowerCase()
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesTag && matchesSearch
    })


    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

    // For sidebar
    const latestPosts = insightsData.slice(0, 3)
    const popularPosts = [...insightsData]
        .sort((a, b) => (b.views || 0) - (a.views || 0)) // safe fallback if views missing
        .slice(0, 3)

    return (
        <div className="min-h-screen bg-[#faf7f8] p-6">
            <div className="px-4 lg:px-12 4xl:px-32 mx-auto grid lg:grid-cols-3 gap-8">
                {/* Left side (featured + grid + pagination) */}
                <div className="lg:col-span-2">
                    {/* Featured Post */}
                    {currentPosts.length > 0 && (
                        <div className="grid md:grid-cols-2 gap-6 mb-10 border-b pb-8">
                            <img
                                src={currentPosts[0].image}
                                alt={currentPosts[0].title}
                                className="w-full h-80 object-cover rounded-lg"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-sm text-[#7E1835] font-medium mb-2">
                                    {currentPosts[0].tags} | {currentPosts[0].date}
                                </p>
                                <h2 className="text-2xl font-bold mb-3">{currentPosts[0].title}</h2>
                                <p className="text-gray-600 mb-4">{currentPosts[0].excerpt}</p>
                                <Link
                                    to={`/blog/${currentPosts[0].id}`}
                                    className="text-[#7E1835] font-medium hover:underline"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Grid of 3 smaller posts */}
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        {currentPosts.slice(1).map((post) => (
                            <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <p className="text-xs text-[#7E1835] font-medium mb-1">
                                        {post.tags} | {post.date}
                                    </p>
                                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="text-[#7E1835] text-sm font-medium hover:underline"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {filteredPosts.length > postsPerPage && (
                        <div className="flex justify-center items-center mt-6 space-x-3">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((prev) => prev - 1)}
                                className="px-3 py-1 text-sm text-gray-500 disabled:opacity-50"
                            >
                                &lt; Prev
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-3 py-1 rounded ${currentPage === i + 1
                                        ? "text-[#] font-bold"
                                        : "text-gray-500"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((prev) => prev + 1)}
                                className="px-3 py-1 text-sm text-gray-500 disabled:opacity-50"
                            >
                                Next &gt;
                            </button>
                        </div>
                    )}

                    {/* No results message */}
                    {filteredPosts.length === 0 && (
                        <p className="text-center text-gray-500 mt-10">No posts found.</p>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
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

                    {/* Latest Posts */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Latest Posts</h3>
                        <ul className="space-y-4">
                            {latestPosts.map((post) => (
                                <Link to={`/blog/${post.id}`} key={post.id} className="flex flex-col items-start space-x-3">
                                    <li className="flex items-center space-x-3">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div>
                                            <h4 className="text-sm font-medium">{post.title}</h4>
                                            <p className="text-xs text-gray-500">{post.date}</p>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Posts */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
                        <ul className="space-y-4">
                            {popularPosts.map((post) => (
                                <Link to={`/blog/${post.id}`} key={post.id} className="flex flex-col items-start space-x-3">
                                    <li className="flex items-center space-x-3">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div>
                                            <h4 className="text-sm font-medium">{post.title}</h4>
                                            <p className="text-xs text-gray-500">{post.date}</p>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    )
}

Blogs.propTypes = {
    activeTag: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
}
