import { toast } from "sonner"
import Video, { UpvoteVideo } from "../../../services/Video"

export default function ({ videoId }: UpvoteVideo) {

    const handleUpvote = async () => {
        try  {
            await Video.upvoteVideo({ videoId })            
        }
        catch (err) {
            toast.error("Nao foi possivel dar upvote!")
        }
    }

    return (
    
        <button    
            onClick={handleUpvote}
            className='bg-vive_main rounded-md py-2 w-28 text-center'
        > ^ upvote  
        </button>

    )
}