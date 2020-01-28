import React, { useEffect, useState, createContext, useCallback } from 'react';
import axios from 'axios'

const API_ID = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'

export const PhotoContext = createContext()

export const PhotoProvider = (props) => {


    const [photos, setPhotos] = useState([]);
    const [count, setCount] = useState(2);
    const [isLoading, setLoading] = useState(false)


    useEffect(() => {
        axios.get(
            `https://api.unsplash.com/photos/random?count=${count}&client_id=${API_ID}`
        )
        .then(response => response.data)
        .then(photoItem =>  setPhotos(photoItem))
    }, [count])







    return (
        <PhotoContext.Provider value={[photos]}>
            {props.children}
        </PhotoContext.Provider>
    )

}

