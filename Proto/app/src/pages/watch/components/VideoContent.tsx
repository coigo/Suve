
interface VideoProps {
    url:string
}  

export default function VideoContent ({url}: VideoProps) {

    return (
        <>
            <video 
                src={url}
                autoPlay
                controls
                width={'1280'}
                height={'720'}
            >   
            </video>
        </>
    )
}