import { Toaster } from "sonner";
import HeaderBar from "../../components/headerBar/headerBar";
import { Tags } from "./tags";
import { useEffect, useState } from "react";
import auth from "../../helpers/auth";
import { UserInterestsDialog } from "../../components/interestsDialog";
import { useGetVideos } from "../../hooks/videos/useGetVideos";
import { VideoCard } from "../../components/videoCard/VideoCard";
import { useMountEffect } from 'primereact/hooks';




export default function MainPage () {

    
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [ user, setUser ] = useState<any>(auth.getAuth())
    const {buscar, loading, videos} = useGetVideos() 
        
        useMountEffect(() => {
            buscar()
            user && setIsOpen(!user.isTagged);   
    })
    

    return (
        <div className=" p-0">
            
			<Tags />
            <div className="flex gap-3 flex-wrap ml-8">

            {
                videos.map(video => {
                    return (
                        <VideoCard image="https://random.imagecdn.app/224/126" title={video.title} videoId={video.publicId}/>
                    )
                })
            }
            </div>
            <HeaderBar />
            {user && <UserInterestsDialog userId={user.id} isOpen={isOpen} />}
        </div>
    )
}