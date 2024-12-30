import { useEffect, useRef, useState } from "react"
import { redirectTo } from "../../helpers/util"
import HeaderBar from "../../components/headerBar/headerBar"
import { useSearhVideos } from "../../hooks/videos/useSearhVideos"
import { VideoCard } from "../../components/videoCard/VideoCard"

export default function SearchPage() {

    const [search, setSearch] = useState<string | null>(null)
    const { buscar, loading, videos } = useSearhVideos()
    const initialized = useRef<boolean>(false)


    useEffect(() => {

        if (!initialized.current) {

            const urlParams = new URLSearchParams(window.location.search)
            const searchParam = urlParams.get('s')

            if (!searchParam) {
                redirectTo("/")
            } else {
                setSearch(searchParam)
                buscar(searchParam)
                initialized.current = true
            }
        }
    }, [])


    return (
        <>
            <HeaderBar />
            <div className="sm:m-0 md:m-16 pt-4 flex justify-center">
                <div className="w-4/5">
                    <div className="  bg-opacity-5 p-3 rounded-md">
                        <p className="mb-4">Resultados para: {search}</p>
                        <hr className="opacity-5"/>
                    </div>

                    <div className="grid sm:grid-cols-1 md:grid-cols-3">
                        {
                            videos.map((video) => {
                                return <div className="flex justify-center">
                                     <VideoCard size="lg" image="https://random.imagecdn.app/300/200" title={video.title} videoId={video.videoId} />
                                </div>
                            })
                        }

                    </div>
                </div>

            </div>
        </>
    )
}