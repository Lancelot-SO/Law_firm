
import Case from "./assets/case/case.png"

export const caseTags = [
    { id: "all", name: "ALL" },
    { id: "litigation", name: "Litgation & Publication" },
    { id: "diligence", name: "Due Diligence" },
    { id: "estate", name: "Real Estate " },
    { id: "finance", name: "Finance" },
    { id: "commercial", name: "Commercial" },
    { id: "properties", name: "Properties" },
]

// src/case/caseData.js
const caseData = [
    {
        id: 1,
        title: 'Defending a Public Official in a High-Profile Constitutional Case',
        image: Case,
        date: "February 24, 2025",
        excerpt: 'Guided an international family through the legal complexities of cross-border inheritance, resulting in an amicable settlement and clear estate division.',
        content: `In an age of digital overload, physical brand experiences still create the deepest connections`,
        tags: 'litigation',

    },
    {
        id: 2,
        title: 'Protecting Intellectual Property in a Fast-Growing Tech Startup',
        image: Case,
        date: "March 24, 2025",
        excerpt: 'Advised a tech startup on IP rights and executed a successful cease-and-desist action to stop unauthorized use of proprietary software.',
        content: `In an age of digital overload, physical brand experiences still create the deepest connections`,
        tags: 'diligence',

    },
    {
        id: 3,
        title: 'Resolving a Multi-Jurisdictional Family Estate Dispute',
        image: Case,
        date: "April 24, 2025",
        excerpt: 'Our litigation team successfully defended a public official in a case that tested the limits of constitutional interpretation and due process.',
        content: `In an age of digital overload, physical brand experiences still create the deepest connections`,
        tags: 'litigation',

    },
    {
        id: 4,
        title: 'Advising a Financial Institution on Regulatory Compliance Reform',
        image: Case,
        date: "April 25, 2025",
        excerpt: 'Took legal action against a government agency for unfair disqualification in a public tender process—leading to a reversal and fair reconsideration.',
        content: `In an age of digital overload, physical brand experiences still create the deepest connections`,
        tags: 'estate',

    },
    {
        id: 5,
        title: 'Successfully Mediating a Labour Dispute in the Energy Sector',
        image: Case,
        date: "April 26, 2025",
        excerpt: 'Represented a large energy company in resolving a union-led labour dispute, avoiding a prolonged strike and maintaining operations.',
        content: `In an age of digital overload, physical brand experiences still create the deepest connections`,
        tags: 'commercial',

    },
    {
        id: 6,
        title: 'Challenging Unfair Procurement Decisions for a Local Contractor',
        image: Case,
        date: "April 26, 2025",
        excerpt: 'Provided strategic legal advisory to a major financial institution undergoing regulatory audits, ensuring compliance and avoidance of sanctions',
        content: `In an age of digital overload, physical brand experiences still create the deepest connections`,
        tags: 'finance',

    },
];

export default caseData;