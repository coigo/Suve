import Express, { Request, Response } from "express";
import WatchController from "../../controllers/WatchController";
import UploadController from '../../controllers/UploadController'
import multer from 'multer'
import multerConfig from "../middleware/multer-config";
import UserController from "../../controllers/UserController";
import VideoController from "../../controllers/VideoController";

export const router = Express.Router()

const watch = new WatchController()
const upload = new UploadController()
const user = new UserController()
const video = new VideoController()

router.get('/public/watch', watch.handle)
router.post('/public/signin', user.signIn)
router.post('/public/signup', user.signUp)
router.post('/public/request', user.signInRequest)
router.post('/public/video/comment', video.createComment)
router.get('/public/video/:videoId/comment', video.getComments)

router.post('/auth/upload/:publicId', video.addVideoAttributes)
router.post('/auth/upload', multer(multerConfig).single('file'), upload.handle)
router.post('/auth/video/upvote', video.upvoteVideo)

router.get('/auth/video/recomendacoes', video.addVideoAttributes)
router.get('/public/video/recomendacoes', video.getTopRatedVideos)

router.post('/auth/user/interests', user.addUserInterests)