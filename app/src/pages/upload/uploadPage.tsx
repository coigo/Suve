import React, { useEffect, useState } from "react";
import VideoDropzone from './components/videoDropzone'
import { filesize } from "filesize";
import UploadFile from "../../services/UploadFile";
import { Toaster } from "sonner";
import { Input } from "../../components/ui/Input";


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
            uploadFile.processUploadVideo(uploadedFile)
        }
    }, [uploadedFile, uploadFile.processUploadVideo])

    return (
        <>
            <Toaster
			toastOptions={{
				classNames: {
					toast: "bg-vive_items",
					title: "text-white",
					description: "text-white",
				},
			}}/>

            
            <div className="grid grid-cols-6 grid-rows-5 m-20 mx-40 border-zinc-700 rounded-lg p-8 border-2 gap-4">
                <div className="col-span-6 flex justify-between">
                    <div className="aspect-square rounded-lg bg-vive_items w-40 "></div>
                    <div className="h-full ">
                        <div className="flex justify-end gap-6 m-2">
                            <p className="mt-8">Imagem:</p>
                            <div className="aspect-square rounded-md w-16 bg-vive_items "></div>
                        </div>
                        <div className="flex justify-end gap-6 m-2">
                            <p className="mt-8">video:</p>
                            <div className="aspect-square rounded-md w-16 bg-vive_items "></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 row-start-2 h-fit">
                    <Input name="videoTitle" width="full" label="Tilulo do Video" ></Input>
                </div>
                <div className="col-span-3 row-start-3 ">
                    <Input name="videoTitle" width="full" label="Tilulo do Video" ></Input>
                </div>
                <div className="col-span-3 col-start-4 row-start-3 ">
                    <Input name="videoTitle" width="full" label="Tilulo do Video" ></Input>

                </div>
                <div className="col-span-3 row-span-2 row-start-4">
                    <VideoDropzone  onUpload={handleUpload} />
                </div>
                <div className="col-span-3 row-span-2 col-start-4 row-start-4">
                    <VideoDropzone  onUpload={handleUpload} />

                </div>
            </div>
    
        </>
    )
}