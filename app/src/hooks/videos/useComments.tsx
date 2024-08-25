import { useState } from "react"
import Api from "../../services/Api"
import { toast } from "sonner"
import Video from "../../services/Video"

interface getCommentProps {
    videoId: string
    last: number
    commentList: any[]
}

export const useComments = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [comments, setComments] = useState<any[]>([])

    const buscar = async ({ videoId, last, commentList }: getCommentProps) => {

        
        try {
            const comments = await Video.getComments({videoId, params: { last }})
            commentList.push(comments)
            setComments(commentList)
            setLoading(false)
        }
        catch (err) {
            toast.error('Nao foi possivel encontrar os comentarios')
        }
    }
    return { loading, comments, buscar }
}