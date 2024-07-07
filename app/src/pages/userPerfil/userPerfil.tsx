import { useParams } from "react-router-dom"
import User from "../../services/User"
import { toast } from "sonner"
import { useEffect, useRef, useState } from "react"
import HeaderBar from "../../components/headerBar/headerBar"

export default function UserPerfil () {
    
    //const { userId } = useParams()
    const userId = null
    const initialized = useRef<boolean>(false)  

    
    const onload = async () => {
        try {
            if (!userId) {
                const loadUser = await User.signUp({email:'123123123'})
            }
            else {throw new Error('caraalhoooo')}
            } 
            catch (err) {
            toast.error('Algo deu errado procurando pelo usuario.')
        }   
    }
    useEffect( () => {
    if (!initialized.current) {
        onload()
        initialized.current = true;
        }
    })
    return (
        <>
            <div className="h-full relative">
                <div className="bg-vive_main w-full h-1/3 rounded-md">
                    
                </div>
                <div className="fixed translate-x-1/2 top-44 left-4 md:left-32 h-64 aspect-square rounded-2xl bg-vive_items "></div>
                <div className="flex">
                    <p>@MrCoigo</p>
                </div>
            </div>
                <HeaderBar />
        </>
        
    )
}