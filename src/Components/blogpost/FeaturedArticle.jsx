/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FeaturedArticle({ post }) {
    return (
        <div className="mb-8 border-2 border-blue-400 border-dashed rounded-lg overflow-hidden">
            <div className="flex">
                <div className="w-72 h-64">
                    <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover rounded-l-lg"
                    />
                </div>
                <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <span className="text-red-600 font-medium">{post.category}</span>
                        <span>|</span>
                        <span>{post.date}</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.id}`} className="text-red-600 p-0 h-auto font-medium underline hover:text-red-700">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}
FeaturedArticle.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string,
        title: PropTypes.string.isRequired,
        category: PropTypes.string,
        date: PropTypes.string,
        excerpt: PropTypes.string,
    }).isRequired,
};

export default FeaturedArticle;
