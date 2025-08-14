/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import blockbg from "../../assets/home/blockbg.png"

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#7E1835]">
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
                            <h1 className="text-[20px] lg:text-[32px] font-bold font-garamond leading-[48px] mb-8 w-full">
                                We've Got The Experience, We Know The Terrain, And We Do A Hell Of A Job To Get You Favourable Results.
                            </h1>
                            <button
                                className="bg-white text-[#7E1835] hover:bg-gray-100 font-semibold px-8 py-3 rounded-md transition-colors"
                                type="button"
                                onClick={() => (window.location.href = "/blog")}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="px-4 lg:px-12 4xl:px-32 pb-16">
                <div className=" mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Blog Post 1 */}
                        <a href="/blog/prevent-breach-peace-states" className="h-full block">
                            <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer hover:scale-105 h-full min-h-[500px] rounded-lg p-4">
                                <div className="relative">
                                    <img
                                        src="/placeholder.svg?height=250&width=400"
                                        alt="Classical courthouse columns"
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border text-[#7E1835] border-[#7E1835]">
                                            Legal Advice
                                        </span>
                                        <span className="text-sm text-gray-500">Sunday, July 24, 2022</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                        Prevent A Further Breach of The Peace In The States
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                                        There are of Lorem Ipsum available, but majority have an alteration in some form, by injected or
                                        which don't look even slightly believable.
                                    </p>
                                    <span className="text-[#7E1835] font-semibold text-sm hover:text-[#7E1835] transition-colors self-start">
                                        Read More
                                    </span>
                                </div>
                            </div>
                        </a>

                        {/* Blog Post 2 */}
                        <a href="/blog/importance-consistency-law-principles" className="h-full block">
                            <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer hover:scale-105 h-full min-h-[500px] rounded-lg p-4">
                                <div className="relative">
                                    <img
                                        src="/placeholder.svg?height=250&width=400"
                                        alt="Law books on shelves"
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border text-[#7E1835] border-[#7E1835]">
                                            Legal Advice
                                        </span>
                                        <span className="text-sm text-gray-500">Sunday, July 24, 2022</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                        The Importance Of Consistency In The Application Of The Principles Of Law
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                                        The importance of consistency in the application of the principles of law is necessary so
                                        inconsistency fails to undermine the coherence of the law and generates a mass of disparate special
                                        rules...
                                    </p>
                                    <span className="text-[#7E1835] font-semibold text-sm hover:text-[#7E1835] transition-colors self-start">
                                        Read More
                                    </span>
                                </div>
                            </div>
                        </a>

                        {/* Blog Post 3 */}
                        <a href="/blog/contract-act-1960-amendment" className="h-full block">
                            <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer hover:scale-105 h-full min-h-[500px] rounded-lg p-4">
                                <div className="relative">
                                    <img
                                        src="/placeholder.svg?height=250&width=400"
                                        alt="Ornate library interior"
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border text-red-800 border-red-800">
                                            Legal Advice
                                        </span>
                                        <span className="text-sm text-gray-500">Sunday, July 24, 2022</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                        The Contract - 1960 (Act 25) Has Seen A Recent Amendment.
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                                        Section 7 of Act 25 has been amended by the Contract (Amendment) Act, 2022 - Act 1138. The Amendment
                                        addresses the category of persons who have capacity to contract...
                                    </p>
                                    <span className="text-red-800 font-semibold text-sm hover:text-[#7E1835] transition-colors self-start">
                                        Read More
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
