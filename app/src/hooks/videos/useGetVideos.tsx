import { useState } from "react"
import Api from "../../services/Api"
import { toast } from "sonner"
import Video from "../../services/Video"

export const useGetVideos = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [videos, setVideos] = useState<any[]>([])

    const buscar = async () => {

            try {
                const videos = await Video.getVideos()
                
                setLoading(false)
                setVideos(videos)
            } catch (err) {
                toast.error('Nao foi possivel encontrar os comentarios')
            }
    }
    return { 
        loading, 
        buscar,
        videos
    }
}