/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Sidebar = ({ post, variant = "default" }) => {
    if (variant === "featured") {
        return (
            <div className="bg-purple-700 text-white p-4 rounded-lg">
                <h4 className="text-sm font-bold mb-2">{post.title}</h4>
                <Link
                    to={`/blog/${post.id}`}
                    className="text-white text-xs font-medium underline hover:text-gray-200"
                >
                    Read More
                </Link>
            </div>
        );
    }

    return (
        <div className="flex gap-3">
            <img
                src={post.image ?? "https://via.placeholder.com/64"}
                alt={post.title}
                className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1">
                    {post.title}
                </h4>
                <Link
                    to={`/blog/${post.id}`}
                    className="text-red-600 text-xs font-medium underline hover:text-red-700"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
    }).isRequired,
    variant: PropTypes.oneOf(["default", "featured"]),
};

export default Sidebar;
