import Minio from 'minio'

const { MINIO_ACCESSKEY, MINIO_SECRETKEY } =  process.env

if ( !MINIO_ACCESSKEY || !MINIO_SECRETKEY) {
    throw new Error("Esta faltando alguma variavel de configuracao do Minio")
}

export const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: true,
    accessKey: MINIO_ACCESSKEY,
    secretKey: MINIO_SECRETKEY,
  })

const existe4 = await minioClient.bucketExists('videos') 

if (! await minioClient.bucketExists('videos')) {
    minioClient.makeBucket('videos')
}