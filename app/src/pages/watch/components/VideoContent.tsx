
interface VideoProps {
    url:string,
    captionTrack?: string
}  

export default function VideoContent ({url, captionTrack}: VideoProps) {

    return (
        <>
            <video 
                src={url}
                //autoPlay
                controls
                className=" sm:w-full md:w-2/3 aspect-video rounded-md"
                

                {...captionTrack && <track src={captionTrack} kind="captions" label="Portuguese" />}
            >   
            </video>
        </>
    )
}