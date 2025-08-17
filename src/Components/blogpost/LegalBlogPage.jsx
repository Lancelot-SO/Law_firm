/* eslint-disable no-unused-vars */
import React from "react"
import { ChevronLeft, ChevronRight, Mail } from "lucide-react"
import FeaturedArticle from "./FeaturedArticle"
import ArticleCard from "./ArticleCard"
import Sidebar from "./Sidebar"



// Mock data functions (replace with real data or API)
const getFeaturedPost = () => ({
    id: 1,
    title: "Featured Post",
    image: "/placeholder.svg",
    description: "This is a sample featured post.",
})

const getRegularPosts = (count) =>
    Array.from({ length: count }).map((_, i) => ({
        id: i + 2,
        title: `Regular Post ${i + 1}`,
        image: "/placeholder.svg",
    }))

const getLatestPosts = (count) =>
    Array.from({ length: count }).map((_, i) => ({
        id: i + 100,
        title: `Latest Post ${i + 1}`,
        image: "/placeholder.svg",
    }))

const getPopularPosts = (count) =>
    Array.from({ length: count }).map((_, i) => ({
        id: i + 200,
        title: `Popular Post ${i + 1}`,
        image: "/placeholder.svg",
    }))

export default function LegalBlogPage() {
    const featuredPost = getFeaturedPost()
    const regularPosts = getRegularPosts(3)
    const latestPosts = getLatestPosts(3)
    const popularPosts = getPopularPosts(2)

    return (
        <div className="min-h-screen bg-gray-50">
            <section>
                <div className="flex px-4 lg:px-12 4xl:px-32 bg-white">
                    {/* Main Content Area */}
                    <div className="w-[886px] bg-white">
                        {featuredPost && <FeaturedArticle post={featuredPost} />}

                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {regularPosts.map((post) => (
                                <ArticleCard key={post.id} post={post} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-between py-6">
                            <button className="flex items-center gap-2 text-gray-600">
                                <ChevronLeft className="w-4 h-4" />
                                Prev
                            </button>

                            <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <button
                                        key={num}
                                        className={`w-8 h-8 p-0 font-medium ${num === 1 ? "text-red-600" : "text-gray-600"
                                            }`}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>

                            <button className="flex items-center gap-2 text-gray-600">
                                Next
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-[489px] bg-gray-50 p-6">
                        {/* Newsletter Section */}
                        <div className="mb-6 bg-pink-50 border border-pink-200 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Newsletter
                            </h3>
                            <div className="relative mb-4">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full pl-10 py-2 border border-gray-300 rounded bg-white"
                                />
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Latest News
                            </h3>
                            <div className="space-y-4">
                                {latestPosts.map((post, index) => (
                                    <Sidebar
                                        key={post.id}
                                        post={post}
                                        variant={index === 1 ? "featured" : "default"}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Popular News
                            </h3>
                            <div className="space-y-4">
                                {popularPosts.map((post) => (
                                    <Sidebar key={post.id} post={post} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
