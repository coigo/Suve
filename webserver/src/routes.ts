import Express, { Request, Response } from "express";
import WatchControler from "./controler/WatchControler";
import UploadControler from './controler/UploadControler'
import multer from 'multer'
import multerConfig from "./multer-config";

const watch = new WatchControler()
const upload = new UploadControler()


export const router = Express.Router()

router.post('/upload', multer(multerConfig).single('file'), upload.handle)
router.get('/watch', watch.handle )
router.get('/signin', watch.handle )
router.get('/signup', watch.handle )

