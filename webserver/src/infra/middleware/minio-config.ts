import Minio from 'minio'

const { MINIO_ACCESSKEY, MINIO_SECRETKEY, VIDEO_BUCKET } =  process.env

if ( !MINIO_ACCESSKEY || !MINIO_SECRETKEY || !VIDEO_BUCKET) {
    throw new Error("Esta faltando alguma variavel de configuracao do Minio")
}

export const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: true,
    accessKey: MINIO_ACCESSKEY,
    secretKey: MINIO_SECRETKEY,
  })


if (! await minioClient.bucketExists(VIDEO_BUCKET)) {
    minioClient.makeBucket('videos')
}

console.log(">> Conectado ao bocket")

