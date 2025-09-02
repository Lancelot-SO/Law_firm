/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import blockbg from "../../assets/home/blockbg.png"
import { Link } from "react-router-dom";
import blog1 from "../../assets/home/teambg.png"

const blogPosts = [
    {
        id: 1,
        title: "Prevent A Further Breach of The Peace In The States",
        image: blog1,
        category: "Legal Advice",
        date: "Sunday, July 24, 2022",
        excerpt:
            "There are of Lorem Ipsum available, but majority have an alteration in some form, by injected or which don't look even slightly believable.",
        link: "/blog/prevent-breach-peace-states",
    },
    {
        id: 2,
        title:
            "The Importance Of Consistency In The Application Of The Principles Of Law",
        image: blog1,
        category: "Legal Advice",
        date: "Sunday, July 24, 2022",
        excerpt:
            "The importance of consistency in the application of the principles of law is necessary so inconsistency fails to undermine the coherence of the law and generates a mass of disparate special rules...",
        link: "/blog/importance-consistency-law-principles",
    },
    {
        id: 3,
        title: "The Contract - 1960 (Act 25) Has Seen A Recent Amendment.",
        image: blog1,
        category: "Legal Advice",
        date: "Sunday, July 24, 2022",
        excerpt:
            "Section 7 of Act 25 has been amended by the Contract (Amendment) Act, 2022 - Act 1138. The Amendment addresses the category of persons who have capacity to contract...",
        link: "/blog/contract-act-1960-amendment",
    },
];

export default function BlogPage() {
    return (
        <div className=" bg-[#7E1835]">
            {/* Hero Section */}
            <section className="relative px-4 lg:px-12 4xl:px-32 py-16 lg:py-24">
                <div className="lg:max-w-8xl">
                    <div className="flex flex-col lg:flex-row gap-16  items-center">
                        <div className="flex lg:items-center flex-col lg:flex-row lg:gap-20 gap-8">
                            <div className="flex items-center">
                                <span className="mr-3 h-2 w-2 rounded-full bg-white" />
                                <span className="text-sm font-garamond font-medium uppercase tracking-wider text-white">
                                    BLOG
                                </span>
                            </div>
                            <div className="">
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={post.link}
                                className="p-4 group block bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Image */}
                                <div className="h-48 w-full overflow-hidden mb-4">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-medium text-[#7E1835]">
                                            {post.category}
                                        </span>
                                        <div className="w-[1px] h-[12px] bg-[#7E1835]" />
                                        <span className="text-sm text-[#7E1835]">{post.date}</span>
                                    </div>

                                    <hr className="border-black my-2" />

                                    <h3 className="text-lg font-bold font-garamond text-gray-900 mb-2 group-hover:text-[#7E1835] transition-colors leading-snug">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <span className="text-[#7E1835] font-semibold text-sm mt-auto group-hover:underline">
                                        Read More →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}