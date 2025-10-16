import { useState } from "react";
import { Search } from "lucide-react";
import CaseBlog from "./CaseBlog";
import { motion } from "framer-motion";

const tags = [
    { id: "all", name: "ALL" },
    { id: "Litigation", name: "Litigation & Publication" },
    { id: "Diligence", name: "Due Diligence" },
    { id: "real_estate", name: "real_estate" },
    { id: "finance", name: "finance" },
    { id: "Commercial", name: "commercial" },
    { id: "Properties", name: "properties" },
];

export default function CaseTags() {
    const [activeTag, setActiveTag] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Helper to format tag name for display
    const formatTagName = (name) => {
        return name
            .replace(/_/g, " ")              // replace underscores with spaces
            .split(" ")                      // split into words
            .map((word) =>                   // capitalize each word
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ");
    };

    return (
        <div>
            {/* Top Navigation */}
            <div className="w-full border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between px-4 lg:px-12 4xl:px-32 py-4">
                    {/* Tags */}
                    <nav className="flex items-center space-x-6 overflow-x-auto scrollbar-hide">
                        {tags.map((tag) => (
                            <motion.button
                                key={tag.id}
                                onClick={() => setActiveTag(tag.id)}
                                className={`pb-2 text-sm font-medium font-garamond transition-colors ${activeTag === tag.id
                                    ? "text-[#7E1835]"
                                    : "text-gray-500"
                                    }`}
                            >
                                {formatTagName(tag.name)}
                                {activeTag === tag.id && (
                                    <motion.div
                                        layoutId="underline"
                                        className="h-0.5 bg-[#7E1835] mt-1"
                                    />
                                )}
                            </motion.button>
                        ))}
                    </nav>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="SEARCH"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#7E1835]"
                        />
                    </div>
                </div>
            </div>

            {/* Case Blog Section */}
            <CaseBlog activeTag={activeTag} searchQuery={searchQuery} />
        </div>
    );
}
