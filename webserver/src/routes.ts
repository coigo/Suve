import Express, { Request, Response } from "express";
import WatchControler from "./controler/WatchControler";
import UploadControler from './controler/UploadControler'
import multer from 'multer'
import multerConfig from "./multer-config";
import UserControler from "./controler/UserControler";

const watch = new WatchControler()
const upload = new UploadControler()
const user = new UserControler()


export const router = Express.Router()

router.post('/upload', multer(multerConfig).single('file'), upload.handle)
router.get('/watch', watch.handle )
router.post('/signin', user.signIn )
router.post('/signup', user.signUp )

