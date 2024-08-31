import { useState } from "react"
import Api from "../../services/Api"
import { toast } from "sonner"
import Video, { CreateComment } from "../../services/Video"



export const useComments = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const submit = async ({ videoId, comment }: CreateComment) => {

        try {
            setLoading(true)      
            await Video.createComment({videoId, comment})
            setLoading(false)      

        }
        catch (err) {
            toast.error('Nao foi possivel encontrar os comentarios')
        }
    }
    return { 
        submit,
        loading
    }
}