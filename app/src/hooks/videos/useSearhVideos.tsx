"use client"

import { useState } from "react"
import { Video } from "../../types"

export const useSearhVideos = () => {
    
    const [ videos, setVideos ] = useState<Video[]>([])
    const [ loading, setLoading ] = useState<boolean>(false)

    const buscar = () => {
        setLoading(true)
        try {
            const videos = []
            setVideos(videos)
            setLoading(false)
        } catch (err) {
            setVideos(videos)
            
        }
    }

    return {loading, videos, buscar}

}