import React, { useEffect, useState } from "react";
import Video from "./Video";
import UploadFile from "../../services/UploadFile";
import VideoDropzone from './components/videoDropzone'

import { filesize } from "filesize";
import { Toaster } from "sonner";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

import { VideoInput } from "./components/VideoInput";
import { useForm } from "react-hook-form";
import { TextField } from "@radix-ui/themes";
import { Input } from "../../components/ui/Input";
import { SelectValue } from "../../types";
import { IAddAttributes } from "../../services/Video";
import { log } from "console";
import { useVideoAttributes } from "../../hooks/videos/useVideoAttributes";

const video = new Video()

const playlists = [
    { id: 1, name: "play 1" },
    { id: 2, name: "play 2" },
    { id: 3, name: "play 3" },
    { id: 4, name: "play 4" },
    { id: 5, name: "play 5" },
]

export default function UploadPage() {


    const uploadFile = new UploadFile({ UploadType: 'video' })

    const [videoTitle, setVideoTitle] = useState("")
    const [videoId, setVideoId] = useState<string>()
    const [playlist, setPlaylist] = useState<number>()
    const  { loading, submit } = useVideoAttributes()

    const { register, control, handleSubmit } = useForm<IAddAttributes>()

    const handleUpload = async ({ files }: any) => {

        const [file] = files

        const uploadedFile = {
            file,
            readableSize: filesize(file.size),
            video,
            videoTitle: ''
        }

        const { publicId } = await uploadFile.processUploadVideo(uploadedFile)
        setVideoId(publicId)

    }

    const onSubmit = (data: IAddAttributes) => {
        if (videoId) {
            submit(videoId, data)
        }
    }

    const VideoInputTemp = () => {
        return (
            <div className="flex w-full h-full md:h-fit md md:w-1/3 flex-col md:py-10 justify-center items-center rounded-xl bg-vive_items">
                <h2 className="text-2xl mb-12" >Comece selecionando um video!</h2>
                <VideoInput onUploadVideo={handleUpload} />
            </div>

        )
    }
    const FormTemp = () => {
        return (
            <>
                <div className="h-full w-full md:aspect-video md:h-fit overflow-hidden md:w-2/3 bg-vive_items rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="h-full w-full flex">
                        <div className="w-full h-full  md:w-2/3 p-12 bg-white bg-opacity-5">

                            <h2 className="text-lg">Titulo do video </h2>
                            <InputText
                                className="md:w-full my-4 bg-vive_items"
                                {...register("title")}

                            />
                            <h2 className="text-lg">Playlist</h2>
                            {/* <Dropdown

                                value={playlist}
                                onChange={(e: any) => setPlaylist(e.value)}
                                options={playlists}
                                optionLabel="name"
                                placeholder="Selecione uma playlist"
                                className="md:w-full my-4 bg-vive_items"
                            />  */}
                        </div>
                                <div className="flex grow justify-between flex-col">
                                    <div>a</div>
                                    <div>a</div>
                                    <button className=" w-full bg-vive_main p-5" type="submit">Finalizar</button>
                                </div>
                    </form>
                </div>
            </>
            // <div className="flex w-full h-full md:h-fit md:aspect-video md:w-2/3 rounded-xl bg-vive_items">
            //     <form className="h-full w-full">
            //         <div className="h-full bg-white bg-opacity-5 w-2/3 p-10">

            //             <h2 className="text-lg">Titulo do video </h2>
            //             <InputText
            //                 className="md:w-full my-4 bg-vive_items"
            //                 {...register("tittle")}

            //             />
            //             {/* <h2 className="text-lg">Playlist</h2>
            //          <Dropdown 

            //             value={playlist}
            //             onChange={(e: any) => setPlaylist(e.value)} 
            //             options={playlists} 
            //             optionLabel="name" 
            //             placeholder="Selecione uma playlist" 
            //             className="md:w-full my-4 bg-vive_items" 
            //         /> */}

            //         </div>

            //     </form>


            // </div>

        )
    }

    return (
        <div className="flex justify-center items-center h-full">
            {
                !videoId
                    ? VideoInputTemp()
                    : FormTemp()
            }
        </div>

    )

}

{/* <div className="grid grid-cols-6 grid-rows-5 m-20 mx-40 border-zinc-700 rounded-lg p-8 border-2 gap-4">
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
                        <InputText value={"asdasd"} />
    
                    </div>
                    <div className="col-span-3 row-start-3 ">
                        <InputText name="videoTitle"  />
                    </div>
                    <div className="col-span-3 col-start-4 row-start-3 ">
                        <InputText name="videoTitle"  />
    
                    </div>
                    <div className="col-span-3 row-span-2 row-start-4">
                        <VideoDropzone  onUpload={handleUpload} />
                    </div>
                    <div className="col-span-3 row-span-2 col-start-4 row-start-4">
                        <VideoDropzone  onUpload={handleUpload} />
    
                    </div>
                </div> */}