import React, { useEffect, useState } from "react";
import VideoDropzone from './components/videoDropzone'
import { filesize } from "filesize";
import UploadFile from "../../services/UploadFile";


export default function UploadPage() {

    const uploadFile = new UploadFile({ UploadType:'video' })
    const [uploadedFile, setUploadedFile] = useState({ file: new File([], ''), readableSize: '' })

    const handleUpload = (file: File) => {
        const uploadedFile = {
            file,
            readableSize: filesize(file.size)
        }
        setUploadedFile(uploadedFile)
    }

    useEffect( () => {
        if ( uploadedFile.readableSize ) {
            uploadFile.processUpload(uploadedFile)
        }
    }, [uploadedFile])

    return (
        <>
            <VideoDropzone onUpload={handleUpload} />
        </>
    )
}