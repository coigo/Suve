import {Client} from 'minio'

const minioClient = new Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'admin',       // igual ao MINIO_ROOT_USER
  secretKey: 'admin123',    // igual ao MINIO_ROOT_PASSWORD
})

export {minioClient}