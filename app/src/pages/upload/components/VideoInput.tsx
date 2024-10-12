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
                className=''
                mode="basic" 
                onSelect={(file) => {onUploadVideo(file)}} 
                accept="video/mp4"
                chooseOptions={ uploadOptions }
                
                
            />

                
        </div>  
    )
}