import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from "sonner";


interface onUpload {
  onUpload(uploadedFile: File): void
}

export default function VideoDropzone({ onUpload }: onUpload) {

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {

      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {

        const binaryStr = reader.result
        if (binaryStr instanceof ArrayBuffer) {
          onUpload(file)
        }

      }
      reader.readAsArrayBuffer(file)
    })

  }, [])
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'video/mp4': ['.mp4'],
    },
    maxFiles: 1,

    onDropAccepted: () => {
      toast.success("O video esta sendo processado")
      
    },
    onDropRejected: () => {
      toast.error("Apenas aquivos .MP4 sao aceitos")
      console.log(123);
      
    }
  })

  return (
    <div className='border-dashed rounded-md bg-vive_items p-4 text-center border-2 border-white h-40 w-full' {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Arraste e solte algum video aqui, ou clique para selecionar o arquivo</p>
    </div>
  )
}