
interface VideoProps {
    url:string,
    captionTrack?: string
}  

export default function VideoContent ({url, captionTrack}: VideoProps) {

    return (
        <>
            <video 
                src={url}
                autoPlay
                controls
                
                width={'1280'}
                height={'720'}
                {...captionTrack && <track src={captionTrack} kind="captions" label="Portuguese" />}
            >   
            </video>
        </>
    )
}