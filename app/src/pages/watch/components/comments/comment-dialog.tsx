import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/Button"
import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from 'date-fns'
import { useComments } from "../../../../hooks/videos/useComments";


interface VideoCommentProps {
    videoId: string
    commentAmmount: number
}

type Comment = {
    username: string
    comment: string
    date: Date
}

export function CommentDialog({ videoId, commentAmmount }: VideoCommentProps) {

    const [open, setOpen] = useState<boolean>(false)
    const { comments, loading, buscar } = useComments()
    const handleClose = (isOpen: boolean) => {
        setOpen(isOpen)
    }

    useEffect(() => {
        console.log('buscado');
        buscar({ videoId, last: 0, commentList: [] })
    }, [])
    
    const handleBuscarComentarios = () => {
        buscar({ videoId, last: 0, commentList: comments })

    }

    return (
        <Dialog.Root open={open} onOpenChange={handleClose}>
            <Dialog.Trigger className="bg-vive_main rounded-md py-2 w-28 text-center">
                <p>Comentarios</p>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/20" />
                <Dialog.Content className="fixed p-5 md:left-1/2 md:top-1/2 inset-0 md:inset-auto md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[520px] md:h-[60vh] w-full bg-vive_items rounded-xl flex flex-col outlite-none overflow-hidden"

                >
                    {
                        comments.map((comment: Comment) => (
                            <div className="w-full p-4">
                                <div className="w-full flex justify-between">
                                    <span>{comment.username}</span>
                                    <span>{formatDistanceToNow(comment.date)}</span>
                                </div>
                                <div className="my-2">
                                    <p>{comment.comment}</p>
                                </div>
                                <button onClick={handleBuscarComentarios}>buscar</button>
                            </div>
                        ))
                    }
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>

    )
} 