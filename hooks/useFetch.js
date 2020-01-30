import React from "react";
import { useEffect, useState } from 'react';



const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUrl = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        fetchUrl();
    }, [url]);

    return [data, loading, fetchUrl]
      
}

export default useFetch;
