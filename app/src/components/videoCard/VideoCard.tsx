import { MouseEventHandler } from "react"
import { baseURL } from "../../helpers/env"
import { getWatchUrl, redirectTo } from "../../helpers/util"

interface videoCardProps {
    title: string
    image: string
    videoId: string
}

export function VideoCard ({title, image, videoId}: videoCardProps) {

    const redirectToWatchPage: MouseEventHandler<HTMLDivElement> = () => {
        redirectTo(getWatchUrl(videoId))
    }

    return (
        <div className="flex-shrink-0 cursor-pointer"
                onClick={redirectToWatchPage}
        >
            <div className="inline-block w-56 mx-4 my-2">
                <div className="aspect-video bg-vive_items rounded-lg md:w-full ">
                    {/* <img src={image} alt="video card" /> */}
                </div>
                <p>{title}</p>
            </div>

        </ div>
    )

}