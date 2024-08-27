import { useState } from "react"
import Api from "../../services/Api"
import { toast } from "sonner"
import Video from "../../services/Video"

interface getCommentProps {
    videoId: string
    last: number
    commentList: any[]
    lastWasReached?: boolean
}

export const useComments = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [comments, setComments] = useState<any[]>([])
    const [last, setLast ]= useState<number>(0)
    const [lastReached, setReached] = useState<boolean>(false)

    const buscar = async ({ videoId, last, commentList, lastWasReached }: getCommentProps) => {

        if (!lastWasReached) {

            try {
                const comments = await Video.getComments({videoId, params: { last }})
                
                setComments(commentList.concat(comments))
                if (!comments[0]) {
                    setReached(true)
                }
                setLoading(false)
                setLast(commentList.length)
                console.log("A coisa e", commentList)
            }
            catch (err) {
                toast.error('Nao foi possivel encontrar os comentarios')
            }
        }
    }
    return { 
        lastReached,
        comments,
        loading, 
        buscar, 
        last
    }
}