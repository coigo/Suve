import { FileUpload, FileUploadOptions, FileUploadSelectEvent } from 'primereact/fileupload';
import 'primeicons/primeicons.css';
        

interface VideoInputProps {
    onUploadVideo: (file: FileUploadSelectEvent) => void
}

export function VideoInput ({ onUploadVideo }: VideoInputProps) {

    
    const uploadOptions: FileUploadOptions = { icon: 'pi pi-upload',label: "Selecione algum video.",  className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };

    
    return (
        <div className="card flex justify-content-center">
            <FileUpload 
                className='rounded-md h-20 md:h-0 p-10 w-full text-center align-middle bg-indigo-400 bg-opacity-75 border-dashed border-white border border-opacity-60'
                mode="basic" 
                onSelect={(file) => {onUploadVideo(file)}} 
                accept="video/mp4"
                chooseOptions={ uploadOptions }
                
                
            />

                
        </div>  
    )
}