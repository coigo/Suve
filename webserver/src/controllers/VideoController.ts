import { Request, Response } from "express";
import { AuthRequest } from "../infra/shared/AuthRequest";
import VideoRepository from "../repository/videoRepository";
import { UserRepository } from "../repository/userRepository";
import { VideoService } from "../service/VideoService";
import { asyncErrorHandler } from "./ErrorController";

export default class VideoController {
    private service: VideoService
    private errorHandler = asyncErrorHandler

    constructor () {
        this.service = new VideoService(new VideoRepository(), new UserRepository()) 
    }

    public createComment = this.errorHandler(async ({ user: {userId, username }, body: { videoId, comment} } : AuthRequest, res: Response) => {
        await this.service.createComment({
            userId,
            username,
            videoId,
            comment
        })
        res.send({videoId, comment})
    })
    
    public getComments = this.errorHandler(async ({ params: { videoId }, query: {last}} : AuthRequest, res: Response) => {
        const comments = await this.service.getComments( String(videoId), Number(last) )
        res.send(comments)
    })

    public addVideoAttributes = this.errorHandler(async ({ params: { publicId }, body} : AuthRequest, res: Response) => {
        const comments = await this.service.addVideoAttributes( String(publicId), body )
        return res.send(comments)
    })
    public upvoteVideo = this.errorHandler(async ({ user: { id }, body: { videoId }}: AuthRequest, res: Response) => {
        const upvote = await this.service.upvote({
            userId: id,
            videoId
        })
        res.send(upvote)
    })

    public getVideos = this.errorHandler(async ({ user: { id } } : AuthRequest, res: Response) => {
        const videos = await this.service.getVideosByInterests(id)
        return res.send(videos)
    })

    public getTopRatedVideos = this.errorHandler(async (req: Request, res: Response) => {
        const videos = await this.service.getTopRatedVideos()
        return res.send(videos)
    })

    public getVideosBySearch = this.errorHandler(async ({ query: { search }} : AuthRequest, res: Response) => {
        console.log(search)
        const videos = await this.service.getVideosBySearch(search as string)
        return res.send(videos)
    })

    public getVideoImage = this.errorHandler(async ({ params: { image } }: Request, res: Response) => {
        return res.sendFile(`${image}.png`, {root: "./videoImages"})
    })


}