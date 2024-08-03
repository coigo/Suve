import { useEffect, useRef, useState } from 'react';
import { apiBaseURL } from '../../helpers/env';
import { redirectTo } from '../../helpers/util';

import VideoContent from './components/VideoContent';
import HeaderBar from '../../components/headerBar/headerBar';
import { VideoCard } from '../../components/videoCard/VideoCard';
import UpvoteVideo from './components/UpvoteVideo';


export default function WatchPage() {

    const [ videoUrl, setVideoUrl ] = useState<string>("")
    const [ videoId, setVideoId ] = useState<string >()
    const initialized = useRef<boolean>(false)
    const scrollableDivRef = useRef<HTMLDivElement>(null);




    useEffect(() => {
        if (!initialized.current) {
            const urlParams = new URLSearchParams(window.location.search)
            const videoId = urlParams.get('video')
            if ( !videoId ) {
                redirectTo("/")
            } else {
                setVideoId(videoId)
                setVideoUrl(apiBaseURL + "/public/watch?video=" + videoId)
                initialized.current = true
            }
        }

    }, [])



    return (
           <>
            <section className='mt-20'>
                <div className='w-full flex justify-center'>
                    <VideoContent
                        url={ videoUrl }
                    />

                </div>
            </section>
            <section className='flex justify-center overflow-hidden'>
                <div className='flex py-4 sm:w-full md:w-2/3 '>
                    <div>
                        <div className='aspect-square h-24 rounded-lg bg-vive_items'> </div>
                    </div>          
                    <div className='flex flex-col gap-2 justify-center mx-4'>
                        { videoId && <UpvoteVideo videoId={videoId}/> }
                        <div className='bg-vive_main rounded-md py-2 w-28 text-center'  > o Comentarios </div>

                    </div>
                    <div className='flex overflow-x-auto flex-shrink-0 flex-1 scrollbar-thin scrollbar-track-transparent scroll-smooth  scrollbar-thumb-vive_main' id='videoCards'
                        ref={scrollableDivRef}
                        onWheel={(e) => {
                                scrollableDivRef.current ? scrollableDivRef.current.scrollLeft += e.deltaY * 3 : null;
                            
                } }
                    >
                        <VideoCard image='wtf' videoId='123' title='123123123'/>
                        <VideoCard image='wtf' videoId='123' title='123123123'/>
                        <VideoCard image='wtf' videoId='123' title='123123123'/>
                        <VideoCard image='wtf' videoId='123' title='123123123'/>
                        <VideoCard image='wtf' videoId='123' title='123123123'/>
                        <VideoCard image='wtf' videoId='123' title='123123123'/>
                        <VideoCard image='wtf' videoId='123' title='123123123'/>
                        <VideoCard image='wtf' videoId='123' title='123123123'/>
                        <VideoCard image='wtf' videoId='123' title='123123123'/>
                        <VideoCard image='wtf' videoId='123' title='123123123'/>        

                    </div>
                </div>

            </section>
            <HeaderBar />
           </>
    )
}