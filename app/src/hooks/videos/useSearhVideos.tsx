"use client"

import { useState } from "react"
import { Video } from "../../types"
import videoService from "../../services/Video"

export const useSearhVideos = () => {
    
    const [ videos, setVideos ] = useState<Video[]>([])
    const [ loading, setLoading ] = useState<boolean>(false)

    const buscar = async (search: string) => {
        setLoading(true)
        try {
            const videos = await videoService.getSearchVideo({ search })
            setVideos(videos)
            setLoading(false)
        } catch (err) {
            setVideos(videos)
            
        }
    }

    return {loading, videos, buscar}

}