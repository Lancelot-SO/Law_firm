/* eslint-disable react/no-unescaped-entities */
import { useParams, Link } from "react-router-dom"
import insightsData from "../../main.js"

export default function BlogDetails() {
    const { id } = useParams()
    const blog = insightsData.find((post) => post.id === parseInt(id))

    if (!blog) {
        return <p>Blog not found.</p>
    }

    return (
        <div className="max-w-4xl mx-auto py-12">
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-700 leading-relaxed">{blog.content}</p>

            <div className="mt-6">
                <Link to="/insights" className="text-red-600 hover:underline">
                    ← Back to Insights
                </Link>
            </div>
        </div>
    )
}
