import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                console.warn("No token found.");
                setError("No token found");
                return;
            } 
            setLoading(true)

            try {
                const res = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                })
                const result = await res.json()
                if(!res.ok){
                    throw new Error(result.message + '🤢' || 'Error fetching data')
                }
                setData(result.data || [])
                setLoading(false)

            } catch (error) {
                setError(error.message)
            }
        }
        fetchData()
    } , [url]) 

    return {
        data, loading, error
    };
};

export default useFetchData;