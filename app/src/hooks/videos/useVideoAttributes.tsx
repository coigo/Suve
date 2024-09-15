import { useState } from "react"
import Api from "../../services/Api"
import { toast } from "sonner"
import Video, { IAddAttributes } from "../../services/Video"

export const useVideoAttributes = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const submit = async (publicId: string, data: IAddAttributes) => {
        try {
            await Video.addAttributes(publicId, data)

        }
        catch (err) {
            toast.error('Nao foi possivel encontrar os comentarios')
        }
    }
    return {
        loading,
        submit 
    }
}