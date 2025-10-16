import { useEffect, useState } from "react";

export default function useCaseStudies() {
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://ka-cms.interactivedigital.com.gh/api/case-studies");
                if (!response.ok) throw new Error("Failed to load case studies");
                const data = await response.json();
                setCases(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return { cases, loading, error };
}
