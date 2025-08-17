/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

// Example data (replace with API or context later)
const blogPosts = [
    {
        id: 1,
        title: "Understanding React State",
        content: "React state lets you create interactive components...",
        image: "https://via.placeholder.com/600x300",
    },
    {
        id: 2,
        title: "Learning Tailwind CSS",
        content: "Tailwind is a utility-first CSS framework...",
        image: "https://via.placeholder.com/600x300",
    },
    {
        id: 3,
        title: "JavaScript ES6 Features",
        content: "ES6 introduced many powerful features like arrow functions...",
        image: "https://via.placeholder.com/600x300",
    },
];

const BlogDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find((p) => String(p.id) === id);

    if (!post) {
        return <h2 className="text-center text-xl font-bold mt-10">Post not found</h2>;
    }

    // Sidebar should exclude the current post
    const sidebarPosts = blogPosts.filter((p) => String(p.id) !== id);

    return (
        <div className="max-w-6xl mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Blog Content */}
            <div className="md:col-span-2">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded mb-4"
                />
                <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-700 leading-relaxed">{post.content}</p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">More Articles</h3>
                {sidebarPosts.map((item) => (
                    <Sidebar key={item.id} post={item} />
                ))}
            </aside>
        </div>
    );
};

export default BlogDetail;
