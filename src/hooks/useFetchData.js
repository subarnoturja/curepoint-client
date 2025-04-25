import { useEffect, useState } from "react";
import { token } from "../config";

const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                console.log('Response status:', res.status);
                const result = await res.json()
                if(!res.ok){
                    throw new Error(result.message + '🤢')
                }
                setData(result.data)
                setLoading(false)

            } catch (error) {
                console.log('Error:', error);
                setLoading(false);
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