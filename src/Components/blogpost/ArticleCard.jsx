/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

export default function ArticleCard({ post }) {
    if (post.type === "gradient") {
        return (
            <div className="border-2 border-blue-400 border-dashed rounded-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-purple-800 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center gap-2 text-xs mb-2">
                            <span>{post.category}</span>
                            <span>|</span>
                            <span>{post.date}</span>
                        </div>
                        <h3 className="text-sm font-bold leading-tight">{post.title}</h3>
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="text-red-600 text-xs font-medium underline hover:text-red-700">
                        Read More
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="border-2 border-blue-400 border-dashed rounded-lg overflow-hidden">
            <div className="h-48">
                <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                    <span className="text-red-600 font-medium">{post.category}</span>
                    <span>|</span>
                    <span>{post.date}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-red-600 text-xs font-medium underline hover:text-red-700">
                    Read More
                </Link>
            </div>
        </div>
    )
}

ArticleCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        date: PropTypes.string,
        title: PropTypes.string,
        excerpt: PropTypes.string,
        image: PropTypes.string,
    }).isRequired,
};
