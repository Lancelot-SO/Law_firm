// src/data.js

export const blogPosts = [
    {
        id: "1",
        title: "The Importance Of Consistency In The Application Of The Principles Of Law",
        excerpt:
            "The importance of consistency in the application of the principles of law is necessary as inconsistency tends to undermine the coherence of the law and generates a mass of disparate special rules...",
        content: "Full article content here...",
        category: "Legal Advice",
        date: "Sunday, July 24, 2022",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sfdgf-6xLqDSKwjaWHbrLQQlRtb5xSN0UTJt.png",
        featured: true,
        type: "featured",
    },
    {
        id: "2",
        title: "Prevent A Further Breach of The Peace In The States",
        excerpt:
            "There are of Lorem Ipsum available, but majority have so alteration in some form, by injected or which don't look even slightly believable.",
        content: "Full article content here...",
        category: "Legal Advice",
        date: "Sunday, July 24, 2022",
        image: "",
        type: "gradient",
    },
    {
        id: "3",
        title: "Understanding Constitutional Rights in Modern Society",
        excerpt:
            "Constitutional rights form the foundation of our legal system, providing essential protections for citizens in an ever-evolving society.",
        content: "Full article content here...",
        category: "Constitutional Law",
        date: "Saturday, July 23, 2022",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sfdgf-6xLqDSKwjaWHbrLQQlRtb5xSN0UTJt.png",
        type: "default",
    },
    {
        id: "4",
        title: "Corporate Law Changes and Their Impact on Business",
        excerpt:
            "Recent changes in corporate legislation have significant implications for businesses of all sizes, requiring careful consideration and adaptation.",
        content: "Full article content here...",
        category: "Corporate Law",
        date: "Friday, July 22, 2022",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sfdgf-6xLqDSKwjaWHbrLQQlRtb5xSN0UTJt.png",
        type: "default",
    },
    {
        id: "5",
        title: "Family Law: Navigating Custody Disputes",
        excerpt:
            "Child custody disputes require careful legal navigation to ensure the best interests of all parties involved.",
        content: "Full article content here...",
        category: "Family Law",
        date: "Thursday, July 21, 2022",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sfdgf-6xLqDSKwjaWHbrLQQlRtb5xSN0UTJt.png",
        type: "default",
    },
    {
        id: "6",
        title: "Criminal Defense Strategies in Federal Court",
        excerpt:
            "Federal criminal cases require specialized knowledge and strategic approaches to achieve favorable outcomes.",
        content: "Full article content here...",
        category: "Criminal Law",
        date: "Wednesday, July 20, 2022",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sfdgf-6xLqDSKwjaWHbrLQQlRtb5xSN0UTJt.png",
        type: "default",
    },
    {
        id: "7",
        title: "Environmental Law and Climate Change Litigation",
        excerpt:
            "Climate change has brought new challenges and opportunities in environmental law, shaping future legal precedents.",
        content: "Full article content here...",
        category: "Environmental Law",
        date: "Tuesday, July 19, 2022",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sfdgf-6xLqDSKwjaWHbrLQQlRtb5xSN0UTJt.png",
        type: "default",
    },
]

// Utility functions
export const getLatestPosts = (limit = 3) => {
    return blogPosts.slice(1, limit + 1)
}

export const getPopularPosts = (limit = 2) => {
    return blogPosts.slice(4, 4 + limit)
}

export const getFeaturedPost = () => {
    return blogPosts.find((post) => post.featured)
}

export const getRegularPosts = (limit = 3) => {
    return blogPosts.filter((post) => !post.featured).slice(0, limit)
}
