import { MouseEventHandler } from "react"
import { baseURL } from "../../helpers/env"
import { getWatchUrl, redirectTo } from "../../helpers/util"

interface videoCardProps {
    title: string
    image: string
    videoId: string
    size?: 'md' | 'lg'
}

const cardSize = {
    'md': 'w-56',
    'lg': 'w-80'
}

export function VideoCard ({size, title, image, videoId}: videoCardProps) {

    const redirectToWatchPage: MouseEventHandler<HTMLDivElement> = () => {
        redirectTo(getWatchUrl(videoId))
    }

    return (
        <div className={"flex-shrink-0 cursor-pointer" }
                onClick={redirectToWatchPage}
        >
            <div className={`inline-block mx-4 my-2 ${size ? cardSize[size] : 'w-56'}` }>
                <div className="aspect-video bg-vive_items overflow-hidden rounded-lg sm:w-3/4 md:w-full ">
                     <img src={image} className="object-fill" alt="video card" /> 
                </div>
                <p>{title}</p>
            </div>

        </ div>
    )

}