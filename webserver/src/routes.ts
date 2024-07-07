import Express, { Request, Response } from "express";
import WatchController from "./Controller/WatchController";
import UploadController from './Controller/UploadController'
import multer from 'multer'
import multerConfig from "./multer-config";
import UserController from "./Controller/UserController";

const watch = new WatchController()
const upload = new UploadController()
const user = new UserController()


export const router = Express.Router()

router.post('/upload', multer(multerConfig).single('file'), upload.handle)
router.get('/watch', watch.handle)
router.post('/request', user.signInRequest)
router.post('/signin', user.signIn)
router.post('/signup', user.signUp)

