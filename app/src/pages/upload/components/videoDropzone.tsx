import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import UploadFile from '../../../services/UploadFile'

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
          //   const fileBlob = new Blob([binaryStr])

          //   uploadFile.uploadFile
          //     ({
          //       filename:'a',
          //       file: fileBlob
          //     })
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

    },
    onDropRejected: () => {
      console.log('nao aceitooo')
    }
  })

  return (
    <div className='border-solid border-1 border-indigo-400 h-40 w-62' {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Arraste e solte alguns arquivos aqui, ou clique para selecionar arquivos</p>
    </div>
  )
}