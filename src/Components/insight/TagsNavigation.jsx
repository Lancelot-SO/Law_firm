/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { Search } from "lucide-react"
import blockbg from "../../assets/home/blockbg.png"
import LegalBlogPage from "../blogpost/LegalBlogPage"

const tags = [
    "ALL",
    "BANKRUPTCY",
    "WORLD",
    "JUSTICE LAW",
    "LAND LAW",
    "POLITICAL INDEPENDENCE",
    "LAW RESOURCES",
]

export default function TagsNavigation() {
    const [activeTag, setActiveTag] = useState("ALL")
    const [searchQuery, setSearchQuery] = useState("")
    const [showMobileSearch, setShowMobileSearch] = useState(false)

    return (
        <div>
            <div className="w-full border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Tags Navigation */}
                    <nav className="flex items-center md:space-x-8 space-x-4 w-[300px] overflow-x-auto scrollbar-hide md:overflow-visible md:flex-nowrap">
                        {tags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(tag)}
                                className={`relative pb-4 text-sm font-medium whitespace-nowrap transition-colors hover:text-gray-900 ${activeTag === tag ? "text-gray-900" : "text-gray-500"
                                    }`}
                            >
                                {tag}
                                {activeTag === tag && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
                                )}
                            </button>
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
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="SEARCH"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onBlur={() => setShowMobileSearch(false)}
                                    className="w-72 transition-all duration-300 pl-3 pr-4 py-2 text-sm border border-gray-300 focus:border-gray-400 focus:outline-none rounded"
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

            <section className="relative px-4 lg:px-12 4xl:px-32 py-16 lg:py-24">
                <div className="lg:max-w-8xl">
                    <div className="flex flex-col lg:flex-row gap-16  items-center">
                        <div className="flex lg:items-center flex-col lg:flex-row lg:gap-20 gap-8">
                            <div className="flex items-center">
                                <span className="mr-3 h-2 w-2 rounded-full bg-[#7E1835]" />
                                <span className="text-sm font-garamond font-medium uppercase tracking-wider text-[#7E1835]">
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
                        <div className="text-gray-600 lg:w-[800px]">
                            <h1 className="text-[20px] lg:text-[32px] font-bold font-garamond md:leading-[48px] leading-[24px] mb-8 w-full">
                                We've Got The Experience, We Know The Terrain, And We Do A Hell Of A Job To Get You Favourable Results.
                            </h1>
                            {/* <button
                                className="bg-white text-[#7E1835] hover:bg-gray-100 font-semibold px-8 py-3 rounded-md transition-colors"
                                type="button"
                                onClick={() => (window.location.href = "/blog")}
                            >
                                Read More
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <LegalBlogPage />
            </section>
        </div>
    )
}
