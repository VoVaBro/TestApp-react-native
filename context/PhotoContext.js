import React, { useEffect, useState, createContext, useCallback } from 'react';
import axios from 'axios'

const API_ID = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'

export const PhotoContext = createContext()

export const PhotoProvider = (props) => {


    const [photos, setPhotos] = useState([]);
    const [count, setCount] = useState(2);

   

    const getPhotos =  async () => {
        const response = await axios.get(`https://api.unsplash.com/photos/random?count=${count}&client_id=${API_ID}`)

        setPhotos(response.data)
        // setLoading(true)
    }
    
    useEffect(() => {
        getPhotos()
    }, [count])

    return (
        <PhotoContext.Provider value={[photos]}>
            {props.children}
        </PhotoContext.Provider>
    )

}

