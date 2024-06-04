import { useParams } from "react-router-dom"
import User from "../../services/User"
import { toast } from "sonner"
import { useEffect } from "react"
import HeaderBar from "../../components/headerBar/headerBar"

export default function UserPerfil () {
    
    const { userId } = useParams()

    const onload = async () => {
        try {
            if (userId) {
                console.log(userId);
                //const loaadUser = await User.getData(userId)
            }
            else {throw Error('caraalhoooo')}
            toast.error('erro porra')
        } catch (err) {
            console.log('eroo');
            toast.error('erro porra')
        }
    }

    useEffect( () => {
        onload()
    } , [userId] )
    
    return (
        <>
            <div className="h-full mt-    ">
                <div className="bg-gray-600 w-full h-1/3 rounded-md">
                    a
                </div>
            </div>
            <HeaderBar />
        </>
        
    )
}